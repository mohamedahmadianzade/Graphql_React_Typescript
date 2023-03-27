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