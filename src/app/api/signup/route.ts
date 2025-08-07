import dbConnect from "@/lib/dbConnect";
import User from "@/models/UserModel.model";
import SignupSchema from "@/schema/SignupSchema.schema";

import { NextResponse } from "next/server";
import { encryptPassword } from "@/helpers/passwordEncryptionDecryption";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const validationResult = SignupSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { username, email, password } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser?.email) {
      return NextResponse.json(
        { error: "Email is already in use" },
        { status: 400 }
      );
    }

    const hashPassword = await encryptPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    if (!newUser) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
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
