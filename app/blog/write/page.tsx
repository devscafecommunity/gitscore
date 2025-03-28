"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Eye, FileText, Save, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WriteBlogPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState(
    '# Introduction\n\nStart writing your article here...\n\n## Section 1\n\nAdd content for your first section.\n\n## Section 2\n\nAdd content for your second section.\n\n### Subsection\n\nAdd some more detailed content here.\n\n\`\`\`javascript\n// You can include code snippets\nfunction example() {\n  console.log("Hello, world!");\n}\n\`\`\`\n\n- List item 1\n- List item 2\n- List item 3\n\n> This is a blockquote. You can use it to emphasize important points or include quotations.',
  )
  const [tags, setTags] = useState("")
  const [currentTab, setCurrentTab] = useState("write")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-1">
              <Save className="h-4 w-4" />
              <span>Save Draft</span>
            </Button>
            <Button className="gap-1 bg-[#6F4E37] hover:bg-[#5a3f2d]">
              <FileText className="h-4 w-4" />
              <span>Publish</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-7">
            <div className="md:col-span-5">
              <Card className="border-none shadow-none md:shadow-sm md:border">
                <CardContent className="p-0 md:p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Input 
                        type="text" 
                        placeholder="Enter article title..." 
                        className="border-none text-3xl font-bold px-0 md:px-3 focus-visible:ring-0"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="write">Write</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="write" className="mt-4">
                        <Textarea 
                          placeholder="Write your content in Markdown..." 
                          className="min-h-[500px] font-mono resize-y border-none focus-visible:ring-0 p-0 md:p-3"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </TabsContent>
                      <TabsContent value="preview" className="mt-4 min-h-[500px]">
                        <div className="prose prose-stone dark:prose-invert max-w-none">
                          {/* In a real app, you would render the Markdown content here */}
                          <h1>Introduction</h1>
                          <p>Start writing your article here...</p>
                          <h2>Section 1</h2>
                          <p>Add content for your first section.</p>
                          <h2>Section 2</h2>
                          <p>Add content for your second section.</p>
                          <h3>Subsection</h3>
                          <p>Add some more detailed content here.</p>
                          <pre>
                            <code className="language-javascript">
                              {`// You can include code snippets
function example() {
  console.log("Hello, world!");
}`}
                            </code>
                          </pre>
                          <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                          </ul>
                          <blockquote>
                            <p>This is a blockquote. You can use it to emphasize important points or include quotations.</p>
                          </blockquote>
                        </div>
                      </TabsContent>

                    <div className="border-t pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags</Label>
                        <Input 
                          id="tags" 
                          placeholder="e.g. javascript, react, web-development" 
                          value={tags}
                          onChange={(e) => setTags(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">Separate tags with commas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Publish Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="published" className="text-sm font-medium">
                        Publish immediately
                      </Label>
                      <Switch id="published" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured" className="text-sm font-medium">
                        Featured article
                      </Label>
                      <Switch id="featured" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="comments" className="text-sm font-medium">
                        Allow comments
                      </Label>
                      <Switch id="comments" defaultChecked />
                    </div>
                    <div className="pt-2">
                      <Label className="text-sm font-medium mb-1 block">Scheduled for</Label>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Not scheduled</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed border-input p-8">
                      <div className="bg-muted rounded-full p-4">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-1 text-center">
                        <p className="text-sm text-muted-foreground">Drag & drop an image here or</p>
                        <div className="mt-2">
                          <Button variant="secondary" size="sm">
                            Choose file
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (max. 2MB)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Your Name</p>
                        <p className="text-xs text-muted-foreground">Frontend Developer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Markdown Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><code># Heading 1</code></p>
                      <p><code>## Heading 2</code></p>
                      <p><code>**Bold Text**</code></p>
                      <p><code>*Italic Text*</code></p>
                      <p><code>- List item</code></p>
                      <p><code>1. Numbered item</code></p>
                      <p><code>[Link Text](URL)</code></p>
                      <p><code>![Alt Text](Image URL)</code></p>
                      <p><code>\`\`\`language Code block \`\`\`</code></p>
                      <p><code>> Blockquote</code></p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" />
                      Markdown Cheatsheet
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

