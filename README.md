# Getting Started - Chrome Extension

This repository purpose is to code along the Google Chrome Getting Started on
Extensions.

# Notes

1. You may enable developer mode to load your unpacked extension at
   `chrome://extensions`
2. `storage` allows to hold data persistently (like a database)
3. `sync` at the `storage` must be already awaited async functions
4. `declarativeContent` allows to define rules for extension activation
5. `tabs` can help you get the page DOM and execute code
6. You should define various sizes of icons for the extension
7. `page_action` in the manifest refers to the icon and popup added to the
   browser for the extension
8. Name, description, icons, version are all infos that goes to the extensions
   page on chrome
9. Background scripts? Don't know, should research
10. Manifest version also no clue
11. Popup and configuration are all html files. Works just like normal web development
