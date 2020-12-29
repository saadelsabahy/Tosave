/* eslint-disable prettier/prettier */
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = '://ims.trendsgcc.com/v1/graphql';

let GetClient = (token) => {

  const link = new WebSocketLink({
    uri: `ws${BASE_URL}`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret':'ismservices#5@2020',
        //   Authorization: `Bearer ${token}`,
        },
      },
    },
  });
  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
};
export default GetClient;
