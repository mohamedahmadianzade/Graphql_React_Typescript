import BaseRepository from "../../core/base.repository.js";
import { IServiceResponse } from "../../core/service.interface.js";
import IUser from "./user.interface.js";
import UserModel from "./user.model.js";
export default class UserRepository extends BaseRepository {

    /**
     * Get all users in the dataset
     *
     * @return {*} 
     * @memberof UserRepository
     */
    async getAllUsers(): Promise<IServiceResponse<IUser[]>> {
        const data = await UserModel.find()
        return this.successResponse({ data, message: "get list of the user" })
    }



    /**
     *
     * Create new user in database
     * @param {IUser} user
     * @return {*}  {Promise<IServiceResponse<IUser>>}
     * @memberof UserRepository
     */
    async addUser(user: IUser): Promise<IServiceResponse<IUser>> {
        const userExist = await UserModel.exists({ username: user.username })
        if (userExist)
            return this.failResponse({ message: 'User already exists' })
        const data = new UserModel(user)
        await data.save();
        return this.successResponse({
            data, message: "create user successfully done!"
        })
    }



    /**
     * delete all users in the database
     *
     * @return {*}  {Promise<IServiceResponse<boolean>>}
     * @memberof UserRepository
     */
    async deleteAllUser(): Promise<IServiceResponse<boolean>> {
        await UserModel.deleteMany({})
        return this.successResponse({ message: "all users successfully deleted", data: true })
    }



    /**
     * delete a user by username
     *  
     * @param {String} username
     * @return {*}  {Promise<IServiceResponse<boolean>>}
     * @memberof UserRepository
     */
    async deleteUser(username: String): Promise<IServiceResponse<boolean>> {
        const result = await UserModel.deleteOne({ username })
        if (result.deletedCount == 1)
            return this.successResponse({ message: "selected user successfully deleted", data: true })

        this.failResponse({ message: "user can't be deleted" })
    }



    /**
     * get user by username
     *
     * @param {string} username
     * @return {*} 
     * @memberof UserRepository
     */
    async getUserByName(username: string): Promise<IServiceResponse<IUser>> {
        const data = await UserModel.findOne({ username });
        return this.successResponse({ data, message: "get user information" })
    }

}