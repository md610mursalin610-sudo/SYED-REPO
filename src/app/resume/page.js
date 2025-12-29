import Resume from "../../components/Resume/ResumeNew";

export const metadata = {
  title: "Resume",
  description: "Resume of Abu Syed — experience, skills, and featured projects.",
  alternates: {
    canonical: "/resume",
  },
};

export default function Page() {
  return <Resume />;
}
