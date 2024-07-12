# React + TypeScript + Vite

# Project Description

This project allows you to render a JSON object with the following fields:

```json
{
  "id": 9,
  "currentUrlPlain": "root\\folder3\\administer_hm_shyly.mp2.docx",
  "currentUrl": "/root/folder3/administer_hm_shyly.mp2.docx",
  "name": "administer_hm_shyly.mp2.docx",
  "file": true
}
```

The project takes the `currentUrlPlain` string, splits it, and renders files and folders based on the file extension.

Example:

- If the file extension is `.docx`, it renders a Word document file.
- If the file extension is `.mp3`, it renders an audio file.
- If the file extension is a folder, it renders a folder icon.

Feel free to test it out and see how it renders different types of files and folders.
