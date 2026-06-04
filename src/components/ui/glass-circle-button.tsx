import React from "react";
import { blurLevels } from "../../uikit/tokens";
import { cn } from "../../lib/utils";

interface GlassCircleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  blur?: "soft" | "medium" | "heavy";
  depth?: "flat" | "3D";
  size?: number;
  children?: React.ReactNode;
}

export const GlassCircleButton: React.FC<GlassCircleButtonProps> = ({
  blur = "medium",
  depth = "flat",
  size = 72,
  className,
  children,
  style,
  ...rest
}) => {
  const is3D = depth === "3D";
  return (
    <button
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-200",
        className
      )}
      style={{
        width: size,
        height: size,
        background: is3D
          ? "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.22), rgba(255,255,255,0.08) 70%, transparent)"
          : "rgba(255,255,255,0.18)",
        boxShadow: is3D
          ? "inset 0 0 40px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.15)"
          : "0 2px 12px rgba(0,0,0,0.08)",
        backdropFilter: blurLevels[blur],
        WebkitBackdropFilter: blurLevels[blur],
        ...style,
      }}
      {...rest}
    >
      {/* 高光伪元素 */}
      {is3D && (
        <span
          style={{
            position: "absolute",
            left: "18%",
            top: "12%",
            width: "48%",
            height: "32%",
            borderRadius: "50%",
            background:
              "linear-gradient(120deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0.08) 100%)",
            filter: "blur(2px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center text-2xl">{children}</span>
    </button>
  );
}; 