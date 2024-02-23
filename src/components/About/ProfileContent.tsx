import { ReactElement } from "react";

type Props = {
  children: React.ReactNode;
};
export default function ProfileContent({ children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="border" />
      {children}
      <div className="border" />
    </div>
  );
}
