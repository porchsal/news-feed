import { useEffect, useState } from "react"
import NewsCard from "./NewsCard";
import { Grid } from "@mui/material";
export default function Navigation() {
    const [news, setNews]=useState([]);
    
    const getNews = () =>{
        fetch('https://newsdata.io/api/1/latest?country=ca&apikey=pub_457802f7a9699912a2834d5b2c941bf86d3e2&domain=globalnews')
            .then(res => res.json())
            .then(json => setNews(json.results))
    }

    useEffect(()=>{
        getNews()

    },[])
  
    return (
        <div>
            <Grid container spacing={2}>
                {news.map((data, index) => (
                    <Grid item xs={3} key={index}> 
                        <NewsCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
