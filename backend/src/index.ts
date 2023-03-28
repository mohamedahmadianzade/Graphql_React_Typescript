import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import IContext from './core/context.interface.js';
import LogRepository from './features/log/log.repository.js';
import UserRepository from './features/user/user.repository.js';
import resolvers from './resolver.js';
import typeDefs from './schema.js'
import InitMongo from './core/initMongo.js';
import * as dotenv from 'dotenv'
dotenv.config()

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});


// initialize mongo server
InitMongo();


const info = await startStandaloneServer(server, {
  listen: {
    port: parseInt(process.env.PORT),
  },
  context: async ({ req }) => {
    return {
      repository: {
        user: new UserRepository(),
        log: new LogRepository()
      }

    }
  }
});

console.log('Server started ' + JSON.stringify(info));
console.log("------------------------------------------------");
