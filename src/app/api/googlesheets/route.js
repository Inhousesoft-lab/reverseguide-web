import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function getGoogleSheet(sheetId) {
  const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
  await doc.loadInfo();
  return doc;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let sheetId = searchParams.get("sheetId");
  let gid = searchParams.get("gid");

  if (!sheetId) {
    return NextResponse.json(
      { error: "Sheet ID is required" },
      { status: 400 }
    );
  }

  try {
    const googleSheet = await getGoogleSheet(sheetId);
    const sheet = googleSheet.sheetsByIndex[gid];

    if (!sheet) {
      return NextResponse.json(
        { error: `Sheet with index ${gid} not found` },
        { status: 404 }
      );
    }

    await sheet.loadCells();
    const rows = await sheet.getRows();

    return NextResponse.json(rows.map((row) => row._rawData));
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
