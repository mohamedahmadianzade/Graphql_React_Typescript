import { users, logs } from './dataset.js';
import IContext from './interface/context.interface.js';
const resolvers = {
  Query: {
    users: async (_, __, context: IContext) => {
      const result = await context.repository.user.getAllUsers()
      return result
    },
    userByUsername: async (_, { username }, context: IContext) => {
      const result = await context.repository.user.getUserByName(username)
      return result
    },
    logs: async (_, __, context: IContext) => {
      const result = await context.repository.log.getAllLogs();
      return result
    }
  },
  Log: {
    user: (parent) => {
      const user = users.find(user => user.userId === parent.user);
      if (user)
        return user

      return {}
    }
  }
};
export default resolvers;
