import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // The URL from Google Apps Script Web App Deployment
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SHEETS_SCRIPT_URL is not set. Simulating success.");
      // If the URL is not set (e.g. user hasn't deployed the script yet), simulate success
      return NextResponse.json({ success: true, simulated: true });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Google Sheets Web App responded with error:", response.status, response.statusText);
      return NextResponse.json({ success: false, error: 'Submission failed at destination' }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
