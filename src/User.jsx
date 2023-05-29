import { useEffect } from "react"
import { getUserAction } from "./Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.user.users)
    useEffect(() => {
        dispatch(getUserAction());
    }, []);

    return (
        userList.map((user =>
            <div>
                <div><h1>{user.name}{" "}{user.name}</h1><img src={user.image} /> </div>
            </div>
        ))
    )
}