
const getSuperHeroById = async (id) => {
    const data = await fetch(`https://superheroapi.com/api/5145785735444367/${id}`)
    const response = await data.json()
    return response
}


export const superheroService = {
    getSuperHeroById,

}