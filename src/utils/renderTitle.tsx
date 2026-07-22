import type { ReactNode } from "react";

export function renderTitle(title: string): ReactNode[] {
  const parts = title.split("&");

  return parts.flatMap((part, index) =>
    index === 0
      ? [part]
      : [
          <span key={index} className="font-plus-jakarta-sans font-extrabold">
            &
          </span>,
          part,
        ],
  );
}