import LogRepository from "../features/log/log.repository"
import UserRepository from "../features/user/user.repository"

export default interface IContext {
    repository: {
        user: UserRepository,
        log: LogRepository
    }
}