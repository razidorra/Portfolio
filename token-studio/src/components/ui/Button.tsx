interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  onClick?: () => void;
}

export default function Button({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base: React.CSSProperties = {
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "14px",
    border: "none",
    transition: "opacity 0.15s ease, transform 0.15s ease",
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: { ...base, background: "var(--color-primary)", color: "white" },
    secondary: {
      ...base,
      background: "var(--color-secondary)",
      color: "white",
    },
    danger: { ...base, background: "var(--color-danger)", color: "white" },
    outline: {
      ...base,
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)",
    },
    ghost: {
      ...base,
      background: "transparent",
      color: "var(--color-primary)",
    },
  };

  return (
    <button
      style={styles[variant]}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </button>
  );
}
