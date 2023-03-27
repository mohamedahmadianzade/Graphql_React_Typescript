import BaseRepository from "./base.repository.js";
import { logs } from "../dataset.js";
export default class LogRepository extends BaseRepository {
    async getAllLogs(): Promise<any> {
        const data = logs;
        return this.successResponse({ data, message: "show all logs" })
    }
}