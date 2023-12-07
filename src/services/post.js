import axios from "axios"

/** POST */
// para el patch y put es cambiar el method por 'PATCH' | 'PUT'
// 'PUT' -> actualizar un recurso completo
// 'PATCH' -> actualizar un recurso parcialmente

const data = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

export const crearPostFetch = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PATCH',
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

export const crearPostAxios = () => {
  axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => console.log(res.data))
}
