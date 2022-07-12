import dotenv from "dotenv";

dotenv.config();

const { PORT, DBAtlas, SESSION_SECRET } = process.env;

const config = {
  PORT: PORT || 4005,
  DBAtlas,
  SESSION_SECRET
};

export { config };