import Link from "next/link"
import { ArrowRight, Calendar, Filter, Search, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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

export default function ChallengesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coding Challenges</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Test your skills, learn new technologies, and compete with fellow developers.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search challenges..."
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
                      <h4 className="text-sm font-medium mb-2">Challenge Type</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="weekly" className="mr-2" />
                          <label htmlFor="weekly" className="text-sm">
                            Weekly Challenges
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="monthly" className="mr-2" />
                          <label htmlFor="monthly" className="text-sm">
                            Monthly Projects
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="hackathons" className="mr-2" />
                          <label htmlFor="hackathons" className="text-sm">
                            Hackathons
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="competitions" className="mr-2" />
                          <label htmlFor="competitions" className="text-sm">
                            Competitions
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Difficulty</h4>
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
                        <div className="flex items-center">
                          <input type="checkbox" id="expert" className="mr-2" />
                          <label htmlFor="expert" className="text-sm">
                            Expert
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Python
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          React
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          CSS
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Algorithms
                        </Badge>
                        <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                          Data Structures
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Active Challenges</h2>
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
                          <DropdownMenuItem>Ending Soon</DropdownMenuItem>
                          <DropdownMenuItem>Difficulty (Low to High)</DropdownMenuItem>
                          <DropdownMenuItem>Difficulty (High to Low)</DropdownMenuItem>
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
                      <div className="md:w-1/3 bg-muted h-48 md:h-auto flex items-center justify-center">
                        <Trophy className="h-16 w-16 text-[#D4A373]" />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Featured</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>Ends in 3 days</span>
                            </div>
                          </div>
                          <CardTitle className="mt-2 text-2xl">
                            <Link href="/challenges/cli-tool" className="hover:underline">
                              Weekly Coding Challenge: Build a CLI Tool
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            Create a command-line utility that solves a real-world problem. Your tool should be
                            user-friendly, well-documented, and handle errors gracefully.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline">JavaScript</Badge>
                            <Badge variant="outline">Python</Badge>
                            <Badge variant="outline">Rust</Badge>
                            <Badge variant="outline">Go</Badge>
                          </div>
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
                            <Users className="mr-1 h-4 w-4" />
                            <span>24 participants</span>
                          </div>
                          <Button size="sm">Join Challenge</Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Intermediate</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Ends in 18 days</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/challenges/ui-component" className="hover:underline">
                            30-Day UI Component Challenge
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Build a new UI component every day for 30 days. Improve your frontend skills and build an
                          impressive portfolio.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">CSS</Badge>
                          <Badge variant="outline">UI/UX</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>Day 12/30</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>156 participants</span>
                        </div>
                        <Button size="sm">Continue Challenge</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d] text-white">Advanced</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Ends in 5 days</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/challenges/algorithm" className="hover:underline">
                            Algorithm Optimization Challenge
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Optimize a set of algorithms for better time and space complexity. Compete for the most
                          efficient solution.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">Algorithms</Badge>
                          <Badge variant="outline">Data Structures</Badge>
                          <Badge variant="outline">Performance</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Difficulty</span>
                            <div className="flex">
                              <span className="text-[#D4A373]">★★★</span>
                              <span className="text-muted-foreground">★★</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>87 participants</span>
                        </div>
                        <Button size="sm">Join Challenge</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-muted text-muted-foreground">Beginner</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Ends in 10 days</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/challenges/responsive-portfolio" className="hover:underline">
                            Build a Responsive Portfolio
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Create a responsive portfolio website that showcases your projects and skills. Perfect for
                          beginners.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">HTML</Badge>
                          <Badge variant="outline">CSS</Badge>
                          <Badge variant="outline">Responsive Design</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Difficulty</span>
                            <div className="flex">
                              <span className="text-[#D4A373]">★</span>
                              <span className="text-muted-foreground">★★★★</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>203 participants</span>
                        </div>
                        <Button size="sm">Join Challenge</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Hackathon</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Apr 15-17, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2 text-xl">
                          <Link href="/challenges/ai-hackathon" className="hover:underline">
                            AI Integration Hackathon
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          Build an innovative application that leverages AI APIs. Cash prizes for the top three
                          projects!
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">AI</Badge>
                          <Badge variant="outline">API Integration</Badge>
                          <Badge variant="outline">Innovation</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Prize Pool</span>
                            <span className="font-medium">$5,000</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>Teams of 1-4</span>
                        </div>
                        <Button size="sm">Register Team</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button className="flex items-center gap-2">
                      Load More Challenges
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hall of Fame</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Celebrating our top challenge winners and their exceptional solutions.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#FFD700]">1st Place</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>March 2025</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">API Performance Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@thomas" />
                      <AvatarFallback>TW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Thomas Wilson</p>
                      <p className="text-xs text-muted-foreground">Backend Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Thomas's solution reduced API response time by 80% using innovative caching strategies and query
                    optimization.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Solution
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#C0C0C0]">2nd Place</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>March 2025</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">API Performance Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@sophia" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sophia Lee</p>
                      <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sophia implemented a clever distributed caching system that significantly improved performance under
                    heavy load.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Solution
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#CD7F32]">3rd Place</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>March 2025</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">API Performance Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@miguel" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Miguel Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Backend Specialist</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Miguel's innovative approach to database indexing and query optimization yielded impressive
                    performance gains.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Solution
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

