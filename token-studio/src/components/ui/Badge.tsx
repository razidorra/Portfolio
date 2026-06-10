interface BadgeProps {
  label: string;
  color: string;
}

export default function Badge({ label, color }: BadgeProps) {
  return (
    <span
      style={{
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: 500,
        background: color + "22",
        color: color,
        border: `1px solid ${color}44`,
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}
