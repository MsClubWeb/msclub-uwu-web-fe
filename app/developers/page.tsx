import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Globe, Mail, MapPin, Calendar, Users, Code, Database } from "lucide-react";

// Type definitions
interface Technology {
  name: string;
  category: string;
  description: string;
  icon: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  responsibilities: string[];
}

interface ProjectPhase {
  phase: string;
  period: string;
  status: "completed" | "in-progress" | "upcoming";
  description: string;
}

const technologies: Technology[] = [
  {
    name: "Next.js",
    category: "Frontend Framework",
    description: "React framework for production-grade applications with SSR and SSG capabilities",
    icon: "⚛️"
  },
  {
    name: "ShadCN UI",
    category: "UI Components",
    description: "Modern component library built on Tailwind CSS for consistent design",
    icon: "🎨"
  },
  {
    name: "Fluent UI",
    category: "Design System",
    description: "Microsoft's design system for creating cohesive user experiences",
    icon: "💼"
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    description: "JavaScript runtime for building scalable server-side applications",
    icon: "🟢"
  },
  {
    name: "Express.js",
    category: "Web Framework",
    description: "Fast and minimalist web framework for Node.js applications",
    icon: "🚀"
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Reliable relational database management system for data storage",
    icon: "🗄️"
  }
];

const teamMembers: TeamMember[] = [
  {
    id: "webmaster",
    name: "W.D.D Samudrika",
    role: "Webmaster & Lead Developer",
    email: "dharani.withanachchi@gmail.com",
    avatar: "https://avatar.vercel.sh/samudrika",
    responsibilities: [
      "Project Architecture & Planning",
      "Full-Stack Development",
      "Database Design & Management",
      "Deployment & Maintenance"
    ]
  },
  {
    id: "approver",
    name: "A. A Haththakage",
    role: "Project Supervisor",
    email: "supervisor@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/supervisor",
    responsibilities: [
      "Project Oversight",
      "Requirement Validation",
      "Quality Assurance",
      "Stakeholder Communication"
    ]
  },
  {
    id: "frontend-dev",
    name: "Nipuni Malshika",
    role: "Frontend Developer",
    email: "nipuni.malshika@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/nipuni",
    responsibilities: [
      "React Component Development",
      "UI/UX Implementation",
      "ShadCN UI Integration",
      "Responsive Design"
    ]
  },
  {
    id: "backend-dev",
    name: "Chamod Jayasekara",
    role: "Backend Developer",
    email: "chamod.jayasekara@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/chamod",
    responsibilities: [
      "Express.js API Development",
      "Database Schema Design",
      "Authentication Systems",
      "Server Configuration"
    ]
  },
  {
    id: "ui-designer",
    name: "Thilini Perera",
    role: "UI/UX Designer",
    email: "thilini.perera@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/thilini",
    responsibilities: [
      "Design System Creation",
      "User Interface Design",
      "Fluent UI Implementation",
      "User Experience Optimization"
    ]
  },
  {
    id: "content-manager",
    name: "Sandun Wickramasinghe",
    role: "Content Manager",
    email: "sandun.wickrama@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/sandun",
    responsibilities: [
      "Content Strategy",
      "Blog Content Creation",
      "Event Documentation",
      "SEO Optimization"
    ]
  },
  {
    id: "qa-tester",
    name: "Ishara Rathnayake",
    role: "QA Tester",
    email: "ishara.rathnayake@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/ishara",
    responsibilities: [
      "Manual Testing",
      "Bug Reporting",
      "Performance Testing",
      "Cross-browser Testing"
    ]
  },
  {
    id: "devops-engineer",
    name: "Lakmal Seneviratne",
    role: "DevOps Engineer",
    email: "lakmal.seneviratne@msclub.uwu.ac.lk",
    avatar: "https://avatar.vercel.sh/lakmal",
    responsibilities: [
      "CI/CD Pipeline Setup",
      "Cloud Deployment",
      "Server Monitoring",
      "Database Administration"
    ]
  }
];

const projectPhases: ProjectPhase[] = [
  {
    phase: "Requirement Analysis",
    period: "March 2025",
    status: "completed",
    description: "Gathering and documenting system requirements and user needs"
  },
  {
    phase: "Design & Prototyping",
    period: "March 2025",
    status: "completed",
    description: "Creating UI/UX designs and system architecture blueprints"
  },
  {
    phase: "Development",
    period: "April 2025",
    status: "in-progress",
    description: "Building frontend and backend components using specified technologies"
  },
  {
    phase: "Testing & Deployment",
    period: "April 2025",
    status: "upcoming",
    description: "Quality assurance, testing, and production deployment"
  }
];

const TechnologyCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  return (
    <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{tech.icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
              {tech.name}
            </h3>
            <Badge variant="secondary" className="text-xs mb-2">
              {tech.category}
            </Badge>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {tech.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <img
            src={member.avatar}
            alt={`${member.name} avatar`}
            className="w-16 h-16 rounded-full ring-3 ring-blue-200 dark:ring-blue-700 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-1 truncate">
              {member.name}
            </CardTitle>
            <CardDescription className="text-blue-600 dark:text-blue-400 font-medium mb-2">
              {member.role}
            </CardDescription>
            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="break-all text-xs leading-4">{member.email}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities</h4>
        <ul className="space-y-2">
          {member.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
              <span className="leading-5">{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const PhaseCard: React.FC<{ phase: ProjectPhase }> = ({ phase }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "in-progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "upcoming": return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {phase.phase}
          </h3>
          <Badge className={`${getStatusColor(phase.status)} border-none`}>
            {phase.status.replace("-", " ")}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
          <Calendar className="w-4 h-4" />
          {phase.period}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {phase.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              MS Club Website Development
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
              Development Team & Technologies
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Meet the team behind the MS Club at Uva Wellassa University website and explore 
              the modern technologies used to create a responsive and engaging platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Project Timeline
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="w-full py-12 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-blue-600">6</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Technologies Used</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-blue-600">8</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-blue-600">2</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Months Timeline</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-blue-600">5</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Core Features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900 dark:text-white">
              Technology Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Modern web technologies chosen for performance, scalability, and maintainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 bg-white/40 dark:bg-gray-800/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900 dark:text-white">
              Development Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The dedicated professionals bringing the MS Club website to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900 dark:text-white">
              Project Timeline
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Development phases from conception to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projectPhases.map((phase) => (
              <PhaseCard key={phase.phase} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Core Website Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Home & About</h3>
                <p className="text-blue-100">Club introduction, mission, and contact information</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Events Management</h3>
                <p className="text-blue-100">Upcoming events, registration, and event details</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Board Members</h3>
                <p className="text-blue-100">Team profiles, roles, and social media links</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Have questions about the development process or want to contribute? 
              Contact our development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact Webmaster
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}