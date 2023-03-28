import { gql } from '@apollo/client';
export const getAllLogsQuery = gql`
query logs {
  logs {
    success
    message
    data {
      id
      user {
        name
        username
        avatar
      }
      date
      description
    }
  }
}
`;
