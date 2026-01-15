import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // In a real app, this would use the API path
      // const res = await fetch(api.messages.create.path, {
      //   method: api.messages.create.method,
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Failed to send message");
      
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });
}
