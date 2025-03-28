import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Code,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Github,
  Search,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resource Vault</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover free templates, cheat sheets, toolkits, and learning materials shared by our community.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search resources..."
                    className="w-full bg-background pl-8 rounded-lg border border-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <TabsList className="mb-4 md:mb-0">
                  <TabsTrigger value="all">All Resources</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="cheatsheets">Cheat Sheets</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        Sort by
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Most Recent</DropdownMenuItem>
                        <DropdownMenuItem>Most Popular</DropdownMenuItem>
                        <DropdownMenuItem>Most Downloaded</DropdownMenuItem>
                        <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                        <DropdownMenuItem>Recently Updated</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Template</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/nextjs-starter" className="hover:underline">
                          Next.js Starter Template with Authentication
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A production-ready Next.js template with built-in authentication, database setup, and styling.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@sarah" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Sarah Chen</p>
                          <p className="text-xs text-muted-foreground">Frontend Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>1,245 downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Github className="h-4 w-4" />
                          <span>Repo</span>
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Cheat Sheet</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/web-dev-cheatsheet" className="hover:underline">
                          Ultimate Web Development Cheat Sheet
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A comprehensive reference guide for HTML, CSS, JavaScript, and more. Perfect for quick lookups.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@miguel" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Miguel Rodriguez</p>
                          <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>2,567 downloads</span>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d] text-white">Tutorial</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.7</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/docker-beginners" className="hover:underline">
                          Docker for Beginners: Step-by-Step Guide
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        Learn Docker from scratch with this comprehensive guide. Includes practical examples and
                        exercises.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">DevOps</Badge>
                        <Badge variant="outline">Containers</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@thomas" />
                          <AvatarFallback>TW</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Thomas Wilson</p>
                          <p className="text-xs text-muted-foreground">DevOps Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="mr-1 h-4 w-4" />
                        <span>15 min read</span>
                      </div>
                      <Button size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>View</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-muted text-muted-foreground">Tool</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.6</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/regex-generator" className="hover:underline">
                          RegEx Pattern Generator
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        Generate and test regular expressions with this interactive tool. Includes common patterns and
                        explanations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">RegEx</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">Utility</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@priya" />
                          <AvatarFallback>PS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Priya Singh</p>
                          <p className="text-xs text-muted-foreground">Software Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Code className="mr-1 h-4 w-4" />
                        <span>Online Tool</span>
                      </div>
                      <Button size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>Use Tool</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Template</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.5</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/react-component-library" className="hover:underline">
                          React Component Library Starter
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A template for building your own React component library with TypeScript, Storybook, and testing
                        setup.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Storybook</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@alex" />
                          <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Alex Kim</p>
                          <p className="text-xs text-muted-foreground">UI Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>987 downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Github className="h-4 w-4" />
                          <span>Repo</span>
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Cheat Sheet</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.7</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/git-commands" className="hover:underline">
                          Git Commands Cheat Sheet
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A comprehensive reference of Git commands for everyday use, including advanced operations and
                        best practices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">Version Control</Badge>
                        <Badge variant="outline">CLI</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@david" />
                          <AvatarFallback>DL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">David Lee</p>
                          <p className="text-xs text-muted-foreground">Senior Developer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>1,876 downloads</span>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button className="flex items-center gap-2">
                    Load More Resources
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Template</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/nextjs-starter" className="hover:underline">
                          Next.js Starter Template with Authentication
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A production-ready Next.js template with built-in authentication, database setup, and styling.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@sarah" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Sarah Chen</p>
                          <p className="text-xs text-muted-foreground">Frontend Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>1,245 downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Github className="h-4 w-4" />
                          <span>Repo</span>
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Template</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.5</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/react-component-library" className="hover:underline">
                          React Component Library Starter
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A template for building your own React component library with TypeScript, Storybook, and testing
                        setup.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Storybook</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@alex" />
                          <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Alex Kim</p>
                          <p className="text-xs text-muted-foreground">UI Engineer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>987 downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Github className="h-4 w-4" />
                          <span>Repo</span>
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cheatsheets" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Cheat Sheet</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/web-dev-cheatsheet" className="hover:underline">
                          Ultimate Web Development Cheat Sheet
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A comprehensive reference guide for HTML, CSS, JavaScript, and more. Perfect for quick lookups.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@miguel" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Miguel Rodriguez</p>
                          <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>2,567 downloads</span>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Cheat Sheet</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.7</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl">
                        <Link href="/resources/git-commands" className="hover:underline">
                          Git Commands Cheat Sheet
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        A comprehensive reference of Git commands for everyday use, including advanced operations and
                        best practices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">Version Control</Badge>
                        <Badge variant="outline">CLI</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@david" />
                          <AvatarFallback>DL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">David Lee</p>
                          <p className="text-xs text-muted-foreground">Senior Developer</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-4 w-4" />
                        <span>1,876 downloads</span>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contribute Resources</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Share your knowledge with the community by contributing your own resources.
                </p>
              </div>
              <Button size="lg" className="mt-4 bg-[#6F4E37] hover:bg-[#5a3f2d]">
                Submit a Resource
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Templates</CardTitle>
                  <CardDescription>Share project starters, boilerplates, and configuration templates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FileText className="h-12 w-12 text-[#D4A373] mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Help others jumpstart their projects with your well-crafted templates and boilerplates.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Submit Template
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cheat Sheets</CardTitle>
                  <CardDescription>Create reference guides, command lists, and quick-lookup resources.</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookOpen className="h-12 w-12 text-[#A2D9B1] mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Compile your knowledge into easy-to-reference cheat sheets that help developers work more
                    efficiently.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Submit Cheat Sheet
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tutorials</CardTitle>
                  <CardDescription>Write step-by-step guides, walkthroughs, and educational content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="h-12 w-12 text-[#6F4E37] mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Share your expertise through detailed tutorials that help others learn new technologies and
                    techniques.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Submit Tutorial
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

