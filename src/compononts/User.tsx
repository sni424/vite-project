import { Link } from "react-router-dom";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { users } from "../db";

function User() {
    const { userId } = useParams();
    const [readSearchParms, setSearchParams] = useSearchParams();
    console.log(readSearchParms.get("geo"));
    setTimeout(() => {
        setSearchParams({
            day: "today",
            tomorrow: "123",
        });
    }, 3000);
    return (
        <div>
            <h1>
                User with id {userId} is named: {users[Number(userId) - 1].name}
            </h1>
            <hr />
            <Link to="followers">See Follower</Link>
            <Outlet
                context={{
                    nameOfMyuser: users[Number(userId) - 1].name,
                }}
            />
        </div>
    );
}
export default User;
