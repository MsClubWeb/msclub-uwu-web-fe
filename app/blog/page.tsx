import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ChevronRight, BookOpen,Brain,Dot,Blocks,ActivitySquare,Github, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | MS Club UWU",
  description:
    "Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/blog",
  },
  openGraph: {
    title: "Blog | MS Club UWU",
    description:
      "Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.",
    url: "https://msclub-uwu.netlify.app/blog",
    type: "website",
  },
}

// Simulated blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introduction to Azure Fundamentals: A Beginner’s Guide",
    excerpt: "Imagine you need to run a powerful application, but your personal computer isn’t strong enough. Instead of buying expensive hardware, you can use cloud computing—where a company like Microsoft provides the necessary resources over the internet. Cloud computing allows businesses and individuals to access computing power, storage, and applications on demand, without the need for physical infrastructure.",
    date: "June 1, 2023",
    author: "Vihini Ranasingha",
    readTime: "5 min read",
    image: "/articles/article1new.jpg?height=500&width=250",
    category: "Cloud",
    mediumLink: "https://medium.com/@rvihini/introduction-to-azure-fundamentals-a-beginners-guide-6cf86486d29f",
  },
  {
    id: 2,
    title: "CI/CD Pipeline for Web App Deployment with Docker, Azure DevOps, and Azure Container Registry",
    excerpt: "Are you looking to deploy your Projects to Azure? With Azure DevOps, you can automate your app’s build and deployment processes with continuous integration (CI) and continuous deployment (CD). This guide will walk you through the steps to set up CI/CD pipelines for both the frontend and backend of your project. Let’s dive in!",
    date: "May 25, 2023",
    author: "Abishek Haththakage",
    readTime: "8 min read",
    image: "/articles/article2new.jpg?height=500&width=250",
    category: "Career",
    mediumLink: "https://medium.com/@abhixsh__/ci-cd-pipeline-for-web-app-deployment-with-docker-azure-devops-and-azure-container-registry-fd385042b755",
  },
  {
    id: 3,
    title: "Creating Your First Azure Virtual Machine: A Beginner’s Guide",
    excerpt: "In this article, I’ll walk you through creating an Azure Virtual Machine (VM) from scratch. Not only will you learn how to set up your VM, also, you’ll discover how to host a simple static web frontend such as a React web app from your GitHub repository on your newly created cloud virtual machine.",
    date: "May 18, 2023",
    author: "Theekshana Nirmal",
    readTime: "10 min read",
    image: "/articles/article3new.jpg?height=500&width=250",
    category: "Development",
    mediumLink: "https://theek.medium.com/creating-your-first-azure-virtual-machine-a-beginners-guide-3777540baeaa",
  },
  {
    id: 4,
    title: "A Beginner’s Guide: Deploying Your First Static Web Site using Azure App Services",
    excerpt: "Are you want to share your newly built static website (like a simple frontend) with the world? Azure App Service simplifies the deployment process, making it accessible even for those new to cloud platforms. In this article, I’ll guide you through the step-by-step process of deploying your site from a GitHub repository to Azure Static Web Apps. Let’s get started!",
    date: "May 10, 2023",
    author: "Theekshana Nirmal",
    readTime: "7 min read",
    image: "/articles/article4new.jpg?height=500&width=250",
    category: "Development",
    mediumLink: "https://theek.medium.com/a-beginners-guide-deploying-your-first-static-web-site-using-azure-app-services-400b303fd511",
  },
  {
    id: 5,
    title: "How to Create a Bastion Host for Secure Access to Private AWS Servers",
    excerpt: "A Bastion Host (also known as a Jump Host) is a special server used to securely access other computers or servers in a private network. It acts as a gateway to your internal resources, allowing only trusted users to enter the network.",
    date: "May 5, 2023",
    author: "Abishek Haththakage",
    readTime: "4 min read",
    image: "/articles/article5new.jpg?height=500&width=250",
    category: "Events",
    mediumLink: "https://medium.com/@abhixsh__/how-to-create-a-bastion-host-for-secure-access-to-private-aws-servers-b2e689c97f99",
  },
  {
    id: 6,
    title: "Provision an Azure Virtual Machine Using Terraform with Remote State and GitHub Actions",
    excerpt: "In this guide, I’ll show you how I used Terraform to create a Virtual Machine (VM) in Microsoft Azure, store the state remotely in Azure Storage, and automate the whole process using GitHub Actions.",
    date: "April 28, 2023",
    author: "Abishek Haththakage",
    readTime: "6 min read",
    image: "/articles/article6new.jpg?height=100&width=100",
    category: "AI",
    mediumLink: "https://medium.com/@abhixsh__/provision-an-azure-virtual-machine-using-terraform-with-remote-state-and-github-actions-41d80e042fa3",
  },
]

