const url = 'https://demagogscrapper.azurewebsites.net/';

const getDataFromApi = async (details) => {
    
    try{
        let res = await fetch(url + details);
        if (!res.ok) {
            throw Error(res.statusText);
        }
        var data = await res.json();
        return data;

    }
    catch(error){
        console.log('Looks like there was a problem: \n', error);
        return [];                
    }

}
export default getDataFromApi;