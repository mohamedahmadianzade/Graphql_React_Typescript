export default interface ILog {
    id: number
    user: userForLog
    date: string
    description: string
}
interface userForLog {
    name: string
    username: string
    avatar: string
}