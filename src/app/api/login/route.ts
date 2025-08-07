import dbConnect from "@/lib/dbConnect";
import User from "@/models/UserModel.model";
import LoginSchema from "@/schema/LoginSchema.schema";

import { NextResponse } from "next/server";
import { decryptPassword } from "@/helpers/passwordEncryptionDecryption";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const validationResult = LoginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password } = body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const isPasswordValid = await decryptPassword(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", user: existingUser },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
