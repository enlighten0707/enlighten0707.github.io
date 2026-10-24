(function () {
  'use strict';

  var script = document.currentScript;
  var imageBase = script && script.dataset.imageBase ? script.dataset.imageBase : '/images/panda/';
  var pandas = [
    { key: 'a', name: '坐着挥爪', file: 'panda-a.webp' },
    { key: 'b', name: '竹旁探头', file: 'panda-b.webp' },
    { key: 'c', name: '侧躺挥爪', file: 'panda-c.webp' }
  ];

  function mount() {
    if (document.getElementById('panda-greeting-host')) return;

    // Choose afresh for each page load. Create only the chosen image so the
    // other two are not downloaded on mobile connections.
    var panda = pandas[Math.floor(Math.random() * pandas.length)];
    var host = document.createElement('div');
    host.id = 'panda-greeting-host';
    var shadow = host.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = [
      ':host { position: fixed; z-index: 10000; right: 16px; bottom: calc(10px + env(safe-area-inset-bottom)); display: block; width: 172px; height: 152px; pointer-events: none; font-family: "Nunito", "Segoe UI", "Microsoft YaHei", sans-serif; }',
      '* { box-sizing: border-box; }',
      '.mascot { position: absolute; right: 0; bottom: 0; display: block; width: 155px; height: 152px; padding: 0; border: 0; background: transparent; cursor: pointer; pointer-events: auto; -webkit-tap-highlight-color: transparent; }',
      '.mascot:focus-visible { outline: 2px solid #377d94; outline-offset: 2px; border-radius: 16px; }',
      '.mascot img { display: block; width: 100%; height: 100%; object-fit: contain; object-position: bottom right; transform-origin: 54% 85%; filter: drop-shadow(0 5px 4px rgba(40, 50, 51, .13)); }',
      '.bubble { position: absolute; z-index: 2; right: 103px; top: 24px; padding: 6px 11px; border: 1px solid #d7e5e8; border-radius: 12px 12px 3px 12px; background: rgba(255,255,255,.96); color: #427d90; font-size: 13px; font-weight: 900; box-shadow: 0 4px 12px rgba(29,49,60,.09); opacity: 0; transform: translateY(8px) scale(.85); pointer-events: none; white-space: nowrap; }',
      '.marks { position: absolute; top: 44px; right: 1px; width: 28px; height: 28px; opacity: 0; pointer-events: none; }',
      '.marks i { position: absolute; display: block; width: 12px; height: 3px; border-radius: 8px; background: #7fa6a3; }',
      '.marks i:nth-child(1) { right: 11px; top: 3px; transform: rotate(-52deg); }',
      '.marks i:nth-child(2) { right: 1px; top: 12px; transform: rotate(-12deg); }',
      '.marks i:nth-child(3) { right: 3px; top: 23px; transform: rotate(30deg); }',
      '.mascot--c .marks { right: 18px; top: 33px; }',
      '.mascot.is-greeting .bubble { animation: panda-bubble 1.9s ease both; }',
      '.mascot.is-greeting .marks { animation: panda-marks 1.8s ease both; }',
      '.mascot--a.is-greeting img { animation: panda-greeting-a 1.8s ease-in-out both; }',
      '.mascot--b.is-greeting img { animation: panda-greeting-b 1.8s ease-in-out both; }',
      '.mascot--c.is-greeting img { animation: panda-greeting-c 1.8s ease-in-out both; }',
      '@keyframes panda-greeting-a { 0%, 100% { transform: translateY(0) rotate(0); } 23% { transform: translateY(-5px) rotate(-5deg); } 42% { transform: translateY(-2px) rotate(4deg); } 61% { transform: translateY(-5px) rotate(-4deg); } 78% { transform: translateY(0) rotate(2deg); } }',
      '@keyframes panda-greeting-b { 0%, 100% { transform: translateX(0) rotate(0); } 24% { transform: translateX(8px) rotate(3deg); } 45% { transform: translateX(1px) rotate(-2deg); } 66% { transform: translateX(7px) rotate(2deg); } }',
      '@keyframes panda-greeting-c { 0%, 100% { transform: translateY(0) rotate(0); } 24% { transform: translateY(-6px) rotate(-7deg); } 47% { transform: translateY(-2px) rotate(3deg); } 68% { transform: translateY(-4px) rotate(-5deg); } }',
      '@keyframes panda-bubble { 0%, 8%, 83%, 100% { opacity: 0; transform: translateY(8px) scale(.85); } 23%, 68% { opacity: 1; transform: translateY(0) scale(1); } }',
      '@keyframes panda-marks { 0%, 13%, 82%, 100% { opacity: 0; transform: scale(.8); } 31%, 70% { opacity: .9; transform: scale(1); } }',
      '@media (max-width: 600px) { :host { right: 6px; bottom: calc(6px + env(safe-area-inset-bottom)); width: 139px; height: 124px; } .mascot { width: 126px; height: 124px; } .bubble { right: 83px; top: 20px; font-size: 12px; } .marks { transform: scale(.8); transform-origin: top right; top: 35px; } .mascot--c .marks { right: 16px; top: 28px; } }',
      '@media (prefers-reduced-motion: reduce) { .mascot.is-greeting img, .mascot.is-greeting .bubble, .mascot.is-greeting .marks { animation: none; } .mascot.is-greeting .bubble { opacity: 1; transform: none; } .mascot.is-greeting .marks { opacity: .85; } }'
    ].join('\n');

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'mascot mascot--' + panda.key;
    button.setAttribute('aria-label', panda.name + '的水墨熊猫，点击打招呼');

    var image = document.createElement('img');
    image.src = imageBase + panda.file;
    image.alt = '';
    image.draggable = false;
    image.decoding = 'async';

    var bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.setAttribute('aria-hidden', 'true');
    bubble.textContent = 'Hi!';

    var marks = document.createElement('span');
    marks.className = 'marks';
    marks.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 3; i += 1) {
      marks.appendChild(document.createElement('i'));
    }

    button.appendChild(image);
    button.appendChild(bubble);
    button.appendChild(marks);
    shadow.appendChild(style);
    shadow.appendChild(button);
    document.body.appendChild(host);

    var greetingTimer;
    function greet() {
      clearTimeout(greetingTimer);
      button.classList.remove('is-greeting');
      void button.offsetWidth;
      button.classList.add('is-greeting');
      greetingTimer = setTimeout(function () {
        button.classList.remove('is-greeting');
      }, 1900);
    }

    button.addEventListener('pointerenter', function (event) {
      if (event.pointerType === 'mouse') greet();
    });
    button.addEventListener('click', greet);
    button.addEventListener('focus', greet);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
})();
