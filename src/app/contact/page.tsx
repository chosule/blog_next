
import ContactForm from "@/components/Contact/ContactForm";
import ContactForm2 from "@/components/Contact/ContactForm2";
import ContactMe from "@/components/Contact/ContactMe";

export default function ContactPage() {
     return(
         <div className="border-[#f6f6f6] border-8 rounded-xl p-10 w-full flex flex-col gap-16">
            <ContactMe/>
            <ContactForm/>
            {/* <ContactForm2/> */}
         </div>
     )
}