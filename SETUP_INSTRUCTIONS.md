# 🚀 Commerce X Shop - Setup-Anleitung

## Option 1: Lokal testen (schnell)

```bash
# Terminal öffnen und navigieren zu deinem Repo-Verzeichnis
cd /pfad/zum/commerce-x-shop

# Python 3 HTTP Server starten
python3 -m http.server 8000

# Browser öffnen: http://localhost:8000
```

**Links nach dem Start:**
- Startseite: http://localhost:8000/index.html
- Shop: http://localhost:8000/shop.html
- Upload: http://localhost:8000/uploads/upload.html
- Kontakt: http://localhost:8000/contact.html

---

## Option 2: Zu GitHub pushen (permanent)

### Schritt 1: Repository auf GitHub erstellen
1. Gehe zu https://github.com/new
2. Name: `commerce-x-shop`
3. Owner: `KidashiDesign`
4. Description: `Premium tech gadgets e-commerce website with blur-hover animations`
5. Public: ✅ aktivieren
6. "Create repository" klicken

### Schritt 2: Lokales Repository pushen

```bash
# Terminal öffnen
cd /pfad/zum/commerce-x-shop-git

# Repository pushen
git remote add origin https://github.com/KidashiDesign/commerce-x-shop.git
git branch -M main
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu: https://github.com/KidashiDesign/commerce-x-shop/settings/pages
2. "Source" → `main` (Branch)
3. Folder: `/ (root)`
4. "Save" klicken
5. Warte 1-2 Minuten

### ✅ Fertig! Deine Website ist live unter:
```
https://kidashidesign.github.io/commerce-x-shop/
```

---

## 🔗 Live Links (nach GitHub Pages Setup):

| Seite | Link |
|-------|------|
| **Startseite** | https://kidashidesign.github.io/commerce-x-shop/ |
| **Shop** | https://kidashidesign.github.io/commerce-x-shop/shop.html |
| **Produkt Upload** | https://kidashidesign.github.io/commerce-x-shop/uploads/upload.html |
| **Kontakt** | https://kidashidesign.github.io/commerce-x-shop/contact.html |
| **GitHub Repo** | https://github.com/KidashiDesign/commerce-x-shop |

---

## 📱 Produkte hochladen

Nach dem GitHub Setup:
1. Öffne: `https://kidashidesign.github.io/commerce-x-shop/uploads/upload.html`
2. Ziehe Produktbilder (PNG) in die Drop-Zone
3. Fülle Produktinfo aus
4. Klick "Save Product"
5. Produkt ist sofort im Shop verfügbar! ✨

---

## 📊 Gespeicherte Daten

Alle Daten werden lokal im Browser gespeichert (localStorage):
- 🛒 Shopping Cart
- 📦 Hochgeladene Produkte
- 📧 Newsletter Abos
- 📝 Kontaktanfragen
- 📈 Analytics / Page Views

