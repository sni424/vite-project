"use client";

import { useEffect, useState } from "react";
import style from "./movie.module.css";

const API_KEY = "27faabdd8b4cabed661c893df3a24521";

interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default function Movie() {
    const [state, setState] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setState(data.results);
            console.log(state);
        })();
    }, []);

    return (
        <>
            <div>
                {!state && <h4>Loading...</h4>}
                {state?.map((data: IMovie) => (
                    <div key={data.id} className={[style.title].join("")}>
                        <h4>{data.original_title}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}
