# Apograph

Apograph (Latin _apographon_: transcript/copy) provides autocompletion of terms and sentences from your lecture slides for faster note-taking in Markdown or Typst.
It offers additional features such as quick generation of Excalidraw and Draw.io diagrams to make taking notes in VS Code during lectures even easier.

> [!WARNING]
> Features are still in development and not yet fully functional.
> Breaking changes are possible, without prior notice.
> Use at your own risk.

## Features

**Quick Diagram Generation**

New Excalidraw/Draw.io-Diagrams can now be added with one command and are automatically linked as images to the current document.

**Typst and Markdown editing enhancements**

Math blocks and code blocks are now automatically closed (like brackets and parentheses) and can be used to surround selected text.

In Typst, shortcuts for toggling selected text **bold**/_italic_ are now supported, duplicate blank lines are removed on save, and a trailing newline is added on save.

## Planned Features

- Extract whole sentences from lecture slides (WIP, can be tried out already)
- Extract and suggest Math blocks from lecture slides and from the current document
- Add enhancements for creating lists in Typst documents

## Extension Settings

- `apograph.supportedLanguages`: Languages, where Apograph will be enabled.
- `apograph.pdfPath`: Path to the PDF, where the completion items should be extracted from.
- `apograph.excalidraw.defaultName`: The default file name for new Excalidraw Files (will be suggested). Supports dates using Python strftime syntax.
- `apograph.excalidraw.imageFolder`: The folder, where the Excalidraw images should be saved to.
- `apograph.experimental.enableLineCompletion`: Enable the completion of entire lines of text.

Debug options:

- `apograph.debug.generateProcessingOutput`: Write the output of the PDF processing to a JSON file
- `apograph.debug.disableCache`: Disable Cache for debugging purposes
