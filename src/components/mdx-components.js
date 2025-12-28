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
};
