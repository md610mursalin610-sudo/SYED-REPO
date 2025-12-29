import About from "../../components/About/About";

export const metadata = {
  title: "About",
  description: "About Abu Syed — full-stack developer.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <About />;
}
