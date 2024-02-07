
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
         <div className="w-full gap-28 mt-28 flex flex-col items-center">
            <ContactMe/>
            <ContactForm/>
            {/* <ContactForm2/> */}
         </div>
     )
}