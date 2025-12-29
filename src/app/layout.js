import "bootstrap/dist/css/bootstrap.min.css";
import "katex/dist/katex.min.css";
import "../style.css";
import "../App.css";
import "../index.css";

import RootShell from "../components/RootShell";

export const metadata = {
  title: "Abu Syed | Portfolio",
  description: "Developer portfolio of Abu Syed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
