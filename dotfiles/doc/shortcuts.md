# Shortcuts

## Shortcuts in VSCode

In VSCode, I have quick keys assigned to Alt+Shift+1 through Alt+Shift+6.

See also `files/vscodium/keybindings.json`

Here's a helpful mapping in VSCode.

Alt+Shift+(1 through 6):

    1. Journal: New Journal Note
    2. View: Toggle Zen Mode
    3. Search: Focus on Search View
    4. View: Toggle Terminal
    5. View: Toggle Maximized Panel (Helpful for expanding terminal upward)
    6. View: Toggle Primary Side Bar Visibility

    Alt+Home (Web Home) - Journal: Open Today
    Alt+Right (Web Forward) - Journal: Open Tomorrow
    Alt+Left (Web Back) - Journal: Open Yesterday

> Tip: When reviewing shortcuts in VSCode, set the search to `User` to see your own.
> Tip: There is an option to `Reset Keybinding` in the right-click menu.

## Shortcuts JavaScript

I have a bit of JavaScript in the HTML file I use for my homepage. It causes the above buttons 1-6 to map to whatever I've set my 6 most visited sites to.

```html
<!-- Script to jump to links on keypresses 1 through 6 -->
<script>
	watch_keys = ['1','2','3','4','5','6'];
	locations = [
		'link here...',
		'link here...',
		'link here...',
		'link here...',
		'link here...',
		'link here...',
	];
  document.onkeypress = function (e) {
    if(e.key in watch_keys)
      window.location = locations[parseInt(e.key)-1]
    else {
      console.log(e);
    }
  }
</script>
```

## Shortcuts in MS PowerToys

### Remapped Keys

In `Keyboard Manager`, `Remap a Key`:

To Mute/Unmute the `Teams` microphone with the dedicated `Volume Mute` button:

- `Volume Mute` to `Ctrl+Shift+M`

### Remapped Shortcuts

In `Keyboard Manager`, `Remap a Shortcut`:

For `Raise Hand`:

- `Alt+Shift+4` to `Ctrl+Shift+K` in app `teams`
- `Alt+Shift+4` to `Alt+Y` in app `zoom`

For `Mute`:

- `Alt+Shift+6` to `Ctrl+Shift+M` in app `teams`
- `Alt+Shift+6` to `Ctrl+A` in app `zoom`

For the VSCode/VSCodium terminal:

- `Alt+Shift+4` to 'Ctrl+`' in app `All Apps`
