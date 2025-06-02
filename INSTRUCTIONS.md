# How to Launch Your Portfolio with GitHub Pages

Follow these steps to create and host your portfolio website using GitHub Pages:

## 1. Create Your Repository

- Go to [github.com](https://github.com/).
- Click the **+** icon in the top right and select **New repository**.
- Name your repository exactly: `Losahfirst.github.io`
- Set the repository to **public**.
- Click **Create repository**.

## 2. Add Your Portfolio Files

- Download or create the following three files:
  - `index.html`
  - `style.css`
  - `script.js`
- Make sure these files are in the **root** of your repository (not inside any folder).

## 3. Upload the Files

You can use one of these methods:

### Method 1: GitHub Web Interface

1. In your new repository, click **Add file** > **Upload files**.
2. Drag and drop `index.html`, `style.css`, and `script.js` into the upload area.
3. Click **Commit changes**.

### Method 2: Git Command Line

If you have Git installed:

```sh
git clone https://github.com/Losahfirst/Losahfirst.github.io.git
cd Losahfirst.github.io
# Place index.html, style.css, and script.js into this folder
git add .
git commit -m "Add portfolio files"
git push
```

## 4. Wait for GitHub Pages to Deploy

- After uploading, wait 1–2 minutes.
- Go to: https://Losahfirst.github.io
- Your portfolio should appear!

## 5. Update as Needed

- To update your portfolio, edit the files and repeat the upload/commit process.
- Refresh your site to see changes.

---

**Tip:**  
You can always add new sections, update project info, or customize the style in `style.css`!

If you need help, visit GitHub Pages documentation:  
https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
