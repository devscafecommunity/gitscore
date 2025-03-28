import Link from "next/link"
import { ArrowRight, Calendar, Clock, Filter, MessageSquare, Search, Star, Users } from "lucide-react"
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

export default function MentorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mentorship Program</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with experienced developers for guidance or share your knowledge as a mentor.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search mentors..."
                    className="w-full bg-background pl-8 rounded-lg border border-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="mentors" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <TabsList className="mb-4 md:mb-0">
                  <TabsTrigger value="mentors">Find a Mentor</TabsTrigger>
                  <TabsTrigger value="mentees">Find a Mentee</TabsTrigger>
                  <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
                  <TabsTrigger value="resources">Mentorship Resources</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        Filter by
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Frontend Development</DropdownMenuItem>
                        <DropdownMenuItem>Backend Development</DropdownMenuItem>
                        <DropdownMenuItem>Full Stack</DropdownMenuItem>
                        <DropdownMenuItem>DevOps</DropdownMenuItem>
                        <DropdownMenuItem>UI/UX Design</DropdownMenuItem>
                        <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <TabsContent value="mentors" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Senior</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@sarah" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/sarah-chen" className="hover:underline">
                            Sarah Chen
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Frontend Engineer at TechCorp</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">UI/UX</Badge>
                        <Badge variant="outline">Performance</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Specializes in building scalable frontend applications with React and TypeScript. 5+ years of
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>12 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d] text-white">Staff</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@david" />
                          <AvatarFallback>DL</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/david-lee" className="hover:underline">
                            David Lee
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Engineering Manager at BigTech</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">Leadership</Badge>
                        <Badge variant="outline">System Design</Badge>
                        <Badge variant="outline">Career Growth</Badge>
                        <Badge variant="outline">Backend</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Helps engineers grow into leadership roles and navigate career challenges. 10+ years of
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>18 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Mid-Level</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.7</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@miguel" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/miguel-rodriguez" className="hover:underline">
                            Miguel Rodriguez
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Full Stack Developer at StartupX</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">AWS</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Passionate about helping junior developers build full-stack applications and deploy to the
                        cloud.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>8 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Senior</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@priya" />
                          <AvatarFallback>PS</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/priya-singh" className="hover:underline">
                            Priya Singh
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">DevOps Engineer at CloudCo</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">Kubernetes</Badge>
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">CI/CD</Badge>
                        <Badge variant="outline">Cloud</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Helps developers understand DevOps practices and implement robust CI/CD pipelines. 7+ years of
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>15 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Mid-Level</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>4.6</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@alex" />
                          <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/alex-kim" className="hover:underline">
                            Alex Kim
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Mobile Developer at AppWorks</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">React Native</Badge>
                        <Badge variant="outline">Flutter</Badge>
                        <Badge variant="outline">iOS</Badge>
                        <Badge variant="outline">Android</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Specializes in cross-platform mobile development and native app optimization. 4+ years of
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>6 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#6F4E37] hover:bg-[#5a3f2d] text-white">Principal</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>5.0</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@emma" />
                          <AvatarFallback>EJ</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/emma-johnson" className="hover:underline">
                            Emma Johnson
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Principal Architect at TechGiant</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">System Design</Badge>
                        <Badge variant="outline">Architecture</Badge>
                        <Badge variant="outline">Scalability</Badge>
                        <Badge variant="outline">Leadership</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Guides senior engineers in system architecture, technical leadership, and scaling complex
                        applications.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>10 mentees</span>
                      </div>
                      <Button size="sm">Request Mentorship</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button className="flex items-center gap-2">
                    Load More Mentors
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="mentees" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-muted text-muted-foreground">Junior</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>Looking for 1-2 hrs/week</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@jason" />
                          <AvatarFallback>JT</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/jason-taylor" className="hover:underline">
                            Jason Taylor
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Junior Developer at StartupY</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Career Growth</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Looking for guidance on frontend development best practices and career advancement. 1 year of
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>Available for chat</span>
                      </div>
                      <Button size="sm">Offer Mentorship</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-muted text-muted-foreground">Student</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>Looking for 3-4 hrs/week</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        <Avatar className="h-20 w-20 mb-2">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@lisa" />
                          <AvatarFallback>LW</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl text-center">
                          <Link href="/mentorship/profile/lisa-wong" className="hover:underline">
                            Lisa Wong
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-center">Computer Science Student</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">Data Science</Badge>
                        <Badge variant="outline">Machine Learning</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Seeking mentorship in data science and machine learning. Currently working on final year
                        project.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>Available for chat</span>
                      </div>
                      <Button size="sm">Offer Mentorship</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sessions" className="mt-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Group Session</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>Mar 30, 2025 • 2:00 PM</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2">Career Paths in Frontend Development</CardTitle>
                      <CardDescription>
                        A discussion on different career paths and specializations within frontend development.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@sarah" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Sarah Chen</p>
                          <p className="text-xs text-muted-foreground">Frontend Engineer at TechCorp</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Join this session to learn about different specializations within frontend development, from
                        UI/UX focused roles to performance engineering and accessibility.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>12/20 spots filled</span>
                      </div>
                      <Button size="sm">Register</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Workshop</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>Apr 5, 2025 • 10:00 AM</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2">System Design Interview Preparation</CardTitle>
                      <CardDescription>
                        A hands-on workshop to help you prepare for system design interviews at top tech companies.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@david" />
                          <AvatarFallback>DL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">David Lee</p>
                          <p className="text-xs text-muted-foreground">Engineering Manager at BigTech</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This workshop will cover common system design interview questions, approaches to solving them,
                        and live examples with feedback.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>8/15 spots filled</span>
                      </div>
                      <Button size="sm">Register</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mentorship Guide</CardTitle>
                      <CardDescription>How to get the most out of your mentorship relationship</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to set goals, prepare for sessions, ask effective questions, and build a productive
                        mentorship relationship.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Guide
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mentor Handbook</CardTitle>
                      <CardDescription>Resources for effective mentoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive guide for mentors, including coaching techniques, feedback methods, and how to
                        structure mentorship sessions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Download Handbook
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Career Development Templates</CardTitle>
                      <CardDescription>Tools for career planning and growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Templates for setting career goals, tracking progress, and planning skill development for both
                        mentors and mentees.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Access Templates
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Become a Mentor</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Share your knowledge and experience with the next generation of developers.
                </p>
              </div>
              <Button size="lg" className="mt-4 bg-[#6F4E37] hover:bg-[#5a3f2d]">
                Apply to be a Mentor
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Mentor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Strengthen your own knowledge and skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Build your professional network</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Develop leadership and coaching abilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Give back to the developer community</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Earn recognition and badges on your profile</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What We Look For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>At least 2+ years of professional experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Expertise in specific technologies or domains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Strong communication and empathy skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Commitment to at least 2 hours per week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Passion for helping others grow</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>Apply to become a mentor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>Complete a brief onboarding and training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>Create your mentor profile with skills and availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">4.</span>
                      <span>Get matched with mentees based on your expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">5.</span>
                      <span>Schedule and conduct regular mentoring sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

