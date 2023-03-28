import BaseRepository from "../../core/base.repository.js";
import LogModel from './logs.model';
export default class LogRepository extends BaseRepository {
    async getAllLogs() {
        const data = await LogModel.find();
        return this.successResponse({ data, message: "show all logs" });
    }
    async addLog(log) {
        const data = new LogModel({
            date: new Date().toLocaleDateString(),
            ...log
        });
        return this.successResponse({ data, message: "created new log" });
    }
}
