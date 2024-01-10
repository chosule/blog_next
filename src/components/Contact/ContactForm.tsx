"use client";
import useWatchTimeout from "@/lips/useWatchTimeout";
import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

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
      <h1 className="suit text-center text-2xl">Or Send me an email</h1>
      <form
        onSubmit={onSubmit}
        className="flex h-full flex-col justify-evenly gap-5"
      >
        <div className="flex flex-col gap-5">
          <div className="relative flex gap-8">
            <label htmlFor="from" className="suit text-lg">
              your email ? 👀
            </label>
            <input
              className="grow rounded  border-[#f6f6f6] bg-[aliceblue]"
              type="text"
              id="from"
              name="from"
              required
              autoFocus
              value={form.from}
              onChange={onChange}
            />
          </div>
          <div className="relative flex gap-8">
            <label htmlFor="subject" className="suit text-lg">
              subject
            </label>
            <input
              className="grow rounded bg-[aliceblue]"
              type="text"
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={onChange}
            />
          </div>
          <div className="relative flex gap-8">
            <label htmlFor="message" className="suit text-lg">
              message 📃
            </label>
            <textarea
              className="grow resize-none rounded bg-[aliceblue]"
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
          className="suit mx-auto h-10 w-32 rounded-lg bg-[aliceblue]"
        >
          전송하기
        </button>
      </form>
    </div>
  );
}
