export default class BaseRepository {
    successResponse({ message, data }) {
        return {
            message,
            success: true,
            data
        };
    }
    failResponse({ message }) {
        return {
            success: false,
            message
        };
    }
}
