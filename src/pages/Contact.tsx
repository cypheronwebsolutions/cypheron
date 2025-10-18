import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import * as React from "react";

const SERVICE_ID = "cypheron_services88";
const TEMPLATE_ADMIN = "cypheron_contactus";   // 👈 create in EmailJS
const TEMPLATE_USER = "cypheron_auto_reply";      // 👈 your auto reply template
const PUBLIC_KEY = "GbAMUQ9aeK86oIkQ0";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Form Data Before Sending:", formData);

      // 1. Send email to ADMIN (your company email)
      await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ADMIN,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            message: formData.message,
            to_email: "cypheronwebsolutions@gmail.com", // 👈 fixed recipient (you)
          },
          PUBLIC_KEY
      );

      // 2. Send auto-reply to USER
      await emailjs.send(
          SERVICE_ID,
          TEMPLATE_USER,
          {
            to_name: formData.name,
            to_email: formData.email, // 👈 recipient is user
            company: formData.company,
          },
          PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We’ve sent you a confirmation email as well.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast({
        title: "Error",
        description: "Failed to send your message. Try again later.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-supporting" />,
      title: "Email",
      details: "cypheronwebsolution@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Clock className="h-6 w-6 text-supporting" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries promptly",
    },
    {
      icon: <Phone className="h-6 w-6 text-supporting" />,
      title: "Phone",
      details: "Available upon request",
      description: "We'll provide our contact number after initial email",
    },
  ];

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-gradient-black">Get In</span>{" "}
                <span className="text-hero-accent">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your project? We'd love to hear from you. Send us a
                message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gradient-section-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="slide-up">
                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      Send us a message
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24
                      hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project..."
                            rows={6}
                        />
                      </div>

                      <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover-scale"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Let's Start a Conversation
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      We're here to help you bring your vision to life. Whether
                      you need a new website, want to improve your existing one,
                      or need digital marketing support, we're ready to discuss
                      your project.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                        <Card
                            key={info.title}
                            className="hover-scale transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">{info.icon}</div>
                              <div>
                                <h3 className="font-semibold text-primary mb-1">
                                  {info.title}
                                </h3>
                                <p className="text-foreground font-medium mb-1">
                                  {info.details}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {info.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    ))}
                  </div>

                  <Card className="bg-gradient-accent text-accent-foreground">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">What happens next?</h3>
                      <ul className="space-y-2 text-sm opacity-90">
                        <li>• We'll review your message and project requirements</li>
                        <li>• Our team will prepare a detailed proposal</li>
                        <li>• We'll schedule a call to discuss your project</li>
                        <li>• Start building your dream website together</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;