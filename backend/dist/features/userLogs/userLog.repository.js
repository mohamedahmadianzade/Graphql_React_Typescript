import BaseRepository from "../../core/base.repository.js";
import UserLogModel from './userLog.model.js';
export default class UserLogRepository extends BaseRepository {
    async getAllLogs() {
        const data = await UserLogModel.find({});
        return this.successResponse({ data, message: "show all logs" });
    }
    async addLog(log) {
        const data = new UserLogModel({
            date: new Date().toLocaleDateString(),
            ...log
        });
        await data.save();
        return this.successResponse({ data, message: "created new log" });
    }
}
