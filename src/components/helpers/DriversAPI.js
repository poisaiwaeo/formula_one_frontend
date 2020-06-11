import axios from 'axios';

const driversAPI = {
    baseUrl: 'http://localhost:3007/formulaone/',
    apiKey: ''  // Hvis man skal genbruge den, så huske at tilføje key
};


// ----- GET - all drivers from API/backend --------------------------------------
// http://localhost:3007/formulaone
export const hentAlleDrivers = async () => {
    try {

        let res = await axios.get(driversAPI.baseUrl);
        return res.data;

    } catch (error) {
        console.log("FEJL", error);
    }
};


// ----- GET - drivers with id from API/backend --------------------------------------
// http://localhost:3007/formulaone/5eba59093653ec40c4a5455e
export const hentUdvalgtDrivers = async (id) => {
    try {

        let res = await axios.get(driversAPI.baseUrl  + id);
        return res.data;  // send data retur til "spørgeren"

    } catch (error) {
        console.log("FEJL", error);
    }
};


// ----- GET - Søge efter drivers ---------------------------------------------------------------
// http://localhost:3007/formulaone/soeg/kimi
export const soegNoget = async (s) => {

    console.log('Søgning')

    try {
        
        let res = await axios.get(driversAPI.baseUrl + "soeg/" + s);
        console.log(res.data)
        return res.data;
        
    } catch (error) {
        console.log("FEJL:", error);
    }
};