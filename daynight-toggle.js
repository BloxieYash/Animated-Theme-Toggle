(function () {
  // ---- 1. Inject CSS ----
  const style = document.createElement("style");
  style.textContent = `
  :root {
    --bg-light: linear-gradient(to top, #fbd786, #f7797d);
    --bg-dark: linear-gradient(to top, #0f2027, #2c5364);
    --text-light: #222;
    --text-dark: #f0f0f0;
  }

  body {
    transition: background 1s ease, color 1s ease;
    background: var(--bg-light);
    color: var(--text-light);
  }
  body.dark {
    background: var(--bg-dark);
    color: var(--text-dark);
  }

  .toggle {
    width: 220px;
    height: 110px;
    border-radius: 999px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 24px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 200ms ease;
  }
  .toggle:active { transform: scale(.97); }

  svg { display: block; width: 100%; height: 100%; }
  .scene-layer { transition: opacity 600ms ease; }
  .scene-day { opacity: 1; }
  .scene-night { opacity: 0; }
  .toggle.active .scene-day { opacity: 0; }
  .toggle.active .scene-night { opacity: 1; }

  .knob {
    position: absolute;
    top: 19px;
    left: 10px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 500ms cubic-bezier(.4,.8,.3,1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }
  .toggle.active .knob { transform: translateX(128px); }

  .icon {
    position: absolute;
    width: 40px;
    height: 40px;
    transition: opacity 400ms ease;
  }
  .icon-sun { opacity: 1; }
  .icon-moon { opacity: 0; }
  .toggle.active .icon-sun { opacity: 0; }
  .toggle.active .icon-moon { opacity: 1; }

  .star { 
    animation: twinkle 3s infinite ease-in-out alternate;
    filter: drop-shadow(0 0 2px white);
  }
  .star:nth-child(2) { animation-duration: 2s; }
  .star:nth-child(3) { animation-duration: 4s; }
  .star:nth-child(4) { animation-duration: 3.5s; }
  .star:nth-child(5) { animation-duration: 2.5s; }
  .star:nth-child(6) { animation-duration: 3.2s; }
  .star:nth-child(7) { animation-duration: 4.5s; }
  .star:nth-child(8) { animation-duration: 2.8s; }

  @keyframes twinkle { 
    from { opacity: 0.2; transform: scale(0.8); } 
    to { opacity: 1; transform: scale(1.2); } 
  }

  .rotate-sun { animation: rotate 10s linear infinite; transform-origin: center; }
  @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .cloud { 
    filter: blur(1px);
    opacity: 0.85;
    animation: float 18s linear infinite, drift 6s ease-in-out infinite alternate;
  }
  .cloud:nth-child(2) { animation-duration: 22s, 7s; animation-delay: -4s, -2s; }
  .cloud:nth-child(3) { animation-duration: 26s, 9s; animation-delay: -8s, -3s; }

  @keyframes float {
    from { transform: translateX(-100px); }
    to   { transform: translateX(320px); }
  }
  @keyframes drift {
    0%   { transform: translateY(0) scale(1); opacity: 0.85; }
    50%  { transform: translateY(-4px) scale(1.05); opacity: 0.95; }
    100% { transform: translateY(0) scale(1); opacity: 0.85; }
  }

  /* Sun and Moon Arcs */
  .move-sun { animation: sunArc 8s linear infinite; }
  .move-moon { animation: moonArc 8s linear infinite; }
  @keyframes sunArc {
    0%   { transform: translate(0, 30px); }
    25%  { transform: translate(60px, -10px); }
    50%  { transform: translate(120px, -15px); }
    75%  { transform: translate(180px, -10px); }
    100% { transform: translate(240px, 30px); }
  }
  @keyframes moonArc {
    0%   { transform: translate(0, 30px); }
    25%  { transform: translate(-60px, -10px); }
    50%  { transform: translate(-120px, -15px); }
    75%  { transform: translate(-180px, -10px); }
    100% { transform: translate(-240px, 30px); }
  }
  `;
  document.head.appendChild(style);

  // ---- 2. Inject HTML into #dayNightToggle ----
  const container = document.getElementById("dayNightToggle");
  if (!container) return;

  container.innerHTML = `
  <div id="themeToggle" class="toggle">
    <svg viewBox="0 0 220 110" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="gDay" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#fbd786"/>
          <stop offset="100%" stop-color="#f7797d"/>
        </linearGradient>
        <linearGradient id="gNight" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#0f2027"/>
          <stop offset="100%" stop-color="#2c5364"/>
        </linearGradient>
      </defs>

      <!-- DAY -->
      <g class="scene-layer scene-day">
        <rect x="0" y="0" width="220" height="110" rx="55" ry="55" fill="url(#gDay)"/>
        <g fill="white" opacity="0.9">
          <g class="cloud">
            <circle cx="35" cy="30" r="12"/>
            <circle cx="48" cy="28" r="14"/>
            <circle cx="60" cy="32" r="10"/>
            <circle cx="45" cy="36" r="11"/>
          </g>
          <g class="cloud">
            <circle cx="110" cy="40" r="14"/>
            <circle cx="125" cy="38" r="16"/>
            <circle cx="138" cy="42" r="12"/>
            <circle cx="122" cy="46" r="13"/>
          </g>
          <g class="cloud">
            <circle cx="170" cy="28" r="10"/>
            <circle cx="182" cy="26" r="12"/>
            <circle cx="194" cy="30" r="10"/>
            <circle cx="180" cy="32" r="9"/>
          </g>
        </g>
        <g class="move-sun">
          <circle cx="44" cy="36" r="10" fill="#ffd700"/>
        </g>
      </g>

      <!-- NIGHT -->
      <g class="scene-layer scene-night">
        <rect x="0" y="0" width="220" height="110" rx="55" ry="55" fill="url(#gNight)"/>
        <g fill="white">
          <circle class="star" cx="30" cy="26" r="1.5"/>
          <circle class="star" cx="54" cy="18" r="1.2"/>
          <circle class="star" cx="80" cy="28" r="1.0"/>
          <circle class="star" cx="110" cy="22" r="1.4"/>
          <circle class="star" cx="150" cy="30" r="1.1"/>
          <circle class="star" cx="188" cy="20" r="1.3"/>
          <circle class="star" cx="200" cy="40" r="1.2"/>
          <circle class="star" cx="170" cy="15" r="1.5"/>
        </g>
        <g class="move-moon">
          <circle cx="220" cy="36" r="12" fill="white"/>
        </g>
      </g>
    </svg>
    <div class="knob">
      <svg class="icon icon-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" fill="#ffd700"/>
      </svg>
      <svg class="icon icon-moon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="#e0eaff"/>
      </svg>
    </div>
  </div>
  `;

  // ---- 3. Setup Toggle Logic ----
  const toggle = container.querySelector("#themeToggle");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    document.body.classList.toggle("dark");
  });
})();
