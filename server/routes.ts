import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Name, email, and message are required" 
        });
      }

      // Email configuration
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER || 'your.email@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.GMAIL_USER || 'your.email@gmail.com',
        to: 'suganthanprabhu7@gmail.com',
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
