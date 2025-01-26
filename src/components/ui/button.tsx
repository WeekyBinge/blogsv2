// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean; // Allows rendering as a custom element (like <a>)
}

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild = false,
  className,
  ...props
}) => {
  const Component = asChild ? "span" : "button";

  return (
    <Component
      className={`bg-blue-500 text-white font-medium py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
};



