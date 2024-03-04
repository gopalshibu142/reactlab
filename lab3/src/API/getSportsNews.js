import axios from 'axios'
const API = 'https://newsapi.org/v2/everything?q=sports&apiKey=036b77598593418eb127c540adea456e'
let myData = null 
export const getSportsNews = async () =>{
    await axios.get(`${API}`).then(res=>{
        console.log(res.data)
        myData = res.data.articles 
         
    })
    .catch(err => {
        console.log(err);
        
    })

    return myData;


}