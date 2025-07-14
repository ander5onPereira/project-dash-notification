export function Svg({
  icon: Icon,
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) {
  return (
    <Icon
      width={size}
      height={size}
      fill={color}
      className={`inline-block ${className}`}
      {...props}
    />
  );
}
