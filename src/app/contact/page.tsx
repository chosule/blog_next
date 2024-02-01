
import ContactForm from "@/components/Contact/ContactForm";
import ContactForm2 from "@/components/Contact/ContactForm2";
import ContactMe from "@/components/Contact/ContactMe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Contact chosule',
    description: "이메일 보내기.",
};

export default function ContactPage() {
     return(
         <div className="border-[#f6f6f6] border-8 rounded-xl p-10 w-full flex flex-col gap-16 mt-10">
            <ContactMe/>
            <ContactForm/>
            {/* <ContactForm2/> */}
         </div>
     )
}