"use client";

import { useSearchParams } from "next/navigation";

interface Params {
    id: string;
}

export default function Detail({ params }: { params: Params }) {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");
    console.log(params, search);

    return <div>안녕</div>;
}
