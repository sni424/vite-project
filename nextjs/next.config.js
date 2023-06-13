/** @type {import('next').NextConfig} */

const API_KEY = "27faabdd8b4cabed661c893df3a24521";

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
