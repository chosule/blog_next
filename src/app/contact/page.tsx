
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {

     return(
      <div className="bg-[url('/image/memo2.png')]  bg-contain bg-no-repeat w-[500px] h-[500px] absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]">
         {/* <div className="bg-[url('/image/iphone.png')] w-[600px] h-[600px] bg-contain bg-no-repeat absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]"> */}
         {/* </div>      */}
         <ContactForm/>
      </div>
     )
}