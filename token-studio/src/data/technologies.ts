import type { IconType } from "react-icons";
import {
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiWordpress,
} from "react-icons/si";

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export const technologies: Technology[] = [
  { name: "Git", icon: SiGit, color: "#F05033" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "WordPress", icon: SiWordpress, color: "#21A0D8" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
];
