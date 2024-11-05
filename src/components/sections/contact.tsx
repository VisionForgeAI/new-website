import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team of
            experts today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email Address" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Tell us about your project"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      contact@visionforge.ai
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Drive
                      <br />
                      Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;