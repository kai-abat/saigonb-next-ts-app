import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserProfile } from '../../../utils/types/Props';

// Define a type for the slice state
// export interface UserState {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// Define the initial state using that type
export const initialState: UserProfile = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  position: ''
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    initializeUser(state) {
      state = { ...initialState };
    },
    setUser(state, action: PayloadAction<UserProfile>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.position = action.payload.position;
    },
    updateUserID(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    updateFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    updateLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    }
  }
});

export const {
  initializeUser,
  setUser,
  updateUserID,
  updateFirstName,
  updateLastName,
  updateEmail
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getFullname = (state: RootState) =>
  `${state.user.firstName} ${state.user.lastName} `;

export const getID = (state: RootState) => state.user.id;
export const getEmail = (state: RootState) => state.user.email;
export const getFirstName = (state: RootState) => state.user.firstName;
export const getLastName = (state: RootState) => state.user.lastName;
export const getUser = (state: RootState): UserProfile | undefined =>
  state.user.id === '' ? undefined : state.user;

export default userSlice.reducer;
