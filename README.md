# CSS Loader Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-loader-animation-3/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the uploaded 21.37-second screen recording.

## Loaders shown in the video

1. **Double Ring** — rotating circular border with cyan and pink arcs.
2. **Ripple** — expanding and fading blue rings.
3. **Pulse Grid** — nine green squares pulsing with staggered timing.
4. **Arc Spinner** — green partial circular spinner.
5. **Diamond Orbit** — four colored diamond/square particles rotating around a center.
6. **Rotating Square** — purple outlined square rotating and scaling.
7. **Neon** — cyan glowing circular ring that pulses.

## CSS visible in the recording

The visible selectors, color values, and animation declarations have been transcribed into the code panels and stylesheet. For example:

```css
.double-ring {
  border-top-color: #38bdf8;
  border-bottom-color: #f472b6;
  animation: spin 1s linear infinite;
}

.ripple span {
  border: 4px solid #60a5fa;
  animation: ripple 1.8s infinite;
}

.pulse-grid span {
  animation: gridPulse .9s infinite ease-in-out;
}

.arc {
  border-top-color: #22c55e;
  border-right-color: #22c55e;
  animation: spin .9s linear infinite;
}

.diamond-orbit {
  animation: spin 2s linear infinite;
}

.rot-square {
  border: 5px solid #c084fc;
  animation: rotSquare 1.2s infinite ease-in-out;
}

.neon {
  border: 4px solid #00f7ff;
  box-shadow: 0 0 24px #00f7ff;
  animation: pulse 1s infinite;
}
```

The recording shows the key CSS declarations but not every base style or keyframe definition in full. Supporting layout styles, dimensions, keyframes, responsive rules, and HTML markup have been reconstructed to make the examples run independently.

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. The seven loader animations start automatically.
4. Scroll inside the orange-bordered panel to see every example.

No package installation, build command, framework, or internet connection is required.

## Project files

- `index.html` — loader previews and visible CSS snippets
- `style.css` — design, loader shapes, and animation keyframes
- `script.js` — small keyboard scrolling enhancement
- `README.md` — setup and source notes

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
