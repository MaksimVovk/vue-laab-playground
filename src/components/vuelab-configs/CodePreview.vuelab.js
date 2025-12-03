const value = `<template>
  <div class="code-preview">
    <pre><code class="language-javascript">{{ code }}</code></pre>
    <button @click="copyToClipboard">Copy</button>
  </div>
</template>`

export const propsConfig = {
  code: {
    type: 'variable',
    value: value,
    description: 'Sets the button label text',
  },
}


export const description = `The CodePreview component is designed to display formatted code snippets within your application.
 It supports syntax highlighting, copy-to-clipboard functionality, and an optional live preview area. 
 This makes it useful for documentation, interactive tutorials, or showcasing code examples alongside their rendered output.`
