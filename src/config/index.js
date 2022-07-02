import dotenv from "dotenv";

dotenv.config();

const { PORT, DB_URL } = process.env;

const config = {
  PORT: PORT || 4005,
  DB_URL: DB_URL,
};

export { config };