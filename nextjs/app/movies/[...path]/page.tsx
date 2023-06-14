interface Params {
    id: string[];
}

export default function Detail({ params }: { params: Params }) {
    console.log(params);

    return <div>안녕</div>;
}
