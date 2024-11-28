import HoverEffect from "../components/ui/card-hover-effect";
export default function Cards() {
  return (
    <div className="w-full mx-auto px-4 -mt-5 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Define Goals and Requirements",
    description:
      "We understand your website's purpose, target audience, and specific goals to create a tailored solution.",
    link: "#",
  },
  {
    title: "Research and Planning",
    description:
      "In-depth market research to understand your audience, competitors, and industry trends.",
    link: "#",
  },
  {
    title: "User Experience Design",
    description:
      "Creating intuitive and engaging user experiences through thoughtful design and prototyping.",
    link: "#",
  },
  {
    title: "Testing and Optimization",
    description:
      "Comprehensive testing across browsers and devices to ensure flawless performance.",
    link: "#",
  },
  {
    title: "Launch and Deployment",
    description:
      "Secure and efficient deployment with ongoing performance monitoring.",
    link: "#",
  },
  {
    title: "Maintenance and Updates",
    description:
      "Regular updates and maintenance to keep your website fresh and performing optimally.",
    link: "#",
  },
];
