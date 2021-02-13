import {gql} from '@apollo/client';
export const UPDATE_USER = gql`
  mutation updateUser($user_id: uuid) {
    update_user(where: {id: {_eq: $user_id}}) {
      returning {
        avatar
        display_name
      }
    }
  }
`;
