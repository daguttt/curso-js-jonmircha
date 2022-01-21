// (() => {
//     async function getData() {
//         try {
//             let res = await fetch("https://jsonplaceholder.typicode.com/users/"),
//                 json = await res.json();
//             if (!res.ok) throw {status: res.status, statusText: res.statusText}
//         } catch (err) {
//             console.log("Estamos en el catch", err.status, err.statusText)
//         }
//     }
//     getData();
// })();