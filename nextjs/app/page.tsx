import Head from "next/head";
import Title from "./title";
import style from "./page.module.css";
import Image from "next/image";
import Movie from "./movieTitle/movie";

function YourComponent() {
    return (
        <>
            <Title titleName="Home" key="home" />
            <div className={[style.imgDiv].join(" ")}>
                <Image
                    src="vercel.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className={[style.img].join(" ")}
                />
            </div>
            <Movie />
        </>
    );
}

export default YourComponent;
