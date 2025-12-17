import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import "./Contact.sass";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const FormFields = z.object({
  fullName: z.string().min(2, "Full name is required"),
  userEmail: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  userMessage: z.string().min(10, "You forgot to write a message!"),
});

type UserForm = z.infer<typeof FormFields>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: formIsSubmitting },
  } = useForm<UserForm>({
    resolver: zodResolver(FormFields),
  });

  const onSubmit = async (data: UserForm) => {
    setIsSubmitting(true);

    const templateParams = {
      fullName: data.fullName,
      userEmail: data.userEmail,
      subject: data.subject,
      userMessage: data.userMessage,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("Message successfully sent!");
      reset();
    } catch (err) {
      toast.error("Request failed, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex mx-auto flex-col w-2/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Contact Me</h3>
      <Card className="form-wrapper">
        <div className="from-inputs">
          <div className="space-y-2">
            <Label>Full Name *</Label>
            <Input className="input-fields" {...register("fullName")} />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Email Address *</Label>
            <Input
              className="input-fields"
              {...register("userEmail")}
              placeholder="E-Mail"
              type="email"
            />
            {errors.userEmail && (
              <p className="text-red-600 text-sm mt-1">
                {errors.userEmail.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Subject *</Label>
          <Input className="input-fields" {...register("subject")} />
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Message *</Label>
          <Textarea className="input-fields" {...register("userMessage")} />
          {errors.userMessage && (
            <p className="text-red-600 text-sm mt-1">
              {errors.userMessage.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || formIsSubmitting}
          className="submit-btn"
        >
          <Send style={{ backgroundColor: "unset", marginRight: ".1rem" }} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Card>
    </form>
  );
};
