import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const mentors = [
  {
    id: "Pasan Devin Jayawardene",
    name: "Pasan Devin Jayawardene",
    role: "Software Engineer",
    category: "SE",
    organization: "AI/R&D (Insighture)",
    img: "https://avatar.vercel.sh/fiqri",
    social: {
      linkedin: "@fiqri_dev",
      twitter: "@fiqri_tech"
    }
  },
  {
    id: "Yasith Wimukthi",
    name: "Yasith Wimukthi",
    role: "Software Engineer",
    category: "SE",
    organization: "IFS",
    img: "https://avatar.vercel.sh/hansamali",
    social: {
      linkedin: "@hansamali_dev",
      twitter: "@hansamali_tech"
    }
  },
  {
    id: "Abishek Haththakage",
    name: "Abishek Haththakage",
    role: "Intern DevOps Engineer",
    category: "DevOps",
    organization: "Treinetic",
    img: "https://avatar.vercel.sh/nikila",
    social: {
      linkedin: "@nikila_dev",
      twitter: "@nikila_tech"
    }
  },
  {
    id: "Janeesha De Silva",
    name: "Janeesha De Silva",
    role: "Data Scientist",
    category: "Data Science",
    organization: "MAS",
    img: "https://avatar.vercel.sh/milinda",
    social: {
      linkedin: "@milinda_dev",
      twitter: "@milinda_tech"
    }
  },
  {
    id: "Shashitha Akalanka",
    name: "Shashitha Akalanka",
    role: "Senior Assistant",
    category: "UI/UX ",
    organization: "UI/UX (Nations Trust Bank PLC)",
    img: "https://avatar.vercel.sh/abishek",
    social: {
      linkedin: "@abishek_dev",
      twitter: "@abishek_tech"
    }
  },
  {
    id: "Sharmini Udayakumar",
    name: "Sharmini Udayakumar",
    role: "Project Coordinator",
    category: "QA & Testing",
    organization: "Codimite",
    img: "https://avatar.vercel.sh/sharmini",
    social: {
      linkedin: "@sharmini_dev",
      twitter: "@sharmini_tech"
    }
  },
];

const MentorCard = ({
  img,
  name,
  role,
  organization,
  category,
  social,
}: {
  img: string;
  name: string;
  role: string;
  organization: string;
  category: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}) => {
  return (
    <figure
      className={cn(
        "relative w-full max-w-[280px] cursor-pointer overflow-hidden rounded-xl border p-6",
        // Exact same styling as homepage feature cards
        "bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 group"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-20">
        <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 depth-1">
          {category}
        </Badge>
      </div>
      
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          className="w-16 h-16 rounded-full ring-3 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
          alt={`${name} avatar`}
          src={img}
        />
      </div>

      {/* Mentor Info */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {role}
        </p>
        <p className="text-xs text-muted-foreground">
          {organization}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <a
          href={`https://linkedin.com/in/${social.linkedin.replace('@', '')}`}
          className="text-muted-foreground hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={`https://twitter.com/${social.twitter.replace('@', '')}`}
          className="text-muted-foreground hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </figure>
  );
};

export function MentorProfiles() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
            Our Mentors
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
            Meet Our Expert Mentors
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn from industry professionals and experienced developers who guide our community across different specializations.
          </p>
        </div>

        {/* Centered Mentors Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}