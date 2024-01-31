import { forwardRef, HTMLAttributes, ForwardedRef } from "react";

type WrapProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const Wrap = forwardRef(({ className, children, id, ...rest }: WrapProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section id={id} ref={ref} className={`relative h-screen`} {...rest}>
      <div
        className={`flex gap-10 w-full ${className}`}
      >
        {children}
      </div>
    </section>
  );
});

Wrap.displayName = "Wrap";

export default Wrap;



