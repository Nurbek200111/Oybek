
import repository,{baseUrl,bearerToken}from './repository'


class PopularPerson{
    async getPersonByName(){
        const endPoint = 'person/popular'
        const persons = await  repository
        .get(baseUrl+endPoint,{
            headers: {
                accept: "application/json",
                Authorization: bearerToken,
              },
        })
        .then((ress)=>{
            return ress.data.results;
        })
        .catch((err)=>{
            console.log(err);
        })
    return persons
    }
}
export default new PopularPerson();