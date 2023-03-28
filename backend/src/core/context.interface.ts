import LogRepository from "../features/log/log.repository"
import UserRepository from "../features/user/user.repository"

export default interface IContext {
    token: String
    repository: {
        user: UserRepository,
        log: LogRepository
    }
}