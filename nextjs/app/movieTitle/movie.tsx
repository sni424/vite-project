"use client";

import Link from "next/link";
import style from "./movie.module.css";
import { useEffect, useState } from "react";

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

async function getData() {
    const res = await fetch("http://localhost:3000/api/movies");

    const { results } = await res.json();
    return results;
}

export default function Movie() {
    const [data, setData] = useState<IMovie[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const movieData = await getData();
            console.log(movieData);
            setData(movieData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                {!data && <h4>Loading...</h4>}
                {data?.map((data: IMovie) => (
                    <div key={data.id} className={[style.title].join("")}>
                        <Link
                            href={{
                                pathname: `movies/${data.title}/${data.id}`,
                                query: {
                                    id: data.id,
                                    title: data.title,
                                },
                            }}
                            as={`/movies/${data.title}/${data.id}`}
                            className={[style.link].join("")}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            />
                            <h4>{data.original_title}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
