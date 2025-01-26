import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectUserById, selectUsers, updateUserName } from '../../store/userSlice';
import { RootState } from '../../store/store';

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state: RootState) => selectUserById(state, Number(userId)));

  const [newName, setNewName] = useState(user.name)
  
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNewName(newName)
  };

  const saveNewName = () => {
    dispatch(updateUserName({ id: user.id, name: newName }));
  }

  const goBack = () => {
    navigate('/users')
  }
  return (
    <div>
      <h1>Детальная информация о пользователе</h1>
      <p>Id: {user.id}</p> 
      <p>
        Имя:
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
        />
        <button style={{ marginLeft: '100px' }} onClick={saveNewName}>Сохранить изменения</button>
         <button onClick={goBack}> Назад </button>
      </p>
    </div>
  );
};

export default UserDetails;

