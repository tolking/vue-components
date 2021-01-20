const markdown = require('markdown-it')
const { highlight } = require('vitepress/dist/node/markdown/plugins/highlight')

/**
 * Combine the script content
 * @param {string} script script string
 */
function assignScript(script) {
  const dependencies = {}
  const attrs = {}
  const content = script
    // import { ref } from 'vue' -> ''
    .replace(/import\s?\{.*\}.*/g, (item) => {
      const key = getInnerString(item.replace(/\'/g, '"'), '"', '"')
      const value = getInnerString(item.replace(/\s+/g, ''), '{', '}')
      const list = value ? value.split(',') : []
      if (dependencies[key]) {
        dependencies[key] = dependencies[key].concat(list)
      } else {
        dependencies[key] = list
      }
      return ''
    })
    /**
     * const -> let
     *
     * const a = -> let a =
     * const a = -> a =
     */
    .replace(/(const|let|var)\s\w*\s?=/g, (item) => {
      const attr = getInnerString(item, '\\s', '\\s?=')
      if (attr in attrs) {
        return attr + ' ='
      } else {
        attrs[attr] = attr
        return `let ${attr} =`
      }
    })
    // Remove extra line breaks
    .replace(/\n+/gm, '\n')
  // Combine the import
  const reImport = Object.keys(dependencies).reduce((all, item) => {
    const filterAttrs = [...new Set(dependencies[item])]
    return all + `import {${filterAttrs + ','}} from '${item}';\n`
  }, '')

  return reImport + content
}

/**
 * Extract part of the new string from the middle of the string
 * @param {string} string string
 * @param {string} prefix RegExp string
 * @param {string} postfix RegExp string
 * @param {string} type g | m | i
 */
function getInnerString(string, prefix, postfix = '', type = 'i') {
  const result = new RegExp(`${prefix}(.*)${postfix}`, type)
  const match = string.match(result)
  return match ? match[1].trim() : undefined
}

let script = '' // Record the <script> label of the current page

module.exports = {
  render: (tokens, idx) => {
    // the `demo` block of the current page
    const htmlBlock = tokens.filter((item) => item.type === 'html_block')
    const { nesting, info = '', map } = tokens[idx]

    if (nesting === -1) {
      return '</pro-code>'
    }

    const matchedInfo = info.trim().match(/^demo\s+(.*)$/)
    const description = matchedInfo && matchedInfo[1]
    const descTemplate = markdown().render(description || '')
    let str = '' // copy the current `demo` block code
    let lastLine = ''

    for (let i = 0; i < htmlBlock.length; i++) {
      const item = htmlBlock[i]

      if (item.map[0] >= map[0] && item.map[1] <= map[1]) {
        const { map, content } = item
        const delta = map[0] - (lastLine || map[1])

        if (delta > 0) {
          str += '\n'.repeat(delta)
        }
        str += content
        lastLine = map[1]
        if (i === 0) {
          script = ''
        }
        // Extract the <script> label content
        if (content.includes('<script')) {
          if (/export\sdefault\s?\{/m.test(content)) {
            const setup = content.match(
              /setup\s?\(\)\s?\{((\s|\S)*)return\s?\{/m
            )[1]
            const reContent = content.replace(
              /export\sdefault\s?\{((\s|\S)*)\}/m,
              setup
            )

            script += reContent.match(/^<script\s?.*?>((\s|\S)*)<\/script>/m)[1]
          } else {
            script += content.match(/^<script\s?.*?>((\s|\S)*)<\/script>/m)[1]
          }
          htmlBlock[i].content = ''
        }
        // Change the last content to <script> of the current page
        if (i + 1 === htmlBlock.length) {
          htmlBlock[i].content = `
          <script setup>
            ${assignScript(script)}
          </script>`
        }
      }
    }

    return `
    <pro-code>
      ${description ? `<template #description>${descTemplate}</template>` : ''}
      <template #code>${highlight(str, 'vue')}</template>
    `
  },
}