// Featured post
const featuredPost = {
  id: 7,
  title: "A Beginner’s Guide: Deploying Your First Static Web Site using Azure App Services",
  excerpt: "Exploring how Microsoft's latest innovations are transforming the educational landscape and preparing students for the workforce of tomorrow.",
  date: "June 5, 2023",
  author: "Theekshana Nirmal",
  readTime: "12 min read",
  image: "/articles/art7.png?height=1200&width=600",
  category: "Education",
  mediumLink: "https://theek.medium.com/a-beginners-guide-deploying-your-first-static-web-site-using-azure-app-services-400b303fd511",

}

export default function BlogPage() {
  return (
    <>
      <WebPageSchema
        title="Blog | MS Club UWU"
        description="Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities."
        url="https://msclub-uwu.netlify.app/blog"
      />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0078D4] to-[#005A9E] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">Our Blog</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">Insights & Tutorials</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl depth-2 border border-white/20 dark:border-white/5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 reveal h-11 bg-white/50 dark:bg-black/20"
                  />
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[160px] reveal h-11 bg-white/50 dark:bg-black/20">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="acrylic depth-2">
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="career">Career Growth</SelectItem>
                      <SelectItem value="ai">Azure AI & ML</SelectItem>
                      <SelectItem value="net">.NET</SelectItem>
                      <SelectItem value="fabric">Microsoft Fabric</SelectItem>
                      <SelectItem value="power">Power Platform</SelectItem>
                      <SelectItem value="github">GitHub</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-600 hover:bg-blue-700 reveal motion-scale h-11">Filter</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="space-y-16">
          {/* Featured Post */}
          <div className="relative rounded-xl overflow-hidden depth-3 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
            <Link
              href={featuredPost.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-[500px] w-full group"
            >
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                <Badge className="mb-6 bg-blue-600 hover:bg-blue-700">{featuredPost.category}</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 motion-fade">{featuredPost.title}</h2>
                <p className="text-white/80 mb-6 max-w-3xl text-lg motion-fade">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70 mb-8">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="inline-flex items-center text-blue-100 hover:text-white font-medium transition">
                  Read Article <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>


          {/* Latest Articles */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Latest Articles</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Fresh Insights</h2>
              </div>
              <Button variant="outline" className="reveal motion-scale group" asChild>
                <Link href="/blog/archive" className="flex items-center">
                  View All Articles
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
            {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link 
                href={post.mediumLink || `/blog/${post.id}`} 
                target={post.mediumLink ? "_blank" : "_self"}
                className="block"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">{post.category}</Badge>
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link 
                  href={post.mediumLink || `/blog/${post.id}`} 
                  target={post.mediumLink ? "_blank" : "_self"}
                  className="block group-hover:text-blue-600 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm">
                    <User className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{post.author}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto justify-start hover:bg-transparent text-blue-600 font-medium"
                    asChild
                  >
                    <Link 
                      href={post.mediumLink || `/blog/${post.id}`} 
                      className="flex items-center" 
                      target={post.mediumLink ? "_blank" : "_self"}
                    >
                      <span>Read more</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
            </div>
          </div>

          {/* Categories Section */}
          <section className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background rounded-xl">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Browse By Topic</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Explore Categories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dive into our content organized by topics to find exactly what you're looking for.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Cloud Computing", icon: <CloudIcon className="h-6 w-6" />, count: 12 },
                  { name: "Development", icon: <CodeIcon className="h-6 w-6" />, count: 18 },
                  { name: "Career Growth", icon: <GraduationIcon className="h-6 w-6" />, count: 8 },
                  { name: "Azure AI & ML", icon: <BrainIcon className="h-6 w-6" />, count: 10 },
                  { name: ".NET", icon: <Dot className="h-6 w-6" />, count: 15 },
                  { name: "Microsoft Fabric", icon: <Blocks className="h-6 w-6" />, count: 7 },
                  { name: "Power Platform", icon: <ActivitySquare className="h-6 w-6" />, count: 7 },
                  { name: "GitHub", icon: <Github className="h-6 w-6" />, count: 7 },
                ].map((category, index) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group"
                  >
                    <Card
                      className="h-full depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.count} articles</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))
                
                }
              </div>
            </div>
          </section>

          {/* Newsletter Section [temporary commented] */}

          {/*
          <section className="relative overflow-hidden rounded-xl depth-3">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 p-8 sm:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Stay Updated</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, tutorials, and event updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 reveal"
                  />
                  <Button variant="fluent" size="lg" className="depth-2 motion-scale">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-blue-100/80 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </section>
          */}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

// Helper components for icons
function CloudIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function CodeIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function GraduationIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BrainIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
    </svg>
  )
}

function CalendarIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

