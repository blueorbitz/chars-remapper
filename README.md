# Chars Remapper

Keyboard character mapping in for easy copy and paste. Relieve from the complicated password rule, hence forgetting your password. With this, remember complicated case sensitive password with easy to remember phrase.

If you installed the chrome extension, use `ctrl+shift+Q` to open it.

## Getting Started

This is just a simple HTML page that can be added as a [Chrome Extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/) or just open using the HTML file.

The only different in both mode is the storage to store the configuration.
1. Chrome Extension using `chrome.storage` api.
1. Browser using `web storage` aka `localStorage`.

## Configuration File

Prepare a text document (`*.txt`) with the following content:
1. Line 1: Original characters (sequence)
1. Line 2: Mapped characters (sequence)
1. Can add multiple line for easier management as well, just follow `Original` then next line for the `Mapped`.

Example:
```
abcdefg
1234567
hijklmnopq
890qwertyu
```

In this example, when user type `a` will replace with `1`, `b` -> `2` and so on... `g` -> `7`, then `h` -> `8`, ..., `q` -> `u`.

Enjoy!
