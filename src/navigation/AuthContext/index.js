import React, {useMemo, useReducer} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {SIGN_IN, SIGN_OUT, RESTORE_TOKEN} from './types';
export const AuthenticationContext = React.createContext();

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: payload,
        isLoading: false,
      };
      break;
    case SIGN_IN:
      return {
        ...state,
        userToken: payload,
        isLoading: false,
        isSignout: false,
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
        await AsyncStorage.setItem('userToken', data.userToken);
        dispatch({type: SIGN_IN, payload: data.userToken});
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch({type: SIGN_OUT});
      },
      signUp: async (data) => {},
      restoreToken: async (data) => {
        const token = await AsyncStorage.getItem('userToken');
        dispatch({type: RESTORE_TOKEN, payload: token});
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
