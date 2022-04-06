const d = document,
  $main = d.querySelector("main");

const getHtml = (options) => {
  const { endpoint, onSucces, onError } = options
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Nice")
      console.log(xhr.responseText)
      onSucces(xhr.responseText)
    } else {
      onError("Ha ocurrido un error")
    }
  })
  xhr.open("GET", endpoint)
  xhr.send()
}

d.addEventListener("click", e => {
  if (e.target.matches(".menu li a")) {
    e.preventDefault();
    const requestOptions = {
      endpoint: e.target.href,
      onSucces: (html) => {
        $main.innerHTML = html
      },
      onError: (html) => {
        $main.innerText = html
      }
    }
    getHtml(requestOptions)
  }
})