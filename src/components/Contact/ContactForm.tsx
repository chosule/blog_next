"use client";
import useWatchTimeout from "@/lips/useWatchTimeout";
import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import SubTitle from "../SubTitle";
import airplaneIcon from "../../../public/Image/airplaneIcon.png"
import Image from "next/image";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        toast("전송에 성공하였습니다 !", {
          icon: "✨",
          style: { background: "#f0f8ff" },
        });
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        console.log("err", err);
        toast("전송에 실패하였습니다. 다시 시도해주세요.", {
          icon: "😢",
          style: { background: "#f0f8ff" },
        });
      });
  };

  return (
    <div className="flex flex-col gap-5 w-7/12">
      <SubTitle className="text-center">or send me an email</SubTitle>
      <form
        onSubmit={onSubmit}
        className="flex h-full flex-col justify-evenly gap-5"
      >
        <div className="flex flex-col gap-5">
          <div className="grid gap-2 ">
            <label htmlFor="from" className="text-primary text-md">
              your email ? 👀
            </label>
            <input
              className="grow rounded border-2"
              type="text"
              id="from"
              name="from"
              required
              autoFocus
              value={form.from}
              onChange={onChange}
            />
          </div>
          <div className="grid gap-2 ">
            <label htmlFor="subject" className="text-primary text-md">
              subject
            </label>
            <input
              className="grow rounded border-2"
              type="text"
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={onChange}
            />
          </div>
          <div className="grid gap-2 ">
            <label htmlFor="message" className="text-primary text-md">
              message 📃
            </label>
            <textarea
              className="grow resize-none rounded border-2"
              rows={10}
              id="message"
              name="message"
              required
              value={form.message}
              onChange={onChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center gap-1 mx-auto h-10 w-32 rounded-md"
        >
          <h3>전송하기</h3>
          <Image src={airplaneIcon} alt="종이비행기아이콘" width={35} height={35}/>
        </button>
      </form>
    </div>
  );
}
