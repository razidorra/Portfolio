interface ColorPickerProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export default function ColorPicker({
  name,
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "10px",
      }}
    >
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          width: "28px",
          height: "28px",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      />
      <span style={{ fontSize: "12px", color: "#ccc", flex: 1 }}>{name}</span>
      <span
        style={{ fontSize: "11px", color: "#555", fontFamily: "monospace" }}
      >
        {value}
      </span>
    </div>
  );
}
