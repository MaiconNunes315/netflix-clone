const BASE_URL = "https://api.themoviedb.org/4/list/"

export const resList = async (list:string) => {
    
    const req = await fetch(`${BASE_URL}${list}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
    const res = await req.json()
    const results = res.results

    return results
}




export const getLists = async () => {
    return {
        dataMovie: {
            name: "Filmes populares netflix",
            item:await resList(import.meta.env.VITE_LIST_MOVIES)
        }
    }
}