import { getToken } from './general';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import LogRepository from './repository/log.repository.js';
import UserRepository from './repository/user.repository.js';
import resolvers from './resolver.js';
import typeDefs from './schema.js';
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const info = await startStandaloneServer(server, {
    listen: {
        port: 4002,
    },
    context: async ({ req }) => {
        return {
            token: getToken(req),
            repository: {
                user: new UserRepository(),
                log: new LogRepository()
            }
        };
    }
});
console.log('Server started ' + JSON.stringify(info));
