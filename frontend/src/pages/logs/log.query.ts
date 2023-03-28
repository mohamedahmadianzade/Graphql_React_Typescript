import { gql } from '@apollo/client';
export const getAllLogsQuery = gql`
query logs {
  logs {
    success
    message
    data {
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


export const deleteAllLogsQuery = gql`
mutation Mutation {
  deleteAllLogs {
    message
    success
  }
}
`