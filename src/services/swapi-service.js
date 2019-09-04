
export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResources(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url},` + `received ${res.status}`)
        }
        return await res.json(); 
    }

    async getAllPeople(){
        const res = await this.getResources(`/people/`);
        return res.results
    }
    getPerson(id){
        return this.getResources(`/people/${id}/`);
    }

    async getAllPlanets(){
        const res = await this.getResources(`/planets/`);
        return res.results
    }
    getPlanets(id){
        return this.getResources(`/planets/${id}/`);
    }

    async getAllStarships(){
        const res = await this.getResources(`/starships/`);
        return res.results
    }
    getStarships(id){
        return this.getResources(`/starships/${id}/`);
    }
}

const swapi = new SwapiService();

swapi.getPerson(6)
    .then((p)=>{
        console.log(p.name);
    })

swapi.getAllPeople()
    .then((people)=>{
        people.forEach((p)=>{
            console.log(p.name);
        })
});
