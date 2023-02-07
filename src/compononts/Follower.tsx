import { useOutletContext } from "react-router";

interface IFollowersContext {
    nameOfMyuser: string;
}

const Followers = () => {
    const { nameOfMyuser } = useOutletContext<IFollowersContext>();

    return <h1>Here are {nameOfMyuser}의 Followers</h1>;
};
export default Followers;
