import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Sending:", body, process.env.GOOGLE_SCRIPT_URL);

    const response = await fetch(
      process.env.GOOGLE_SCRIPT_URL!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log("Google Status:", response.status);

    const text = await response.text();

    console.log("Google Response:", text);

    const data = JSON.parse(text);

    return NextResponse.json(data, { status: data.success ? 200 : 400 });

  } catch (error) {

    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}