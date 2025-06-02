
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm happy to connect, whether to discuss potential opportunities or to just chat!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">nguyensydney@pm.me</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">+1 (571) 340-5945</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">Austin, TX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
