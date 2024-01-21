export default function IconButton({
  className,
  type = "button",
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      aria-label="icon-button"
      {...props}
      onClick={onClick}
      type={type}
      className={`text-secondary flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-neutral-80 ${className}`}
    />
  );
}
