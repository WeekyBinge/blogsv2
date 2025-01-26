// src/components/ui/card.tsx
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl p-4 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
};


// import React from "react";
//
// export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="bg-white shadow-md rounded-2xl p-6">
//     {children}
//   </div>
// );
//
// export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="text-gray-700">{children}</div>
// );
