export const exerciseOptions = {
    
        method: 'GET',
       
        headers: {
          'X-RapidAPI-Key': 'e9a88a7a73msh610e41f3046a971p16b749jsna67c26546105',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
}

export const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'; 



export const fetchData = async (url, options) => {
    const response = await fetch(url, options); 
    const data = await response.json(); 
    return data; 
}