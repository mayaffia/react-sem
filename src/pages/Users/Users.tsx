import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectUsers } from '../../store/userSlice';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    const users = useSelector((state: RootState) => selectUsers(state));

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;