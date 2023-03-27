import BaseRepository from "./base.repository.js";
import { users } from "../dataset.js";
export default class UserRepository extends BaseRepository {
    /**
     * Get all users in the dataset
     *
     * @return {*}
     * @memberof UserRepository
     */
    async getAllUsers() {
        const data = users;
        return this.successResponse({ data, message: "get list of the user" });
    }
    /**
     * get user by username
     *
     * @param {string} username
     * @return {*}
     * @memberof UserRepository
     */
    async getUserByName(username) {
        const data = users.find(user => user.username === username);
        return this.successResponse({ data, message: "get user information" });
    }
}
