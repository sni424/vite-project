import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import { users } from "../db";

function User() {
    const { userId } = useParams();
    console.log(typeof userId);
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
