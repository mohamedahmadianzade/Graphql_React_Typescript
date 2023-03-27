interface ISucessResponseInput {
    message: string;
    data: any
}
interface ISucessResponseOutput {
    message: string;
    success: boolean;
    data: any
}

interface IFailResponseOutput {
    success: boolean;
    message: string;
}

export default class BaseRepository {
    successResponse({ message, data }: ISucessResponseInput): ISucessResponseOutput {
        return {
            message,
            success: true,
            data
        }
    }

    failResponse({ message }: { message: string }): IFailResponseOutput {
        return {
            success: false,
            message
        }

    }

}