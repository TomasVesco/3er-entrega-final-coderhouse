import dotenv from "dotenv";

dotenv.config();

const { PORT, DBAtlas, SESSION_SECRET, COMPANY_EMAIL, COMPANY_EMAIL_TOKEN, ADM_EMAIL, ADM_PHONE, WP_AUTH_TOKEN, WP_ACCOUNT_SID } = process.env;

const config = {
  PORT: PORT || 4005,
  DBAtlas,
  SESSION_SECRET,
  COMPANY_EMAIL,
  COMPANY_EMAIL_TOKEN,
  ADM_EMAIL,
  ADM_PHONE,
  WP_AUTH_TOKEN,
  WP_ACCOUNT_SID
};

export { config };