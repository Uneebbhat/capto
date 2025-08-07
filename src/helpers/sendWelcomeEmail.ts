import { resend } from "@/lib/resend";
import { WelcomeEmail } from "../../emails/WelcomeEmail";
import { NextResponse } from "next/server";

export async function sendWelcomeEmail(
  name: string,
  email: string
): Promise<any> {
  try {
    const { data, error } = await resend.emails.send({
      from: "uneebbhatti3@gmail.com",
      to: [email],
      subject: "Say Goodbye to Writer’s Block — Welcome to Capto!",
      react: WelcomeEmail({ name }),
    });

    // console.log(data?.id);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({
      success: true,
      message: "Welcome email send successfully",
    });
  } catch (emailError) {
    console.error("Error sending welcome email", emailError);
    return NextResponse.json({
      success: false,
      message: "Failed to send welcome email",
    });
  }
}
