# Library

A small **Library** web app built as part of *The Odin Project*.

It lets you add books through a modal form and renders each book as a card. Books can be removed and their read status can be toggled.

## Features

- Add a new book (title, author, pages, read status) via an HTML `<dialog>` form
- Display books as cards in a responsive container
- Color-coded cards:
	- Green = **Read**
	- Red = **Not Read**
- Remove a book
- Toggle a book’s read status
- Generates a unique ID for each book using `crypto.randomUUID()`

## How to Run

### Option A: Open the HTML file

1. Open [index.html](index.html) in your browser.
2. Click **Add New Book**.
3. Fill out the form and click **Submit**.

### Option B: Use a local server (recommended)

Using VS Code’s Live Server (or any local server) avoids browser restrictions that can happen with `file://`.

If you have Python installed:

- `python3 -m http.server 8000`
- Open `http://localhost:8000` in your browser

## Notes / Limitations

- Data is stored in-memory only (`myLibrary` array). Refreshing the page clears the library.
- Requires a modern browser that supports `crypto.randomUUID()`.

## Project Structure

- Root version (main):
	- [index.html](index.html)
	- [library.js](library.js)
	- [library.css](library.css)

- Duplicate/alternate copy in [Libary/](Libary/) (note the folder name spelling):
	- [Libary/library.html](Libary/library.html)
	- [Libary/library.js](Libary/library.js)
	- [Libary/library.css](Libary/library.css)

## What I’d Improve Next (optional)

- Add basic form validation (required fields, pages > 0)
- Persist data with `localStorage`
- Improve accessibility (focus management when opening/closing the dialog)
