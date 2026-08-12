import type { ReactNode } from "react";

interface ScreenshotFrameProps {
  children: ReactNode;
  className?: string;
}

export default function ScreenshotFrame({ children, className = "" }: ScreenshotFrameProps) {
  return (
    <div className={`screenshot-frame ${className}`.trim()}>
      <div className="screenshot-frame__bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="screenshot-frame__viewport">{children}</div>
    </div>
  );
}
