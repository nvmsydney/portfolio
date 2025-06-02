import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const mailtoLink = `mailto:nguyensydney@pm.me?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm happy to connect, whether to discuss potential opportunities or
            to just chat!{" "}
     </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">nguyensydney@pm.me</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (571) 340-5945</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Austin, TX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-md border border-border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Name<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-muted-foreground"
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-muted-foreground"
                placeholder="johnsmith@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-muted-foreground"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-muted-foreground"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground"
              >
                Message<span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-muted-foreground"
                placeholder="Hello, I'd like to inquire about..."
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
