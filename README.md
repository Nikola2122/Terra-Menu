# React Menu App

A simple and responsive **React-based Menu Application**, designed for filtering dishes by categories, providing an elegant UI experience and more.

**Live:** https://terra-menu.netlify.app/

**Used by:** Terra Bar & Kitchen — Saint Nikole

---

## Features
- Client-side routing using **React Router** — menus and gallery switch without page refresh
- Gallery route (`/random-image`) fetching **a random image dynamically from a Netlify serverless API endpoint**
- Category-based menu filtering
- Fast, clean UI built using reusable React components
- Fully responsive design for all devices
- Smooth UI animations
- Multilanguage support (multiple languages available)

---

## Tech Stack
| Tech                        | Purpose |
|-----------------------------|----------|
| **React**                   | Component-based UI |
| **JavaScript / JSX**        | App logic & rendering |
| **CSS / Styled Components** | Styling  |
| **React Router**            | Client-side routing |
| **Netlify**                 | Deployment & Hosting, serverless API |
| **Local JSON files**        | Menu "database" / static data |

---

## Installation

```bash
git clone https://github.com/Nikola2122/Terra-Menu.git
cd Terra-Menu
npm install
npm start
```

Runs on `http://localhost:3000`

---

## Project Structure Example
```
netlify
└───functions
│   │   images.json
│   │   randomImage.js
│   │   
│   └───images
│                 
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
│   │   RandomImage.js
│   │   RoutesWrapper.js
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

## Usage
1. Select a category from the navigation bar
2. View menu items dynamically rendered
3. Navigate to the gallery route to see a random image of the place
4. Fully responsive, smooth interaction

---

## Possible Future Upgrades
- Add to cart functionality
- Save favorite dishes
- Reservation system
- Dark/Light mode toggle
- Switch to API-backed data for menus instead of local JSON files
