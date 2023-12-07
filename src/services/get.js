/** GET */

import axios from "axios"

export const obtenerEspeciesFetch = () => {
  fetch('https://helppet.store/api/mascota/especies')
    .then(response => response.json())
    .then(data => {
      console.log("fetch", data)
    })
}

export const obetenerEspeciesAxios = () => {
  axios.get('https://helppet.store/api/mascota/especies')
    .then(res => {
      console.log("axios", res.data)
    })
}

export const obtenerMascotas = () => {
  axios.get('http://192.168.18.4:3123/mascotas')
    .then(res => {
      console.log("Facilito!")
      console.log(res.data)
    })
}