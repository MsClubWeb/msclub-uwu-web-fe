import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowLeft, ChevronRight, BookOpen, MessageSquare, ThumbsUp } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { BlogSEO, generateBlogMetadata } from "@/components/blog-seo"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

// Mock blog post data - in a real app, this would come from a database
const getBlogPostById = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Getting Started with Azure for Students",
    excerpt: "Learn how to use Azure's free student resources to build and deploy your first cloud application.",
    content: `
      <p>Microsoft Azure is a powerful cloud computing platform that offers a wide range of services for building, deploying, and managing applications. As a student, you have access to Azure for free through the Azure for Students program, which provides $100 in credit and free access to many popular services.</p>
      
      <h2>Setting Up Your Azure Student Account</h2>
      
      <p>To get started with Azure for Students, you'll need to:</p>
      
      <ol>
        <li>Visit the <a href="https://azure.microsoft.com/free/students/" target="_blank" rel="noopener noreferrer">Azure for Students</a> page</li>
        <li>Sign up with your school email address</li>
        <li>Verify your academic status</li>
        <li>Set up your Azure account</li>
      </ol>
      
      <p>Once you've set up your account, you'll have access to a wide range of Azure services, including virtual machines, web apps, databases, and more.</p>
      
      <h2>Your First Azure Web App</h2>
      
      <p>Let's create a simple web application and deploy it to Azure. We'll use Azure App Service, which is a fully managed platform for building, deploying, and scaling web apps.</p>
      
      <h3>Step 1: Create a Web App</h3>
      
      <p>In the Azure portal, click on "Create a resource" and search for "Web App". Follow the prompts to create a new web app, selecting your preferred runtime stack (e.g., .NET, Node.js, Python).</p>
      
      <h3>Step 2: Deploy Your Code</h3>
      
      <p>You can deploy your code to Azure App Service in several ways:</p>
      
      <ul>
        <li>Using Visual Studio or Visual Studio Code</li>
        <li>Using Azure DevOps</li>
        <li>Using GitHub Actions</li>
        <li>Using the Azure CLI</li>
      </ul>
      
      <p>For this example, we'll use GitHub Actions. Create a new GitHub repository for your web app, and add a GitHub Actions workflow file to deploy your code to Azure App Service.</p>
      
      <h3>Step 3: Configure Your App</h3>
      
      <p>In the Azure portal, you can configure various settings for your web app, including:</p>
      
      <ul>
        <li>Application settings (environment variables)</li>
        <li>Custom domains</li>
        <li>SSL certificates</li>
        <li>Scaling options</li>
      </ul>
      
      <h2>Next Steps</h2>
      
      <p>Now that you've deployed your first web app to Azure, you can explore other Azure services, such as:</p>
      
      <ul>
        <li>Azure SQL Database for relational data</li>
        <li>Azure Cosmos DB for NoSQL data</li>
        <li>Azure Functions for serverless computing</li>
        <li>Azure Cognitive Services for AI capabilities</li>
      </ul>
      
      <p>The Azure for Students program gives you plenty of credit to experiment with these services and build your skills in cloud computing.</p>
      
      <h2>Conclusion</h2>
      
      <p>Azure for Students is a great way to get hands-on experience with cloud computing and build your skills for future career opportunities. By following the steps in this guide, you've taken your first steps into the world of cloud computing with Azure.</p>
    `,
    date: "June 1, 2023",
    author: "Alexandra Chen",
    authorRole: "Cloud Technologies Lead",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Cloud",
    tags: ["Azure", "Cloud Computing", "Student Resources", "Web Development"],
    relatedPosts: [2, 3, 4],
  }
}

