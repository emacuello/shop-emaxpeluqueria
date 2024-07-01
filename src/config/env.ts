import 'dotenv/config';

export const DATABASE_URL = process.env.DB_URI;
export const PORT = process.env.PORT || 3001;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const JWT_SECRET = process.env.SECRET_KEY;
export const HOST_REDIS = process.env.HOST_REDIS;
export const PORT_REDIS = process.env.PORT_REDIS;
export const PASSWORD_REDIS = process.env.PASSWORD_REDIS;
