import axios, {AxiosPromise} from 'axios';
import React from 'react';
import {endPoints} from '../constants/api/Auth';

import {AuthenticationContext} from '../navigation/AuthContext';

const useAxios = () => {
  const {
    state: {userToken},
  } = React.useContext(AuthenticationContext);
  /*  console.log(storeToken); */

  const instance = axios.create({
    baseURL: endPoints.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      timeout: 10000,
      authorization: '62c0c6cacf66f3cdff5b34db8615ded4',
    },
  });

  return instance;
};

export {useAxios};
