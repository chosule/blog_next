'use client';
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

     const [currentStep, setCurrentStep] = useState<number>(0);
     const [watch , setWatch] = useState<boolean>(false);
     const [stepText, setStepText] = useState<string>(""); // 각 단계별로 나타낼 텍스트

     const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({...prev, [name]: value}));
     }

     const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form?', form);
        // 여기에서 서버에 폼 데이터 전송 등의 로직을 추가할 수 있습니다.
     }

     const onNextClick = () => {
         setCurrentStep((prev) => prev + 1);
        if(currentStep === 0){
            setStepText("test");
            setWatch(true);
        }
         if (currentStep === 1) {
            setStepText("Text for step 1");
        } else if (currentStep === 2) {
            setStepText("Text for step 2");
        }
     }
     

     return(
        <form onSubmit={onSubmit} className="bg-[url('/image/iphone.png')] w-[600px] h-[600px] bg-contain bg-no-repeat absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]">
            {stepText && <p>{stepText}</p>}
            <div className="flex flex-col">
                {currentStep === 0 &&(
                    <div>dd</div>
                )}
                {currentStep === 1 && (
                    <>
                        <label htmlFor="from">your email :</label>
                        <input
                            className="bg-orange-400"
                            type="text"
                            id="from" 
                            name="from" 
                            required 
                            autoFocus 
                            value={form.from} 
                            onChange={onChange}
                        />
                        <button type="button" onClick={onNextClick}>Next</button>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <label htmlFor="subject">subject</label>
                        <input
                            className="bg-orange-400"
                            type="text" 
                            id="subject"
                            name="subject" 
                            required 
                            value={form.subject} 
                            onChange={onChange}
                        />
                        <button type="button" onClick={onNextClick}>Next</button>
                    </>
                )}
                {/* 나머지 폼 입력 항목들도 동일한 방식으로 추가 가능 */}
                {currentStep === 3 && (
                    <>
                        <label htmlFor="message">message</label>
                        <textarea
                            className="bg-orange-400"
                            rows={10}
                            id="message" 
                            name="message" 
                            required 
                            value={form.message} 
                            onChange={onChange}
                        />
                        <button type="submit">Submit</button>
                    </>
                )}

            </div>
        </form>
     )
}