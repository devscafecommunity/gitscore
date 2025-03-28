import Link from "next/link"
import { ArrowRight, Code, Coffee, Flame, Github, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Dev's Cafe Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-primary">
              Challenges
            </Link>
            <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
              Resources
            </Link>
            <Link href="/mentorship" className="text-sm font-medium transition-colors hover:text-primary">
              Mentorship
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
            <Button className="hidden md:flex" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Where Developers Brew Ideas Together
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our vibrant community of tech enthusiasts to share knowledge, collaborate on projects, and grow
                    your skills.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#6F4E37] hover:bg-[#5a3f2d]">
                    Join the Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Content
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center">
                <div className="p-4 bg-white dark:bg-[#2C1B13]/80 rounded-xl shadow-lg border border-muted">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Live Community Pulse</h3>
                    <Badge variant="outline" className="bg-[#A2D9B1]/20 text-[#A2D9B1] dark:bg-[#A2D9B1]/10">
                      <span className="mr-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                      Live
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                      <Users className="h-5 w-5 mb-1 text-[#D4A373]" />
                      <span className="text-xl font-bold">42</span>
                      <span className="text-xs text-muted-foreground">Devs Online</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                      <Flame className="h-5 w-5 mb-1 text-[#D4A373]" />
                      <span className="text-xl font-bold">5</span>
                      <span className="text-xs text-muted-foreground">Active Challenges</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                      <Code className="h-5 w-5 mb-1 text-[#D4A373]" />
                      <span className="text-xl font-bold">128</span>
                      <span className="text-xs text-muted-foreground">Code Snippets</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                      <Lightbulb className="h-5 w-5 mb-1 text-[#D4A373]" />
                      <span className="text-xl font-bold">17</span>
                      <span className="text-xs text-muted-foreground">New Ideas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Content</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Discover What's Brewing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore trending posts, challenges, and resources from our community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Tutorial</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Flame className="mr-1 h-4 w-4 text-red-500" />
                      <span>Trending</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-xl">Building a React Component Library from Scratch</CardTitle>
                  <CardDescription>
                    Learn how to create reusable UI components with TypeScript and Storybook
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>42 comments</span>
                    <span>•</span>
                    <span>128 likes</span>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Challenge</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Active</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-xl">Weekly Coding Challenge: Build a CLI Tool</CardTitle>
                  <CardDescription>Create a command-line utility that solves a real-world problem</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@james" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">James Davis</p>
                      <p className="text-xs text-muted-foreground">Challenge Host</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>3 days left</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>24 participants</span>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d]">Resource</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Github className="mr-1 h-4 w-4" />
                      <span>Open Source</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-xl">Ultimate Web Development Cheat Sheet</CardTitle>
                  <CardDescription>A comprehensive reference guide for HTML, CSS, JavaScript, and more</CardDescription>
                </CardHeader>
                <CardContent>
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
                    <span>Updated 2 days ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>256 downloads</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Quick Actions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Jump right into the community with these popular activities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Start a Microblog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Share a quick tip or insight with the community.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Create Post
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Join a Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Test your skills with our weekly coding challenges.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Browse Challenges
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Find a Mentor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Connect with experienced developers in your field.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    View Mentors
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Explore Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Discover tools, templates, and learning materials.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Browse Resources
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our virtual and in-person meetups, workshops, and AMAs.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="workshops">Workshops</TabsTrigger>
                  <TabsTrigger value="meetups">Meetups</TabsTrigger>
                  <TabsTrigger value="amas">AMAs</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Workshop</Badge>
                          <span className="text-sm text-muted-foreground">Mar 28, 2025</span>
                        </div>
                        <CardTitle className="mt-2">Building AI-Powered Web Apps</CardTitle>
                        <CardDescription>
                          Learn how to integrate OpenAI's GPT-4 into your web applications
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@alex" />
                            <AvatarFallback>AK</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Alex Kim</p>
                            <p className="text-xs text-muted-foreground">AI Engineer at TechCorp</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">Register</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Meetup</Badge>
                          <span className="text-sm text-muted-foreground">Apr 5, 2025</span>
                        </div>
                        <CardTitle className="mt-2">Frontend Developers Meetup</CardTitle>
                        <CardDescription>
                          Network with fellow frontend developers and share your experiences
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@priya" />
                            <AvatarFallback>PS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Priya Singh</p>
                            <p className="text-xs text-muted-foreground">Community Manager</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">RSVP</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="workshops" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Workshop</Badge>
                          <span className="text-sm text-muted-foreground">Mar 28, 2025</span>
                        </div>
                        <CardTitle className="mt-2">Building AI-Powered Web Apps</CardTitle>
                        <CardDescription>
                          Learn how to integrate OpenAI's GPT-4 into your web applications
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@alex" />
                            <AvatarFallback>AK</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Alex Kim</p>
                            <p className="text-xs text-muted-foreground">AI Engineer at TechCorp</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">Register</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="meetups" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Meetup</Badge>
                          <span className="text-sm text-muted-foreground">Apr 5, 2025</span>
                        </div>
                        <CardTitle className="mt-2">Frontend Developers Meetup</CardTitle>
                        <CardDescription>
                          Network with fellow frontend developers and share your experiences
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@priya" />
                            <AvatarFallback>PS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Priya Singh</p>
                            <p className="text-xs text-muted-foreground">Community Manager</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">RSVP</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="amas" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d]">AMA</Badge>
                          <span className="text-sm text-muted-foreground">Apr 12, 2025</span>
                        </div>
                        <CardTitle className="mt-2">Ask Me Anything: Senior Engineering Manager</CardTitle>
                        <CardDescription>Get career advice and insights from a tech industry veteran</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@david" />
                            <AvatarFallback>DL</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">David Lee</p>
                            <p className="text-xs text-muted-foreground">Engineering Manager at BigTech</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">Submit Questions</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">Dev's Cafe Hub</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Dev's Cafe Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

