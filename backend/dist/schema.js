const typeDefs = `#graphql
input AddUserInput {
  name: String
  username: String
  password: String
}
type User {
  name: String!
  username: String!
  password: String!
  avatar: String
}
type Log {
  user: User!
  date: String!
  description: String!
}
type Query {
  users: UserResponse
  userByUsername(username: String): UserByUsernameResponse
  logs: LogResponse
}

type Mutation {
  addUser(user: AddUserInput): AddUserResponse
}

type UserResponse implements ServiceResponse{ 
  data:[User]
  success: Boolean
  message: String
}

type LogResponse implements ServiceResponse
{
  data:[Log]
  success: Boolean
  message: String
}

type UserByUsernameResponse implements ServiceResponse{ 
  data:User
  success: Boolean
  message: String
}
type AddUserResponse implements ServiceResponse {
  data: User
  success: Boolean
  message: String
}




interface ServiceResponse {
  success: Boolean
  message: String
}
`;
export default typeDefs;