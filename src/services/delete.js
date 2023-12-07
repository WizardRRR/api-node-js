/** DELETE */

import axios from "axios"

export const eliminarPostfetch = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

export const eliminarPostAxios = () => {
  axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res.data))
}

