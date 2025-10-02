
async function getUsuarios() {

try {
    const response = await fetch('http://localhost:3001/usuarios',{
            method: 'GET',
            headers :{
                'Content-Type': 'application/json'
        }
    })

const usuarios = await response.json()

return usuarios

} catch (error) {

console.error("Hay un error al obtener los usuarios",error)
throw error

}
}


async function postUsuarios(objUsuario) {

try {
    const response = await fetch('http://localhost:3001/usuarios',{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUsuario)
    })

const usuarios = await response.json()

return usuarios

} catch (error) {

console.error("Hay un error al obtener los usuarios",error)
throw error

}
}

export default {postUsuarios,getUsuarios}