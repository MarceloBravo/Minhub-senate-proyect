import axios from 'axios';
const endPoint = 'https://api.propublica.org/congress/v1/113/';
const header = {'X-API-key':'G25zEqjMt3JghPfmH7DC1vkYfdJxjfjUr7nd0s4k'}



export const senateData = async () => {
    return await axios.get(endPoint + 'senate/members.json', {headers: header}).then(res => {
        return res.data.results[0].members
    }).catch( err => {
        console.log('ERROR', err),
        alert('Error al obtener los datos de los miemros del senado.');
    })
}



export const houseData = async () => {
    return await axios.get(endPoint + 'house/members.json', {headers: header}).then(res => {
        return res.data.results[0].members
    }).catch( err => {
        console.log('ERROR', err),
        alert('Error al obtener los datos de los miemros del senado.');
    })
}