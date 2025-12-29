const Highlight = ({ children }) => (
  <span
    style={{
      background: "#fff3cd",
      padding: "0.2rem 0.4rem",
      borderRadius: "6px",
      color: "#271c02",
      fontWeight: 600,
    }}
  >
    {children}
  </span>
);

const Callout = ({ title, children }) => (
  <div
    style={{
      borderLeft: "4px solid #6366f1",
      background: "rgba(99, 102, 241, 0.08)",
      padding: "1rem 1.25rem",
      margin: "2rem 0",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    }}
  >
    {title ? (
      <strong style={{ display: "block", marginBottom: "0.4rem" }}>{title}</strong>
    ) : null}
    <div>{children}</div>
  </div>
);

export const mdxComponents = {
  img: (props) => (
    <img
      {...props}
      style={{
        maxWidth: "100%",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    />
  ),
  Highlight,
  Callout,
};
