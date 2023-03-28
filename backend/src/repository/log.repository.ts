import { IServiceResponse } from './../interface/service.interface';
import BaseRepository from "./base.repository.js";
import { logs } from "../dataset.js";
import ILog from '../interface/log,interface.js';
export default class LogRepository extends BaseRepository {
    async getAllLogs(): Promise<IServiceResponse<ILog[]>> {
        const data = logs;
        return this.successResponse({ data, message: "show all logs" })
    }

    async addLog(log: any): Promise<IServiceResponse<ILog>> {
        const data = { id: Math.floor(Math.random() * (1000 - 1) + 1), ...log, date: new Date().toLocaleDateString() }
        logs.push(data);
        return this.successResponse({ data, message: "created new log for user" })
    }
}