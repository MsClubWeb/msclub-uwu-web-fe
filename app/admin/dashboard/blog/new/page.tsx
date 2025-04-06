import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlus } from "lucide-react"

export default function NewBlogPostPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Create New Blog Post</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Post Details</CardTitle>
          <CardDescription>Fill in the details below to create a new blog post.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g., Getting Started with Azure for Students" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cloud">Cloud</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Select>
                  <SelectTrigger id="author">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alexandra">Alexandra Chen</SelectItem>
                    <SelectItem value="marcus">Marcus Johnson</SelectItem>
                    <SelectItem value="sophia">Sophia Rodriguez</SelectItem>
                    <SelectItem value="david">David Kim</SelectItem>
                    <SelectItem value="jamal">Jamal Williams</SelectItem>
                    <SelectItem value="olivia">Olivia Martinez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" placeholder="Write a brief summary of the blog post" rows={3} />
              <p className="text-xs text-muted-foreground">
                This will be displayed in blog listings and search results. Max 200 characters.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <div className="min-h-[400px] rounded-md border border-input bg-transparent p-3">
                <p className="text-sm text-muted-foreground">Rich text editor would be integrated here.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="featured-image">Featured Image</Label>
              <div className="flex items-center gap-4">
                <div className="border rounded-lg h-32 w-32 flex items-center justify-center bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <Input id="featured-image" type="file" accept="image/*" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended size: 1200x630 pixels. Max file size: 2MB.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="e.g., azure, cloud, students (comma separated)" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/dashboard/blog">Cancel</Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">Save as Draft</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Publish Post</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

