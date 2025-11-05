import { Code, Globe, Shield, Users, Zap } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  background?: string;
  textColor?: string;
  icon?: boolean;
}
export function Feature({
  title,
  description,
  background = "bg-white",
  textColor = "text-black",
  icon,
}: FeatureProps) {
  // // Determine the icon based on title
  // let IconComponent = CheckCircle;
  // const titleLower = title.toLowerCase();

  // if (titleLower.includes("experience")) {
  //   IconComponent = FeatureIcons.experience;
  // } else if (titleLower.includes("employees")) {
  //   IconComponent = FeatureIcons.employees;
  // } else if (titleLower.includes("research")) {
  //   IconComponent = FeatureIcons.research;
  // } else if (titleLower.includes("quality")) {
  //   IconComponent = FeatureIcons.quality;
  // } else if (titleLower.includes("supply")) {
  //   IconComponent = FeatureIcons.supply;
  // } else if (titleLower.includes("innovation")) {
  //   IconComponent = FeatureIcons.innovation;
  // }

  return (
    <div
      className={`flex-1 p-10 ${background} ${textColor} border border-gray-200`}
    >
      <div className="flex flex-col h-full">
        <div className="w-14 h-14 mb-6 bg-yellow-400 flex items-center justify-center">
          {/* <IconComponent className="w-8 h-8 text-black" /> */}
        </div>

        <h3 className="text-2xl font-medium mb-4">{title}</h3>
        <p className="text-lg leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
}
