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
