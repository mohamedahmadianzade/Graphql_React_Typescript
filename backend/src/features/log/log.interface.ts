export default interface ILog {
    user: userForLog
    date: string
    description: string
}
interface userForLog {
    name: string
    username: string
    avatar: string
}