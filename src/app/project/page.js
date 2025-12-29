import Projects from "../../components/Projects/Projects";

export const metadata = {
  title: "Projects",
  description: "Projects built by Abu Syed — web apps, UI, and full-stack work.",
  alternates: {
    canonical: "/project",
  },
};

export default function Page() {
  return <Projects />;
}
