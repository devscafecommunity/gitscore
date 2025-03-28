import Link from "next/link"
import {
  Activity,
  BookOpen,
  Calendar,
  ChevronRight,
  Code,
  Edit3,
  FileText,
  Github,
  Globe,
  MessageSquare,
  PenTool,
  Plus,
  Settings,
  Users,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="border-r w-full md:w-64 md:shrink-0">
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-lg">Dev's Cafe Hub</span>
            </Link>
          </div>
          <nav className="grid gap-1 p-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Activity className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/content"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              My Content
            </Link>
            <Link
              href="/dashboard/challenges"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Code className="h-4 w-4" />
              Challenges
            </Link>
            <Link
              href="/dashboard/bookmarks"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BookOpen className="h-4 w-4" />
              Bookmarks
            </Link>
            <Link
              href="/dashboard/mentorship"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Mentorship
            </Link>
            <Link
              href="/dashboard/calendar"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <main className="flex-1">
          <div className="flex h-16 items-center gap-4 border-b px-6">
            <Link href="/dashboard/new" className="ml-auto">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>New Post</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid gap-6 p-6 md:gap-8 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle>Welcome back, Alex!</CardTitle>
                  <CardDescription>Here's what's happening with your account today.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Profile Completion</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold">75%</div>
                            <PenTool className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <Progress value={75} className="h-2 mt-2" />
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Link href="/dashboard/profile" className="text-xs text-muted-foreground hover:underline">
                            Complete your profile
                          </Link>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Engagement</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold">128</div>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">+24% from last week</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Link href="/dashboard/analytics" className="text-xs text-muted-foreground hover:underline">
                            View analytics
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Skill Dashboard</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Frontend</span>
                              <span className="font-medium">Advanced</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Backend</span>
                              <span className="font-medium">Intermediate</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>DevOps</span>
                              <span className="font-medium">Beginner</span>
                            </div>
                            <Progress value={40} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>UI/UX</span>
                              <span className="font-medium">Intermediate</span>
                            </div>
                            <Progress value={60} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="ml-auto gap-1">
                          <Edit3 className="h-3.5 w-3.5" />
                          <span>Update Skills</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-6 md:w-80">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="grid place-items-center rounded-lg bg-muted h-10 w-10 text-xs">
                          <span>28</span>
                          <span className="text-[10px] leading-none">MAR</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Building AI-Powered Web Apps</p>
                          <p className="text-xs text-muted-foreground">Workshop • 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="grid place-items-center rounded-lg bg-muted h-10 w-10 text-xs">
                          <span>05</span>
                          <span className="text-[10px] leading-none">APR</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Frontend Developers Meetup</p>
                          <p className="text-xs text-muted-foreground">Meetup • 6:30 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="grid place-items-center rounded-lg bg-muted h-10 w-10 text-xs">
                          <span>12</span>
                          <span className="text-[10px] leading-none">APR</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Ask Me Anything: Senior Engineering Manager</p>
                          <p className="text-xs text-muted-foreground">AMA • 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>View Calendar</span>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Weekly Coding Challenge: Build a CLI Tool</p>
                          <Badge variant="outline" className="text-xs">
                            3 days left
                          </Badge>
                        </div>
                        <Progress value={40} className="h-2" />
                        <p className="text-xs text-muted-foreground">Your progress: 40%</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">30-Day UI Component Challenge</p>
                          <Badge variant="outline" className="text-xs">
                            18 days left
                          </Badge>
                        </div>
                        <Progress value={25} className="h-2" />
                        <p className="text-xs text-muted-foreground">Your progress: 25%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full gap-1">
                      <Code className="h-3.5 w-3.5" />
                      <span>View All Challenges</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div>
              <Tabs defaultValue="content">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="content">Recent Content</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                  </TabsList>
                  <Link href="/dashboard/content" className="text-sm text-muted-foreground hover:text-primary">
                    View all
                  </Link>
                </div>
                <TabsContent value="content" className="mt-6">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Draft</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 20, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-lg">
                          <Link href="#" className="hover:underline">
                            Getting Started with WebAssembly and Rust
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          A beginner-friendly introduction to using Rust with WebAssembly for high-performance web
                          applications.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>1,245 words</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Edit3 className="h-3.5 w-3.5" />
                          <span>Continue Editing</span>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Published</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Mar 15, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-lg">
                          <Link href="#" className="hover:underline">
                            10 VS Code Extensions Every Developer Should Know
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          Boost your productivity with these essential Visual Studio Code extensions for web developers.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>42 comments</span>
                          <span>128 likes</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Activity className="h-3.5 w-3.5" />
                          <span>View Stats</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="activity" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        <div className="flex gap-4">
                          <div className="relative mt-0.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                              <MessageSquare className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-[#A2D9B1]" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm">
                              You commented on{" "}
                              <Link href="#" className="font-medium hover:underline">
                                Building Accessible Web Forms: A Complete Guide
                              </Link>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              "Great article! I've been using these techniques in my recent projects and they've made a
                              huge difference."
                            </p>
                            <p className="text-xs text-muted-foreground">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="relative mt-0.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                              <Heart className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-[#A2D9B1]" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm">
                              Carlos Mendez liked your comment on{" "}
                              <Link href="#" className="font-medium hover:underline">
                                Building Accessible Web Forms: A Complete Guide
                              </Link>
                            </p>
                            <p className="text-xs text-muted-foreground">3 hours ago</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="relative mt-0.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                              <Badge className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-[#A2D9B1]" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm">
                              You earned the{" "}
                              <Badge variant="outline" className="text-xs">
                                Bug Hunter
                              </Badge>{" "}
                              badge for reporting an issue in the community code repository
                            </p>
                            <p className="text-xs text-muted-foreground">Yesterday</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bookmarks" className="mt-6">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Tutorial</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Saved 3 days ago</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-lg">
                          <Link href="#" className="hover:underline">
                            Building Accessible Web Forms: A Complete Guide
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          Learn how to create forms that are usable by everyone, including people with disabilities.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@carlos" />
                            <AvatarFallback>CM</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">Carlos Mendez</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <span>Read</span>
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Resource</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Saved 1 week ago</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-lg">
                          <Link href="#" className="hover:underline">
                            Ultimate Web Development Cheat Sheet
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          A comprehensive reference guide for HTML, CSS, JavaScript, and more.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@miguel" />
                            <AvatarFallback>MR</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">Miguel Rodriguez</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <span>View</span>
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portfolio</CardTitle>
                  <CardDescription>Showcase your projects and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Github className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">GitHub</p>
                        <p className="text-xs text-muted-foreground">12 repositories</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Personal Website</p>
                        <p className="text-xs text-muted-foreground">alex-dev.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    Manage Portfolio
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mentorship</CardTitle>
                  <CardDescription>Connect with mentors or become one</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@sarah" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Sarah Chen</p>
                        <p className="text-xs text-muted-foreground">Frontend Engineer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@david" />
                        <AvatarFallback>DL</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">David Lee</p>
                        <p className="text-xs text-muted-foreground">Engineering Manager</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    Find Mentors
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">API Tokens</CardTitle>
                  <CardDescription>Manage your Dev's Cafe API access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Personal Token</p>
                        <p className="text-xs text-muted-foreground">Created Mar 10, 2025</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Project Token</p>
                        <p className="text-xs text-muted-foreground">Created Feb 28, 2025</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Active
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    Manage API Tokens
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

