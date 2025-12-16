# 🗃️ TOBJ Language Support for Visual Studio Code

**TinyObj (TOBJ)** is a simple, human-readable data format designed for configuration and data exchange.

This extension provides robust language support for **.tobj** files within Visual Studio Code. It is built to support the **TON1 (TinyObj Notation 1)** style guide.

## ✨ Features

### 🌈 Syntax Highlighting

Provides clear and distinct coloring for all elements of the TOBJ syntax to enhance readability and catch errors quickly.

| Element                | Description                                                           | Highlight Color (Typically)        |
| :--------------------- | :-------------------------------------------------------------------- | :--------------------------------- |
| **Object Declaration** | Starts with `*` followed by the object name (e.g., `*User.Config`)    | Keyword/Class Name (Blue/Yellow)   |
| **Property Key**       | Starts with `>` followed by the key (e.g., `> isActive`, `> name`)    | Keyword/Operator (Blue/Teal)       |
| **Values**             | Strings, Numbers, and Language Constants (`true`, `false`, `nothing`) | String/Number/Constant (Red/Green) |
| **List Item**          | The dash prefix `-` for list items                                    | Punctuation (Light Blue/Gray)      |
| **Comments**           | Single-line comments starting with `#` or `//`                        | Comment (Green/Gray)               |

### 💡 Snippets (Quick Code Insertion)

Speed up development with intuitive prefix triggers.

| Prefix    | Description                                     | Output                                            |
| :-------- | :---------------------------------------------- | :------------------------------------------------ |
| `obj`     | Defines a new Object/Class.                     | `*ObjectName`                                     |
| `prop`    | Defines a standard key-value Property.          | `> key  value`                                    |
| `list`    | Defines a list Property with two sample items.  | `> listName` followed by indented `- item` lines. |
| `comment` | Inserts a styled **TON1** Block Comment Header. | `// ----------------...`                          |

### 📏 Smart Indentation

Custom indentation rules (in adherence to **TON1**) ensure consistent formatting:

- Typing **`*`** (New Object) or **`>`** (New Property) automatically increases the indent level on the next line.
- Indentation is correctly managed for properties and list items.

## 🚀 Installation

### 1. Marketplace Installation (Recommended)

1.  Open VS Code.
2.  Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3.  Search for **TinyObj (TOBJ)**.
4.  Click **Install**.

### 2. Manual VSIX Installation

1.  Download the latest `.vsix` package from the [Releases page](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/releases/latest).
2.  In VS Code, open the Extensions view.
3.  Click the **More Actions** menu (`...`) and select **Install from VSIX...**
4.  Select the downloaded `.vsix` file.

## ⚙️ Usage

1.  Create a new file with the extension **`.tobj`**.
2.  The extension will automatically activate.
3.  Start typing! Use the snippet prefixes (like `*`, `prop`, `list`) to quickly insert common structures.

### Example TOBJ Structure (TON1 Style):

```tobj
// Configuration for a Game Asset
*Asset.Player
    > id       1001
    > name     "The Vanguard"
    > enabled  true

    > stats
        - 150.5  // health
        - 35     // attack
        - 0.9    // resistance

*Settings
    > debugMode false
    > maxFPS    60
```
