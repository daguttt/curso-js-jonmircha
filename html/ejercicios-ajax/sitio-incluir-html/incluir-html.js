document.addEventListener("DOMContentLoaded", e => {
  const includeHTML = (el, endpoint) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText
      } else {
        let message = xhr.statusText
          || "Error loading file, verify you're making the request by http o https"
        el.outerHTML = `Error ${xhr.status}: ${message}`
      }
    })

    xhr.open("GET", endpoint);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };
  document
    .querySelectorAll("[data-include]")
    .forEach(el => includeHTML(el, el.dataset.include))
})