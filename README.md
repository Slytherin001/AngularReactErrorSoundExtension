# Error Sound on Save

Never miss an error again! 🎵

**Error Sound on Save** plays a sound whenever you save a file in VS Code and errors are detected. It works with **Angular, React, JavaScript, TypeScript, Python**, and any language that provides diagnostics.

---

## ⚡ Features

- Plays a sound **only after saving** a file with errors.
- Supports **Angular, React, JS/TS, Python**, and more.
- Choose a sound from the extension’s **media folder**.
- Default sound included if no custom selection is made.
- Lightweight, easy to install, and no extra configuration required.

---

## 🎵 How to Use

1. Install the extension.
2. Open your file (Angular, React, Python, JS/TS, etc.)
3. Save the file (`Ctrl+S` / `Cmd+S`)
4. If errors exist, your selected sound will play.

---

## 📂 Media Folder

Include `.wav` files in the `media` folder. You can add more sounds but update the dropdown in `package.json`.

## 🎵 Media Folder Sounds

The extension includes multiple audio files in the `media` folder:

- `meow-ghoop-ghopp.wav`
- `faaah.wav`
- `anime-ahh.wav`
- `kya-cheda-bhosdi.wav`
- `aayein-meme.wav`
- `le-beta.wav`
- `shocked-sound-effect.wav`
- `khatam-rahul-gandhi.wav`
- `meri-jung-emotional.wav`
- `dry-fart.wav`

You can choose your preferred sound from **Settings → Error Sound → Selected Sound**.

---

## ⚙️ Settings

| Setting                    | Type   | Default                | Description                                                               |
| -------------------------- | ------ | ---------------------- | ------------------------------------------------------------------------- |
| `errorSound.selectedSound` | string | `meow-ghoop-ghopp.wav` | Select error sound from media folder (`media/meow-ghoop-ghopp.wav`, etc.) |

**How to change:**

1. Open **VS Code Extension Development Host**.
2. Go to: `File → Preferences → Settings`
3. Search for `Error Sound`.
4. Select your favorite audio from the dropdown.

---

## 🖥 Installation

### From VSIX (manual)

1. Download the `.vsix` file from GitHub releases.
2. Open VS Code → Extensions → `...` → **Install from VSIX**.
3. Select your downloaded file.
4. Reload VS Code.

### From GitHub

```bash
git clone https://github.com/Slytherin001/AngularReactErrorSoundExtension
cd angular-react-error-sound
code .
```

## 📄 License

MIT License © [MD KAIF ALI]
