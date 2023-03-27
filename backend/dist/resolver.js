import { users } from './dataset.js';
const resolvers = {
    Query: {
        users: async (_, __, context) => {
            const result = await context.repository.user.getAllUsers();
            return result;
        },
        userByUsername: async (_, { username }, context) => {
            const result = await context.repository.user.getUserByName(username);
            return result;
        },
        logs: async (_, __, context) => {
            const result = await context.repository.log.getAllLogs();
            return result;
        }
    },
    Log: {
        user: (parent) => {
            const user = users.find(user => user.username === parent.user);
            return {
                username: user.username,
                name: user.name
            };
        }
    }
};
export default resolvers;
