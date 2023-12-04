import React, { useCallback, useState } from "react";
import Search from "../components/Search";
import { shuffle } from "../utils/shuffle";

const allUsers = ["Utsav", "Jhon", "James", "Cam", "Sam", "Alex"];

const UseCallback = () => {
    const [users, setUsers] = useState(allUsers);
    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => user.includes(text));
        setUsers(filteredUsers);
    }, []);

    return (
        <div>
            <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
            <Search onChange={handleSearch} />

            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseCallback;
