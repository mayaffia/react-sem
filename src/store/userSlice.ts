import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
}

type UsersState = {
  users: User[];
}

const initialState: UsersState  = {
  users: [
    { id: 1, name: 'боб' },
    { id: 2, name: 'кевин' },
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      const { id, name } = action.payload;
      const user = state.users.find(user => user.id === id);
      if (user) {
        user.name = name;
      }
    },
  },
});

export const { updateUserName } = usersSlice.actions;

export const selectUsers = state => state.users.users;
export const selectUserById = (state, userId) => state.users.users.find(user => user.id === userId);

export default usersSlice.reducer;
