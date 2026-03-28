import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modalOpen: boolean;
};
export default function ModalContainer({ children, modalOpen }: Props) {
  if (!modalOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 animate-scale-up">
          {children}
        </div>
      </div>
    </>
  );
}
