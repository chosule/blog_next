import SubTitle from "../SubTitle";
import ContactLink from "./ui/ContactLink";

export default function ContactMe() {
  return (
      <div className="flex flex-col items-center gap-5">
        <SubTitle>✨ Contact me</SubTitle>
        <ul className="flex h-[200px] w-[439px] flex-col gap-3 overflow-hidden bg-cover rounded-xl bg-neutral-50 p-8 contact-me-shadow">
          <li className="">
            <h3 className="font-bold text-lg dark:text-neutral-900">김초슬</h3>
            <h3 className="text-xs dark:text-neutral-900">FrontEnd</h3>
          </li>
          <ContactLink/>
        </ul>
      </div>

  );
}
