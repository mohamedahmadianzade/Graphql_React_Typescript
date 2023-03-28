import { IServiceResponse } from '../../core/service.interface';
import BaseRepository from "../../core/base.repository.js";
import ILog from './log.interface.js';
import LogModel from './log.model.js';
export default class UserLogRepository extends BaseRepository {
    async getAllLogs(): Promise<IServiceResponse<ILog[]>> {
        const data = await LogModel.find();
        return this.successResponse({ data, message: "show all logs" })
    }

    async addLog(log: any): Promise<IServiceResponse<ILog>> {
        const data = new LogModel({
            date: new Date().toLocaleDateString(),
            ...log
        });
        await data.save()
        return this.successResponse({ data, message: "created new log" })
    }

    async deleteAllLogs() {
        await LogModel.deleteMany({})
        return this.successResponse({
            message: "deleted all logs successfully",
            data: true
        })
    }
}