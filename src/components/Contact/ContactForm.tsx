'use client';
import useWatchTimeout from "@/lips/useWatchTimeout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {toast} from "react-hot-toast";

type Form ={
    from:string;
    subject:string;
    message:string;
}
export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        from:"",
        subject:"",
        message:""
    });
    
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name]: value}));
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast('전송에 성공하였습니다 !',{icon:"✨",style:{background:"#f0f8ff"}});
        console.log('form?', form);
     }

     return(
        <div className="flex flex-col gap-5">
            <h1 className="suit text-2xl text-center">Or Send me an email</h1>
            <form onSubmit={onSubmit} className="h-full flex flex-col gap-5 justify-evenly">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-8 relative">
                        <label htmlFor="from" className="suit text-lg">your email ? 👀</label>
                        <input
                            className="grow bg-[aliceblue]  border-[#f6f6f6] rounded"
                            type="text"
                            id="from" 
                            name="from" 
                            required 
                            autoFocus 
                            value={form.from} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex gap-8 relative">
                        <label htmlFor="subject" className="suit text-lg">subject</label>
                        <input
                            className="grow bg-[aliceblue] rounded"
                            type="text" 
                            id="subject"
                            name="subject" 
                            required 
                            value={form.subject} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex gap-8 relative">
                        <label htmlFor="message" className="suit text-lg">message 📃</label>
                        <textarea
                            className="grow bg-[aliceblue] rounded resize-none"
                            rows={10}
                            id="message" 
                            name="message" 
                            required 
                            value={form.message} 
                            onChange={onChange}
                        />
                    </div>
                </div>
                <button type="submit" className="suit bg-[aliceblue] mx-auto w-32 h-10 rounded-lg">전송하기</button>
            </form>
        </div>
    )
}