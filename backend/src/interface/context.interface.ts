import LogRepository from "../repository/log.repository"
import UserRepository from "../repository/user.repository"

export default interface IContext {
    token: String
    repository: {
        user: UserRepository,
        log: LogRepository
    }
}