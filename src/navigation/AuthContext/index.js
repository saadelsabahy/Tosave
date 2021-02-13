import React, {useMemo, useReducer} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {SIGN_IN, SIGN_OUT, RESTORE_TOKEN, USER_INFO} from './types';
export const AuthenticationContext = React.createContext();

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  userName: '',
  userType: '',
  userId: '',
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: payload.userToken,
        userName: payload.userName,
        userType: payload.userType,
        userId: payload.userId,
        isLoading: false,
      };
      break;
    case SIGN_IN:
      return {
        ...state,
        userToken: payload.userToken,
        isLoading: false,
        isSignout: false,
        userName: payload.userName,
        userType: payload.userType,
        userId: payload.userId,
      };
      break;
    case SIGN_OUT:
      return {...state, userToken: null, isSignout: true};
      break;
    default:
      return state;
  }
};
const AuthContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        await AsyncStorage.setItem(USER_INFO, JSON.stringify(data));
        dispatch({type: SIGN_IN, payload: {...data}});
      },
      signOut: async () => {
        await AsyncStorage.removeItem(USER_INFO);
        dispatch({type: SIGN_OUT});
      },
      signUp: async (data) => {},
      restoreToken: async (data) => {
        const userInfo = await JSON.parse(
          await AsyncStorage.getItem(USER_INFO),
        );
        console.log(userInfo);
        dispatch({type: RESTORE_TOKEN, payload: {...userInfo}});
        data;
      },
    }),
    [],
  );
  return (
    <AuthenticationContext.Provider value={{authContext, state}}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
