import React from "react";
import Link from 'next/link';

type Props = {
  // to can be undefined when callers pass optional values (e.g. findChef?.videolink)
  to?: string | undefined;
  children: React.ReactNode;
};

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonCommon(props: Props) {
  if (!props.to) {
    // render a non-link fallback when `to` is not provided
    return (
      <div className="text-btn">
        <span className="hover:bg-[var(--brand-error)]/80 !text-white w-auto left-0 rounded-none bg-[var(--brand-error)] px-9 py-[18px] outline-none cursor-pointer inline-block text-[18px] border-none uppercase transition-all duration-300 border-transparent">{props.children}</span>
      </div>
    );
  }

  return (
    <div className="text-btn">
      <Link href={props.to} className="hover:bg-[var(--brand-error)]/80 !text-white w-auto left-0 rounded-none bg-[var(--brand-error)] px-9 py-[18px] outline-none cursor-pointer inline-block text-[18px] border-none uppercase transition-all duration-300 border-transparent">
        {props.children}
      </Link>
    </div>
  );
}

export function WhiteButton(props: Props) {
  if (!props.to) {
    return <div className="hover:bg-[var(--brand-error)]/80 !text-white w-auto left-0 rounded-none bg-[var(--brand-error)] px-9 py-[18px] outline-none cursor-pointer inline-block text-[18px] border-none uppercase transition-all duration-300 border-transparent">{props.children}</div>;
  }

  return (
    <div className="hover:bg-[var(--brand-error)]/80 !text-white w-auto left-0 rounded-none bg-[var(--brand-error)] px-9 py-[18px] outline-none cursor-pointer inline-block text-[18px] border-none uppercase transition-all duration-300 border-transparent">
      <Link href={props.to}>{props.children}</Link>
    </div>
  );
}

export function SubmitButton({ children, className = "" }: SubmitButtonProps) {
  return (
    <div>
      <button
        type="submit"
        className={`hover:bg-[var(--brand-error)]/80 !text-white w-auto left-0 rounded-none bg-[var(--brand-error)] px-9 py-[18px] outline-none cursor-pointer inline-block text-[18px] border-none uppercase transition-all duration-300 border-transparent ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
