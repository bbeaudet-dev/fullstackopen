import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    returnaxios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
export default {
    getAll: getAll,
    create: create,
    update: update
}