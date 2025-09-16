# 🌗 Day/Night Theme Toggle

An interactive **Day/Night theme switcher** built with **HTML, CSS, and SVG animations**.
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

![Day Night Toggle Preview](Demo.mp4)

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/day-night-toggle.git
cd day-night-toggle
```

Open `index.html` in your browser, and you’re done 

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

## ⚙️ How It Works

* The **toggle knob** listens for clicks (`script.js`).
* A `.dark` class is toggled on the `<body>` to switch between **day and night themes**.
* **SVG layers** (`scene-day` and `scene-night`) fade in/out with CSS transitions.
* **Sun and Moon** animate along smooth half-circle arcs.
* **Clouds** float across the sky with extra drift animations for realism.
* **Stars** twinkle with randomized animation timings.

---

## 🖌 Customization

You can easily tweak:

* 🎨 Colors → update CSS gradients in `style.css`.
* 🌄 Mountain layers → adjust `<path>` curves in `index.html`.
* 🌟 Animation speed → edit `@keyframes` durations.
* ☁️ Number of clouds or stars → duplicate `<g class="cloud">` or `<circle class="star">`.

---

## 🚀 How to Use Anywhere

In any webpage, just add:

```html
<div id="dayNightToggle"></div>
<script src="daynight-toggle.js"></script>

---

## 📜 License

MIT License © 2025 [Sagarika](https://github.com/Sagarika311)
"# Animated-Theme-Toggle" 
