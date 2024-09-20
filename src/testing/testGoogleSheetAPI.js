const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require("dotenv").config();

const GOOGLE_SHEET_ID = "1xwJoUF_HZqnhzwDAWEtXchXjBqjMIQ_m-cPy53rNEZY";
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

const serviceAccountAuth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function testGoogleSheetAPI() {
  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
  await doc.loadInfo(); // Loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0];
  console.log(`Sheet Title: ${sheet.title}`);
  console.log(`Row Count: ${sheet.rowCount}`);

  const rows = await sheet.getRows();
  console.log(rows);
}

testGoogleSheetAPI().catch((err) => console.error(err));
