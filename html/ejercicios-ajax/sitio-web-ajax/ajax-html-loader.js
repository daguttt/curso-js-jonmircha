const d = document,
  $main = d.querySelector("main");

const getHtml = (options) => {
  const { endpoint, onSucces, onError } = options
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      onSucces(xhr.responseText)
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      onError(`Error ${xhr.status}: ${message}`);
    }
  })
  xhr.open("GET", endpoint)
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8")
  xhr.send()
}

d.addEventListener('DOMContentLoaded', e => {
  const requestOptions = {
    endpoint: `assets/home.html`,
    onSucces: (html) => $main.innerHTML = html,
    onError: (err) => $main.innerHTML = `<h1>${err}</h1>`,
  }
  getHtml(requestOptions)
})

d.addEventListener("click", e => {
  if (e.target.matches(".menu li a")) {
    e.preventDefault();
    const requestOptions = {
      endpoint: e.target.href,
      onSucces: (html) => $main.innerHTML = html,
      onError: (err) => $main.innerHTML = `<h1>${err}</h1>`,
    }
    getHtml(requestOptions)
  }
})