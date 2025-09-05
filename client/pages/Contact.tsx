import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [service, setService] = useState<string>("PDI");

  const phoneNumber = "+918349180078";
  const email = "infocheckbeforego@gmail.com";
  const website = "https://www.checkbeforego.com";

  const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const emailVal = String(data.get("email") || "");
    const makeModelYear = String(data.get("mmy") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Contact Request - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone/WhatsApp: ${phone}\nEmail: ${emailVal}\nService Needed: ${service}\nVehicle Make/Model/Year: ${makeModelYear}\nMessage / Preferred Date: ${message}`,
    );
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailto);
    toast({ title: "Message ready", description: "Your email draft has opened." });
    (e.target as HTMLFormElement).reset();
    setService("PDI");
  };

  return (
    <div className="min-h-screen bg-green-100 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <section className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-muted-foreground">We’re here to help with PDI, spare parts, and general inquiries.</p>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Phone / WhatsApp: {" "}
                  <a className="text-primary underline" href={`tel:${phoneNumber}`}>
                    +91 83491 80078
                  </a>{" "}
                  · {" "}
                  <a
                    className="text-primary underline"
                    href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </p>
                <p>
                  Email: {" "}
                  <a className="text-primary underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>
                <p>
                  Website: {" "}
                  <a className="text-primary underline" href={website} target="_blank" rel="noreferrer">
                    www.checkbeforego.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitContact} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91..." required />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Service Needed</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PDI">PDI</SelectItem>
                        <SelectItem value="Spare Parts">Spare Parts</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="mmy">Vehicle Make / Model / Year</Label>
                    <Input id="mmy" name="mmy" placeholder="e.g., Maruti Swift 2019" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message / Preferred Date</Label>
                    <Textarea id="message" name="message" placeholder="Tell us what you need and preferred date" />
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <Button type="submit">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
