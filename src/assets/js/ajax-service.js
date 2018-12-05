import axios from 'axios'
import qs from 'qs'
const $ajax = (obj, tag = true) => {
  return new Promise((resolve, reject) => {
    if (!obj.hasOwnProperty('type') || obj.type.toLowerCase() === 'get') {
      axios.get(obj.url, {
        params: obj.params
      }).then(function (response) {
        resolve(response.data)
      }).catch(function () {
      })
    } else {
      axios.post(obj.url, qs.stringify(obj.params)).then(function (response) {
        resolve(response.data)
      }).catch(function () {
      })
    }
  })
}
export default $ajax
