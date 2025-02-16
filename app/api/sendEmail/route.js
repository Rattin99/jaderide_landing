import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      businessName,
      businessType,
      locations,
      address,
      firstName,
      lastName,
      email,
      phone,
    } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password (not regular email password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "steveolivier2010@gmail.com", // Change this to your desired recipient
      subject: "New Business Inquiry",
      text: `You have a new business inquiry:
      
      Business Name: ${businessName}
      Business Type: ${businessType}
      Locations: ${locations}
      Address: ${address}
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}
