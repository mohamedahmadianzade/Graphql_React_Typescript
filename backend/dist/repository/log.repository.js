import BaseRepository from "./base.repository.js";
import { logs } from "../dataset.js";
export default class LogRepository extends BaseRepository {
    async getAllLogs() {
        const data = logs;
        return this.successResponse({ data, message: "show all logs" });
    }
    async addLog(log) {
        const data = { id: Math.floor(Math.random() * (1000 - 1) + 1), ...log, date: new Date().toLocaleDateString() };
        logs.push(data);
        return this.successResponse({ data, message: "created new log for user" });
    }
}
