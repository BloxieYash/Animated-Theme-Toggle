# 🌗 Day/Night Theme Toggle

An interactive **Day/Night theme switcher** or **Light/Dark mode toggle** built with **HTML, CSS, and SVG animations**.
Featuring animated **sun & moon arcs**, **twinkling stars**, **drifting clouds**, and **layered mountains** that smoothly transition between light and dark modes.

---

## ✨ Features

* 🌞 **Animated Sun & Moon** that follow complementary arcs.
* 🌌 **Stars that twinkle** at night.
* ☁️ **Dynamic clouds** that float and drift naturally.
* 🏔 **Layered SVG mountains** with gradient lighting.
* 🎨 Smooth background transitions (day to night gradients).
* 🖱 Clickable toggle knob with **sun → moon icon switch**.
* ⚡ Pure **HTML, CSS, and JavaScript** — no frameworks needed.

---

## 📸 Preview  

<p align="center">
  <img src="Demo.gif" alt="Day Night Toggle Preview" />
</p>

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Sagarika311/day-night-toggle.git
cd day-night-toggle
````

Open `index.html` in your browser, and you’re done.

---

## 📂 Project Structure

```
day-night-toggle/
│── index.html      # Main HTML file
│── style.css       # Styles & animations
│── script.js       # Toggle logic
│── README.md       # Project documentation
```

---

## 🛠️ Tech Stack

This project is built using a **lightweight, framework-free stack** focused on pure web technologies:

* **HTML5** → Structure of the page and SVG-based toggle design.
* **CSS3** → Styling, gradients, animations (cloud drift, star twinkle, sun/moon arcs).
* **Vanilla JavaScript (ES6+)** → Toggle logic, dynamic DOM updates, and theme switching.
* **SVG** → Scalable vector graphics for sun, moon, stars, mountains, and clouds.
* **CSS Animations & Transitions** → Smooth day-to-night transitions, knob movement, glow effects.

⚡ No external libraries or dependencies — everything is built with **native web standards** for performance and portability.

---

## ⚙️ How It Works

* The **toggle knob** listens for clicks (`script.js`).
* A `.dark` class is toggled on the `<body>` to switch between **day and night themes**.
* **SVG layers** (`scene-day` and `scene-night`) fade in/out with CSS transitions.
* **Sun and Moon** animate along smooth half-circle arcs.
* **Clouds** float across the sky with extra drift animations for realism.
* **Stars** twinkle with randomized animation timings.

---

## 📸 Screenshots

 Light Mode  |  Dark Mode  
:-------------------------:|:-------------------------:  
<img src="./Screenshot (1).png" width="600"/> | <img src="./Screenshot (2).png" width="600"/> 
---

---

## 🖌 Customization

You can easily tweak:

* 🎨 Colors → update CSS gradients in `style.css`.
* 🌄 Mountain layers → adjust `<path>` curves in `index.html`.
* 🌟 Animation speed → edit `@keyframes` durations.
* ☁️ Number of clouds or stars → duplicate `<g class="cloud">` or `<circle class="star">`.

---

## 🚀 How to Use Anywhere

You can embed the toggle in **any webpage** using either your local copy or **jsDelivr CDN**:

### 1️⃣ Local usage

```html
<div id="dayNightToggle"></div>
<script src="daynight-toggle.js"></script>
```

### 2️⃣ Using jsDelivr (versioned release)

```html
<div id="dayNightToggle"></div>
<script src="https://cdn.jsdelivr.net/gh/Sagarika311/Animated-Theme-Toggle@v1.0.0/daynight-toggle.js"></script>
```

> ✅ This ensures the toggle always loads the specific stable version.

---

## 📜 License

MIT License © 2025 [Sagarika](https://github.com/Sagarika311)

