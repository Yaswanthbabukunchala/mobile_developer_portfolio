
import { motion } from "framer-motion";
import { Mail, Github, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss your project and 
            create something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="btn-primary">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button variant="outline" className="btn-secondary">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="btn-secondary">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
            <Button variant="outline" className="btn-secondary">
              <ExternalLink className="mr-2 h-5 w-5" />
              Message on Upwork
            </Button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Contact
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Email</div>
                <div className="text-gray-600 dark:text-gray-400">ashish@example.com</div>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Location</div>
                <div className="text-gray-600 dark:text-gray-400">Available Worldwide</div>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Response Time</div>
                <div className="text-gray-600 dark:text-gray-400">Within 24 hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
