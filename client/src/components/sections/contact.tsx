import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background/50 text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <p className="text-primary font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I am currently looking for new opportunities as a Software Engineer. 
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <Button size="lg" className="h-14 px-8 text-base font-mono" asChild>
          <a href="mailto:abbeekarlal786@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>

        <div className="mt-24 pt-8 border-t border-border/30 text-sm font-mono text-muted-foreground/60">
          <p>Designed & Built by Abbas Sadiq</p>
          <p className="mt-2">Lahore, Punjab Pakistan • +92 311-5892512</p>
        </div>
      </div>
    </section>
  );
}
