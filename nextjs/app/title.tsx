import Head from "next/head";

interface Ititle {
    titleName: string;
    children?: React.ReactNode;
}

export default function Title({ titleName }: Ititle) {
    return (
        <>
            <title>{`${titleName}` + " | NextJS Movie"}</title>
        </>
    );
}
