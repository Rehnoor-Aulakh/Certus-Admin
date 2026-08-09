export default function Spinner({
  size = "md",
  color = "border-t-blue-600",
  className = "",
}) {
  const sizes = {
    xs: "h-4 w-4 border-2",
    sm: "h-6 w-6 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-4",
    "2xl": "h-24 w-24 border-[6px]",
  };
  return (
    <div
      className={`animate-spin rounded-full border-gray-200 ${color} ${sizes[size] || sizes.md} border-solid ${className} `}
    />
  );
}
