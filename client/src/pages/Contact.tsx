import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-messages";
import { Mail, Phone, MapPin } from "lucide-react";

// Extend schema slightly for client validation custom messages if needed
const formSchema = insertMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { mutate, isPending } = useSendMessage();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact Us" centered />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8 font-display">Get in touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-blue-200 text-sm">Conference Secretary: Amy Hu</p>
                  <a href="mailto:ipee_conf@126.com" className="text-white hover:underline mt-1 block">ipee_conf@126.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-blue-200">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+861234567890" className="text-white hover:underline mt-1 block">+86 123 456 7890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-blue-200">
                    Penang, Malaysia<br />
                    (Venue details will be announced soon)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  {...form.register("name")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                isLoading={isPending}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
