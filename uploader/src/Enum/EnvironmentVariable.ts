const ENABLE_CHAT_UPLOAD = process.env.ENABLE_CHAT_UPLOAD || true;
const UPLOAD_MAX_FILESIZE = process.env.UPLOAD_MAX_FILESIZE;
const ADMIN_API_URL = process.env.ADMIN_API_URL;

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
const AWS_BUCKET = process.env.AWS_BUCKET;
const AWS_ENDPOINT = process.env.AWS_ENDPOINT;
const UPLOADER_AWS_SIGNED_URL_EXPIRATION = parseInt(process.env.UPLOADER_AWS_SIGNED_URL_EXPIRATION || "60")

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_DB_NUMBER = process.env.REDIS_DB_NUMBER;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

const UPLOADER_URL = process.env.UPLOADER_URL;
const CHAT_URL = process.env.CHAT_URL;

export const ALLOWED_CORS_ORIGIN = process.env.ALLOWED_CORS_ORIGIN || CHAT_URL || "*";
export const DEBUG_ERROR_MESSAGES = process.env.DEBUG_ERROR_MESSAGES || "";

export {
    ENABLE_CHAT_UPLOAD,
    UPLOAD_MAX_FILESIZE,
    ADMIN_API_URL,
    UPLOADER_URL,
    CHAT_URL,

    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    AWS_BUCKET,
    AWS_ENDPOINT,
    UPLOADER_AWS_SIGNED_URL_EXPIRATION,

    REDIS_HOST,
    REDIS_PORT,
    REDIS_DB_NUMBER,
    REDIS_PASSWORD
};
