import Link from "next/link"
import { ArrowRight, Calendar, Clock, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dev's Cafe Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover tutorials, insights, and stories from our community of developers.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="w-full bg-background pl-8 rounded-lg border border-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="tutorials" className="mr-2" />
                          <label htmlFor="tutorials" className="text-sm">
                            Tutorials
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="case-studies" className="mr-2" />
                          <label htmlFor="case-studies" className="text-sm">
                            Case Studies
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="opinions" className="mr-2" />
                          <label htmlFor="opinions" className="text-sm">
                            Opinions
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="news" className="mr-2" />
                          <label htmlFor="news" className="text-sm">
                            News
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Skill Level</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="beginner" className="mr-2" />
                          <label htmlFor="beginner" className="text-sm">
                            Beginner
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="intermediate" className="mr-2" />
                          <label htmlFor="intermediate" className="text-sm">
                            Intermediate
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="advanced" className="mr-2" />
                          <label htmlFor="advanced" className="text-sm">
                            Advanced
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Popular Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          React
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          TypeScript
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Next.js
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          CSS
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Web3
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          AI
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          DevOps
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
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
                          <DropdownMenuItem>Most Commented</DropdownMenuItem>
                          <DropdownMenuItem>Trending</DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Tabs defaultValue="grid" className="hidden md:block">
                      <TabsList className="grid w-16 grid-cols-2">
                        <TabsTrigger value="grid" className="px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                          </svg>
                        </TabsTrigger>
                        <TabsTrigger value="list" className="px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <line x1="8" x2="21" y1="6" y2="6" />
                            <line x1="8" x2="21" y1="12" y2="12" />
                            <line x1="8" x2="21" y1="18" y2="18" />
                            <line x1="3" x2="3" y1="6" y2="6" />
                            <line x1="3" x2="3" y1="12" y2="12" />
                            <line x1="3" x2="3" y1="18" y2="18" />
                          </svg>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                <div className="grid gap-8">
                  <Card className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-muted h-48 md:h-auto">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Featured post"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Featured</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>Mar 24, 2025</span>
                            </div>
                          </div>
                          <CardTitle className="mt-2 text-2xl">
                            <Link href="/blog/post" className="hover:underline">
                              The Future of Web Development: Trends to Watch in 2025
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            Explore the emerging technologies and methodologies that are shaping the future of web
                            development, from AI-assisted coding to WebAssembly and beyond.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@emma" />
                              <AvatarFallback>EJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Emma Johnson</p>
                              <p className="text-xs text-muted-foreground">Tech Evangelist</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-3">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>8 min read</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>76 comments</span>
                            <span>•</span>
                            <span>215 likes</span>
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Tutorial</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 22, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/blog/post" className="hover:underline">
                            Building Accessible Web Forms: A Complete Guide
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Learn how to create forms that are usable by everyone, including people with disabilities.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@carlos" />
                            <AvatarFallback>CM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Carlos Mendez</p>
                            <p className="text-xs text-muted-foreground">Accessibility Specialist</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>12 min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>34 comments</span>
                          <span>•</span>
                          <span>98 likes</span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d]">Opinion</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 20, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/blog/post" className="hover:underline">
                            Why TypeScript Should Be Your Default Choice in 2025
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          The benefits of TypeScript have never been clearer. Here's why you should make the switch.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@nina" />
                            <AvatarFallback>NP</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Nina Patel</p>
                            <p className="text-xs text-muted-foreground">Senior Developer</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>6 min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>52 comments</span>
                          <span>•</span>
                          <span>143 likes</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Case Study</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 18, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/blog/post" className="hover:underline">
                            How We Reduced Our API Response Time by 80%
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          A deep dive into our performance optimization journey and the techniques that made it
                          possible.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@thomas" />
                            <AvatarFallback>TW</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Thomas Wilson</p>
                            <p className="text-xs text-muted-foreground">Backend Engineer</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>15 min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>28 comments</span>
                          <span>•</span>
                          <span>87 likes</span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Tutorial</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 15, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/blog/post" className="hover:underline">
                            Getting Started with 3D Web Animations Using Three.js
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Create stunning 3D animations for your web projects with this beginner-friendly guide.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@sophia" />
                            <AvatarFallback>SL</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Sophia Lee</p>
                            <p className="text-xs text-muted-foreground">Creative Developer</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>10 min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>41 comments</span>
                          <span>•</span>
                          <span>112 likes</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button className="flex items-center gap-2">
                      Load More Articles
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

