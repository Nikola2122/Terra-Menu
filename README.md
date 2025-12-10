# 🍽️ React Menu App

A simple and responsive **React-based Menu Application**, designed for filtering dishes by categories and providing an elegant UI experience.

🔗 **Live:** https://terra-menu.netlify.app/

---

## 🚀 Features
- ⚛️ Client-side routing — menus switch without page refresh
- 📂 Category-based menu filtering
- ⚡ Fast, clean UI built using reusable React components
- 📱 Fully responsive design for all devices
- 🎞️ Smooth UI animations
- 🌍 Multilanguage support (multiple languages available)

---

## 🛠️ Tech Stack
| Tech                        | Purpose |
|-----------------------------|----------|
| **React**                   | Component-based UI |
| **JavaScript / JSX**        | App logic & rendering |
| **CSS / Styled Components** | Styling  |
| **Netlify**                 | Deployment & Hosting |
| **Local JSON files**                 | Menu “database” / static data |


---

## 📦 Installation

```bash
git clone https://github.com/Nikola2122/Terra-Menu.git
cd Terra-Menu
npm install
npm start
```

Runs on 👉 `http://localhost:3000`

---

## 📁 Project Structure Example
```
src
│   App.js
│   index.js
│   
├───assets
│   └───images
│           Flag_of_North_Macedonia.svg
│           Flag_of_the_United_States.svg.png
│           logo.png
│           logo_blue.png
│           
├───components
│   │   DinkSub.js
│   │   Display.js
│   │   DrinkItem.js
│   │   Footer.js
│   │   Header.js
│   │   Item.js
│   │   LanguageSwitcher.js
│   │   MainPart.js
│   │   NavBar.js
│   │   
│   └───menus
│           DrinkMenu.js
│           Menu.js
│           Nothing.js
│           
├───data
│   ├───Drinks
│   │   ├───en
│   │   │       alcoholic.json
│   │   │       coffee.json
│   │   │       nonAlcoholic.json
│   │   │       
│   │   └───mk
│   │           alcoholic.json
│   │           coffee.json
│   │           nonAlcoholic.json
│   │           
│   ├───en
│   │       Hot.json
│   │       Pizza.json
│   │       Salads.json
│   │       
│   └───mk
│           Hot.json
│           Pizza.json
│           Salads.json
│           
├───styles
│       App.css
│       index.css
│       
└───utils
        LangContext.js
```

---

## 🧩 Usage
1. Select a category from the navigation bar
2. View menu items dynamically rendered
3. Responsive, smooth interaction

---

## 🔥 Possible Future Upgrades
- 🛒 Add to cart functionality
- ⭐ Save favorite dishes
- 📅 Reservation system
- 🌙 Dark/Light mode toggle
- 🔗 Switch to API-backed data instead of local JSON files

