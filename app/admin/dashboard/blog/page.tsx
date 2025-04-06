import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Eye, MoreHorizontal, Plus, Search, User } from "lucide-react"

// Simulated blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Azure for Students",
    excerpt: "Learn how to use Azure's free student resources to build and deploy your first cloud application.",
    date: "June 1, 2023",
    author: "Alexandra Chen",
    status: "Published",
    category: "Cloud",
    views: 245,
  },
  {
    id: 2,
    title: "How to Prepare for Microsoft Certifications",
    excerpt: "A comprehensive guide to preparing for and passing Microsoft certification exams as a student.",
    date: "May 25, 2023",
    author: "Marcus Johnson",
    status: "Published",
    category: "Career",
    views: 187,
  },
  {
    id: 3,
    title: "Building Your First Power App",
    excerpt: "Step-by-step tutorial on creating a simple but powerful app using Microsoft Power Apps.",
    date: "May 18, 2023",
    author: "Sophia Rodriguez",
    status: "Published",
    category: "Development",
    views: 156,
  },
  {
    id: 4,
    title: "Microsoft Graph API for Beginners",
    excerpt: "An introduction to Microsoft Graph API and how to use it in your applications.",
    date: "May 10, 2023",
    author: "David Kim",
    status: "Published",
    category: "Development",
    views: 102,
  },
  {
    id: 5,
    title: "Upcoming Features in Windows 11 for Developers",
    excerpt: "A look at the exciting new features coming to Windows 11 that developers should be aware of.",
    date: "",
    author: "Alexandra Chen",
    status: "Draft",
    category: "Development",
    views: 0,
  },
  {
    id: 6,
    title: "Microsoft Copilot: The Future of AI Assistance",
    excerpt: "Exploring the capabilities and potential of Microsoft's AI assistant technology.",
    date: "",
    author: "Marcus Johnson",
    status: "Draft",
    category: "AI",
    views: 0,
  },
]

export default function BlogPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Blog Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <Link href="/admin/dashboard/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>Manage your blog posts. Create, edit, or delete content.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search blog posts..." className="h-9" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="cloud">Cloud</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Post</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-md">{post.excerpt}</div>
                      {post.date && (
                        <div className="mt-1 flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      )}
                      <Badge className="mt-1">{post.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-muted-foreground" />
                        {post.author}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={post.status === "Published" ? "default" : "outline"}
                        className={post.status === "Published" ? "bg-green-600" : ""}
                      >
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {post.status === "Published" ? (
                        <div className="flex items-center justify-end">
                          <Eye className="mr-1 h-4 w-4 text-muted-foreground" />
                          {post.views}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/blog/${post.id}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/blog/${post.id}/edit`}>Edit Post</Link>
                          </DropdownMenuItem>
                          {post.status === "Draft" ? (
                            <DropdownMenuItem>Publish Post</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>Unpublish Post</DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">Delete Post</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

