// include.js
async function includeHTML() {
    const includeTags = document.querySelectorAll('[data-include]');
    for (let el of includeTags) {
      const url = el.getAttribute('data-include');
      const resp = await fetch(url);
      if (resp.ok) {
        el.innerHTML = await resp.text();
      } else {
        el.innerHTML = `<strong>Couldn’t load ${url}</strong>`;
      }
    }
  }
  document.addEventListener('DOMContentLoaded', includeHTML);
  