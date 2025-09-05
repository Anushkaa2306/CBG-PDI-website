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

const ROLES = [
  "PDI Intern / Inspector",
  "Operations Support",
  "Spare Parts Coordinator",
  "Tech & Digital",
];

export default function Career() {
  const { toast } = useToast();
  const [role, setRole] = useState<string>(ROLES[0]);
  const [service, setService] = useState<string>("PDI");

  const phoneNumber = "+918349180078";
  const email = "infocheckbeforego@gmail.com";
  const website = "https://www.checkbeforego.com";

  const submitCareer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const emailVal = String(data.get("email") || "");
    const education = String(data.get("education") || "");
    const skills = String(data.get("skills") || "");
    const why = String(data.get("why") || "");

    const subject = encodeURIComponent(`Career Application - ${role}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${emailVal}\nRole: ${role}\nEducation: ${education}\nSkills: ${skills}\nWhy join: ${why}`,
    );
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailto);
    toast({ title: "Application ready", description: "Your email draft has opened." });
    (e.target as HTMLFormElement).reset();
    setRole(ROLES[0]);
  };

  const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("c_name") || "");
    const phone = String(data.get("c_phone") || "");
    const emailVal = String(data.get("c_email") || "");
    const makeModelYear = String(data.get("c_mmy") || "");
    const message = String(data.get("c_message") || "");

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
              Join the CBG Team – Drive Transparency in the Auto Industry
            </h1>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Open Roles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ROLES.map((r) => (
                <Card key={r}>
                  <CardHeader className="py-4">
                    <CardTitle className="text-lg">{r}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>Apply Now</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitCareer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91..." required />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="sm:col-span-1">
                    <Label>Role</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="education">Education</Label>
                    <Input id="education" name="education" placeholder="Highest qualification" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea id="skills" name="skills" placeholder="List relevant skills, tools, certifications" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="why">Why join CBG?</Label>
                    <Textarea id="why" name="why" placeholder="Tell us why you want to join" />
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <Button type="submit">Submit Application</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="grid gap-6 lg:grid-cols-2">
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
                  <CardTitle>Quick Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={submitContact} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1">
                      <Label htmlFor="c_name">Name</Label>
                      <Input id="c_name" name="c_name" placeholder="Your name" required />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="c_phone">Phone / WhatsApp</Label>
                      <Input id="c_phone" name="c_phone" type="tel" placeholder="+91..." required />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="c_email">Email (optional)</Label>
                      <Input id="c_email" name="c_email" type="email" placeholder="you@example.com" />
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
                      <Label htmlFor="c_mmy">Vehicle Make / Model / Year</Label>
                      <Input id="c_mmy" name="c_mmy" placeholder="e.g., Maruti Swift 2019" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="c_message">Message / Preferred Date</Label>
                      <Textarea id="c_message" name="c_message" placeholder="Tell us what you need and preferred date" />
                    </div>
                    <div className="sm:col-span-2 flex justify-end">
                      <Button type="submit">Send Message</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
