const typeDefs = `#graphql
input AddUserInput {
  name: String
  username: String
  password: String
}
type User {
  userId:Int!,
  name: String!
  username: String!
  password: String!
  avatar: String
}

type userForLog {
  name: String
  username: String
  avatar:String
}


type Log {
  id:Int
  user: userForLog
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
  deleteAllUsers: DeleteUserResponse
  deleteUser(username:String): DeleteUserResponse
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

type DeleteUserResponse implements ServiceResponse
{
  success: Boolean
  message: String
}



interface ServiceResponse {
  success: Boolean
  message: String
}
`;
export default typeDefs;
