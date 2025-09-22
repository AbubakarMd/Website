import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Make the API call to Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "collabwithabu@gmail.com",
        to: "collabwithabu@gmail.com",
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      })
    });

    // Always return JSON, even if Resend returns empty
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ message: errorText || "Failed to send email" });
    }

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
}
