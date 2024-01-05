'use client'

import useWatchTimeout from "@/lips/useWatchTimeout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


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
        console.log('form?', form);
     }

     return(
        <div className="">
            <h1 className="suit text-3xl text-center">contact</h1>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <div className="flex gap-8 relative">
                        <div className="absolute bottom-left-0 w-full h-0.5 bg-[#6a6a6a] inline-block after:content-[attr(style)"></div>
                        <label htmlFor="from" className="suit text-lg">your email</label>
                        <input
                            className="grow bg-[#f5f5f5]"
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
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6a6a6a] inline-block after:content-[attr(style)"></div>
                        <label htmlFor="subject" className="suit text-lg">subject</label>
                        <input
                            className="grow bg-[#f5f5f5]"
                            type="text" 
                            id="subject"
                            name="subject" 
                            required 
                            value={form.subject} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex gap-8 relative">
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6a6a6a] inline-block after:content-[attr(style)"></div>
                        <label htmlFor="message" className="suit text-lg">message</label>
                        <textarea
                            className="grow bg-[#f5f5f5]"
                            rows={10}
                            id="message" 
                            name="message" 
                            required 
                            value={form.message} 
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit">전송하기</button>
                </div>
            </form>
        </div>
    )
}