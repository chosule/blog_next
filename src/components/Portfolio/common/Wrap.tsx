import { forwardRef, HTMLAttributes, ForwardedRef } from "react";

type WrapProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const Wrap = forwardRef(({ className, children, id, ...rest }: WrapProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section id={id} ref={ref} className={`relative h-screen flex items-center justify-center my-14 md:my-0 `} {...rest}>
      <div
        className={`flex gap-8 ${className}`}
      >
        {children}
      </div>
    </section>
  );
});

Wrap.displayName = "Wrap";

export default Wrap;



