# Portofolio Steven Huang

Website portofolio statis (HTML, CSS, JS murni, tanpa build) untuk GitHub Pages.

```
index.html              halaman portofolio
assets/css, assets/js   gaya dan skrip
assets/img/hive         screenshot Hive (data demo)
assets/img/sertifikat   sertifikat kompetisi
cv/cv.html              sumber isi CV (edit di sini)
cv/CV_Steven_Huang_ATS.pdf / .docx   hasil CV
cv/build_docx.py        membuat .docx dari cv.html
```

## Publikasi ke GitHub Pages

1. Buat repo baru di GitHub bernama **`digidawcik.github.io`** (harus sama persis dengan username, publik).
2. Di folder ini:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/digidawcik/digidawcik.github.io.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. Setelah 1–2 menit, situs aktif di **https://digidawcik.github.io**.

## Memperbarui CV

1. Ubah isi di `cv/cv.html`.
2. Buat ulang PDF:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf="cv/CV_Steven_Huang_ATS.pdf" "file://$PWD/cv/cv.html"
   ```
3. Buat ulang DOCX (sekali saja: `pip install python-docx beautifulsoup4`):
   ```bash
   python3 cv/build_docx.py
   ```

## Preview lokal

```bash
python3 -m http.server 8765
```
Lalu buka http://localhost:8765.
