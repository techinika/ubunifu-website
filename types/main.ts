export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isOurOwn: boolean;
  client?: string;
  summary: string;
  technologies: string[];
  duration: string;
  status: "Completed" | "Ongoing" | "Internal";
  type: "Software Development" | "Consulting" | "Project Design";
  link: string;
}
