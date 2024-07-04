import ContactForm from "@/components/Contact/ContactForm";
import ContactMe from "@/components/Contact/ContactMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact chosule",
  description: "이메일 보내기.",
};

export default function ContactPage() {
  return (
    <div className="mt-28 flex w-full flex-col items-center gap-28">
      <ContactMe />
      <ContactForm />
    </div>
  );
}
