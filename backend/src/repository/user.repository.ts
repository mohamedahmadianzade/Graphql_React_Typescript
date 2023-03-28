import BaseRepository from "./base.repository.js";
import { users } from "../dataset.js";
import { IServiceResponse } from "../interface/service.interface.js";
import IUser from "../interface/user.interface.js";
export default class UserRepository extends BaseRepository {

    /**
     * Get all users in the dataset
     *
     * @return {*} 
     * @memberof UserRepository
     */
    async getAllUsers(): Promise<IServiceResponse<IUser[]>> {
        const data = users;
        return this.successResponse({ data, message: "get list of the user" })
    }

    async addUser(user: IUser): Promise<IServiceResponse<IUser>> {
        const data = { userId: Math.floor(Math.random() * (1000 - 1) + 1), ...user };
        users.push(data)
        return this.successResponse({
            data, message: "create user successfully done!"
        })
    }

    async deleteAllUser(): Promise<IServiceResponse<boolean>> {
        users.length = 0
        return this.successResponse({ message: "all users successfully deleted", data: true })
    }

    async deleteUser(username: String): Promise<IServiceResponse<boolean>> {
        const info = users.filter(user => user.username != username);
        users.length = 0;
        info.map((user) => {
            users.push(user)
        });

        return this.successResponse({ message: "selected user successfully deleted", data: true })
    }



    /**
     * get user by username
     *
     * @param {string} username
     * @return {*} 
     * @memberof UserRepository
     */
    async getUserByName(username: string): Promise<IServiceResponse<IUser>> {
        const data = users.find(user => user.username === username)
        return this.successResponse({ data, message: "get user information" })
    }
}