// Mock related posts data
const getRelatedPosts = (ids: number[]) => {
  return [
    {
      id: 2,
      title: "How to Prepare for Microsoft Certifications",
      excerpt: "A comprehensive guide to preparing for and passing Microsoft certification exams as a student.",
      date: "May 25, 2023",
      author: "Marcus Johnson",
      image: "/placeholder.svg?height=300&width=500",
      category: "Career",
    },
    {
      id: 3,
      title: "Building Your First Power App",
      excerpt: "Step-by-step tutorial on creating a simple but powerful app using Microsoft Power Apps.",
      date: "May 18, 2023",
      author: "Sophia Rodriguez",
      image: "/placeholder.svg?height=300&width=500",
      category: "Development",
    },
    {
      id: 4,
      title: "Microsoft Graph API for Beginners",
      excerpt: "An introduction to Microsoft Graph API and how to use it in your applications.",
      date: "May 10, 2023",
      author: "David Kim",
      image: "/placeholder.svg?height=300&width=500",
      category: "Development",
    },
  ]
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPostById(params.id)
  return generateBlogMetadata(post)
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id)
  const relatedPosts = getRelatedPosts(post.relatedPosts)

  return (
    <>
      <BlogSEO post={post} />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${params.id}`, isCurrent: true },
              ]}
            />

            <div className="mt-6">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">{post.category}</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">{post.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80 mt-8">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-xs text-white/70">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-4 reveal motion-scale">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Featured image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl my-8 depth-3 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Post content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <article className="prose prose-blue max-w-none bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 depth-2 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="reveal bg-white/50 dark:bg-black/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share and Engagement */}
              <div className="mt-8 flex flex-wrap justify-between items-center gap-4 p-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl depth-2 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 reveal motion-scale bg-white/50 dark:bg-black/30"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                    <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">24</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 reveal motion-scale bg-white/50 dark:bg-black/30"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Comment</span>
                    <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">8</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 reveal motion-scale bg-white/50 dark:bg-black/30"
                  >
                    <span className="sr-only">Share on Facebook</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 reveal motion-scale bg-white/50 dark:bg-black/30"
                  >
                    <span className="sr-only">Share on Twitter</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 reveal motion-scale bg-white/50 dark:bg-black/30"
                  >
                    <span className="sr-only">Share on LinkedIn</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl depth-2 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden depth-1">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-center sm:text-left">{post.author}</h3>
                    <p className="text-sm text-blue-600 mb-3 text-center sm:text-left">{post.authorRole}</p>
                    <p className="text-muted-foreground">
                      Alexandra is a cloud technologies expert and Microsoft Certified Azure Solutions Architect. She
                      has been working with Azure for over 5 years and loves teaching students how to leverage cloud
                      technologies for their projects and career growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Table of Contents */}
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 depth-2 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5 sticky top-24">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  <a
                    href="#setting-up-your-azure-student-account"
                    className="block py-1 text-sm hover:text-blue-600 transition-colors"
                  >
                    Setting Up Your Azure Student Account
                  </a>
                  <a
                    href="#your-first-azure-web-app"
                    className="block py-1 text-sm hover:text-blue-600 transition-colors"
                  >
                    Your First Azure Web App
                  </a>
                  <div className="pl-4 space-y-1">
                    <a
                      href="#step-1-create-a-web-app"
                      className="block py-1 text-xs hover:text-blue-600 transition-colors"
                    >
                      Step 1: Create a Web App
                    </a>
                    <a
                      href="#step-2-deploy-your-code"
                      className="block py-1 text-xs hover:text-blue-600 transition-colors"
                    >
                      Step 2: Deploy Your Code
                    </a>
                    <a
                      href="#step-3-configure-your-app"
                      className="block py-1 text-xs hover:text-blue-600 transition-colors"
                    >
                      Step 3: Configure Your App
                    </a>
                  </div>
                  <a href="#next-steps" className="block py-1 text-sm hover:text-blue-600 transition-colors">
                    Next Steps
                  </a>
                  <a href="#conclusion" className="block py-1 text-sm hover:text-blue-600 transition-colors">
                    Conclusion
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Card
                  key={relatedPost.id}
                  className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">{relatedPost.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{relatedPost.date}</span>
                      <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-blue-600" asChild>
                        <Link href={`/blog/${relatedPost.id}`} className="flex items-center">
                          Read
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 sm:p-12 depth-3 border border-white/20 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-6">Subscribe</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Enjoyed this article?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get more tutorials, insights, and updates on Microsoft technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 px-4 rounded-md border border-input bg-white/50 dark:bg-black/20 reveal flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 h-12 reveal motion-scale">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

