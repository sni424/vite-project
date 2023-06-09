import Title from "../title";
import Count from "./count";

export default function Home() {
    return (
        <>
            <Title titleName="DashBoard" key="DashBoard" />
            <div>
                <Count />1
            </div>
        </>
    );
}
