export function Card({ children,className }) {
  return (
    <div className={`p-5 bg-white min-w-[25dvw] min-h-[25dvh] rounded-lg max-w-[75dvh] ${className}`}>
      {children}
    </div>
  );
}
