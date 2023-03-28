import IContext from './core/context.interface.js';
const resolvers = {
  Mutation: {
    addUser: async (_, { user }, context: IContext) => {
      const result = await context.repository.user.addUser(user)
      await context.repository.log.addLog({ description: `${user.username} created in database successfully`, user: user.username })
      return result;
    },
    deleteAllUsers: async (_, __, context: IContext) => {
      const result = await context.repository.user.deleteAllUser();
      await context.repository.log.addLog({ description: `All users deleted successfully` })
      return result;
    },
    deleteUser: async (_, { username }, context: IContext) => {
      const result = await context.repository.user.deleteUser(username);
      await context.repository.log.addLog({ description: `${username} deleted successfully`, user: username })
      return result;
    },
    deleteAllLogs: async (_, __, context: IContext) => {
      const result = await context.repository.log.deleteAllLogs();
      return result;
    },

  },
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
    user: async (parent, _, context: IContext) => {
      const user = await context.repository.user.getUserByName(parent.user)
      if (user.data)
        return user.data

      return {}
    }
  }
};
export default resolvers;
