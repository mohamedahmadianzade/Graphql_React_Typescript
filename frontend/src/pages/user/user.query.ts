import { gql } from '@apollo/client';
export const getAllUserQuery = gql`
  query Users {
    users {
      success
      message
      data {
        username
        password
        name
        avatar
      }
    }
  }
`;


export const createUserQuery = gql`
mutation AddUser($user: AddUserInput) {
  addUser(user: $user) {
    success
    message
    data {
      username
      password
      name
      avatar
    }
  }
}
`

export const deleteAllUsersQuery = gql`
mutation DeleteAllUsers {
  deleteAllUsers {
    message
    success
  }
}
`
export const deleteUserQuery = gql`
mutation DeleteUser($username: String) {
  deleteUser(username: $username) {
    message
    success
  }
}
`
