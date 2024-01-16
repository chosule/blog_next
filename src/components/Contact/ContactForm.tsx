"use client";
import useWatchTimeout from "@/lips/useWatchTimeout";
import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import SubTitle from "../SubTitle";

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
        <div className="flex flex-col gap-5">
            <SubTitle className="text-center suit">Or send me an emai</SubTitle>
            <form
                onSubmit={onSubmit}
                className="flex h-full flex-col justify-evenly gap-5"
            >
                <div className="flex flex-col gap-5">
                <div className="grid md:grid-cols-[140px_1fr] gap-5">
                    <label htmlFor="from" className="suit text-lg text-primary">
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
                <div className="grid md:grid-cols-[140px_1fr] gap-5">
                    <label htmlFor="subject" className="suit text-lg text-primary">
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
                <div className="grid md:grid-cols-[140px_1fr] gap-5">
                    <label htmlFor="message" className="suit text-lg text-primary">
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
                className="suit mx-auto h-10 w-32 rounded-lg bg-secondary"
                >
                전송하기
                </button>
            </form>
        </div>
  );
}