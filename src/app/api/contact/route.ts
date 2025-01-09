import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { fullName, email, title, message } = await request.json();

    if (!fullName || !email || !title || !message) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    console.log(fullName, email, title, message);
    

    return NextResponse.json({ message: "Message submitted successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}