const API_URL = "https://api.themoviedb.org/3/movie/";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTdmMjNjNjdiZmI0NGY0OWZhYmI3ZDM2NGM3MjZmMCIsIm5iZiI6MTcyMDI0MDY2NC45NzYwMzYsInN1YiI6IjY2ODhjN2I2MjM2OTQ1OTcxZjJjZWVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XXzU-JmtbyMnfa07M6UrGtiSZoaIu7M-E0mHpE946Cs",
    },
};

export const fetchMovies=async (category)=>{
    
    try {
        const response=await fetch(`${API_URL}${category}?language=en-US&page=1`, options);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data=await response.json();   
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }

    // let resonseResult=[];

    // await fetch(`${API_URL}${category}?language=en-US&page=1`, options)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log("api res:", response);
    //         resonseResult=response.results;
    //     })
    //     .catch((err) => console.error(err));

    // return resonseResult;    

}
