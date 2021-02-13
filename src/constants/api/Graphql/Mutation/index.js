import {gql} from '@apollo/client';
export const UPDATE_USER = gql`
  mutation updateUser($id: uuid, $name: String, $avatar: String) {
    update_user(
      where: {id: {_eq: $id}}
      _set: {username: $name, avatar: $avatar}
    ) {
      returning {
        avatar
        display_name
      }
    }
  }
`;
