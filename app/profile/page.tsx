import Link from "next/link"
import {
  Calendar,
  Edit,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Settings,
  Users,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  // In a real app, this would be fetched from an API
  const user = {
    name: "Alex Johnson",
    username: "alexj",
    title: "Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    bio: "Passionate frontend developer with 5+ years of experience creating responsive and accessible web applications. Specializing in React, TypeScript, and modern CSS frameworks.",
    joined: "January 2022",
    profileCompletion: 85,
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "Node.js", "Git", "UI/UX"],
    badges: [
      {
        name: "Bug Hunter",
        description: "Found and fixed critical bugs in the community codebase",
        icon: "🐛",
      },
      {
        name: "Top Contributor",
        description: "Among the top 10% of contributors this month",
        icon: "⭐",
      },
      {
        name: "Mentor",
        description: "Helped 5+ developers with their coding journey",
        icon: "👨‍🏫",
      },
    ],
    stats: {
      posts: 12,
      comments: 48,
      challenges: 7,
      followers: 120,
    },
    socials: {
      github: "https://github.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      website: "https://alexj.dev",
    },
    activity: [
      {
        type: "post",
        title: "Building Accessible React Components",
        date: "2 days ago",
        likes: 34,
        comments: 8,
      },
      {
        type: "challenge",
        title: "Completed the Weekly CLI Tool Challenge",
        date: "1 week ago",
        rank: "2nd Place",
      },
      {
        type: "comment",
        content: "Great article! I've been using this approach in my recent projects and it's been a game-changer.",
        post: "The Future of Web Development: Trends to Watch in 2025",
        date: "2 weeks ago",
      },
    ],
    contributions: {
      thisWeek: 12,
      lastMonth: 47,
      total: 358,
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                    <p className="text-muted-foreground">{user.title}</p>

                    <div className="w-full mt-6">
                      <Button variant="outline" className="w-full gap-1">
                        <Edit className="h-4 w-4" />
                        <span>Edit Profile</span>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {user.company && (
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{user.company}</span>
                      </div>
                    )}
                    {user.location && (
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user.email && (
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{user.email}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Joined {user.joined}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center space-x-4">
                    {user.socials.github && (
                      <Link href={user.socials.github} className="text-muted-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {user.socials.linkedin && (
                      <Link href={user.socials.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    )}
                    {user.socials.website && (
                      <Link href={user.socials.website} className="text-muted-foreground hover:text-primary">
                        <Globe className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Profile Completion</CardTitle>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{user.profileCompletion}% complete</span>
                      <span className="text-sm text-muted-foreground">5 steps left</span>
                    </div>
                    <Progress value={user.profileCompletion} className="h-2" />
                    <Button variant="outline" size="sm" className="w-full">
                      Complete Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full gap-1">
                    <Edit className="h-4 w-4" />
                    <span>Edit Skills</span>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Badges & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <span className="text-lg">{badge.icon}</span>
                        </div>
                        <div>
                          <p className="font-medium">{badge.name}</p>
                          <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Badges
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="activity">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="contributions">Contributions</TabsTrigger>
                </TabsList>
                <TabsContent value="activity" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {user.activity.map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="relative mt-0.5">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                {item.type === "post" && <Edit className="h-4 w-4" />}
                                {item.type === "challenge" && <Trophy className="h-4 w-4" />}
                                {item.type === "comment" && <MessageSquare className="h-4 w-4" />}
                              </div>
                              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-[#A2D9B1]" />
                            </div>
                            <div className="flex-1 space-y-1">
                              {item.type === "post" && (
                                <>
                                  <p className="text-sm">
                                    You published{" "}
                                    <Link href="#" className="font-medium hover:underline">
                                      {item.title}
                                    </Link>
                                  </p>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>{item.likes} likes</span>
                                    <span>•</span>
                                    <span>{item.comments} comments</span>
                                  </div>
                                </>
                              )}
                              {item.type === "challenge" && (
                                <>
                                  <p className="text-sm">{item.title}</p>
                                  <p className="text-sm font-medium text-[#D4A373]">{item.rank}</p>
                                </>
                              )}
                              {item.type === "comment" && (
                                <>
                                  <p className="text-sm">
                                    You commented on{" "}
                                    <Link href="#" className="font-medium hover:underline">
                                      {item.post}
                                    </Link>
                                  </p>
                                  <p className="text-sm text-muted-foreground">"{item.content}"</p>
                                </>
                              )}
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="posts" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Your Posts</CardTitle>
                        <Button className="gap-1 bg-[#6F4E37] hover:bg-[#5a3f2d]">
                          <Edit className="h-4 w-4" />
                          <span>New Post</span>
                        </Button>
                      </div>
                      <CardDescription>You have published {user.stats.posts} posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Published</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>2 days ago</span>
                              </div>
                            </div>
                            <CardTitle className="mt-2 text-lg">
                              <Link href="#" className="hover:underline">
                                Building Accessible React Components
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground">
                              A comprehensive guide to creating accessible React components using ARIA attributes and
                              keyboard navigation.
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>34 likes</span>
                              <span>8 comments</span>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Edit className="h-3.5 w-3.5" />
                              <span>Edit</span>
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Published</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>3 weeks ago</span>
                              </div>
                            </div>
                            <CardTitle className="mt-2 text-lg">
                              <Link href="#" className="hover:underline">
                                State Management in Modern React Applications
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground">
                              Comparing different state management solutions in React: Context API, Redux, Zustand, and
                              more.
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>26 likes</span>
                              <span>12 comments</span>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Edit className="h-3.5 w-3.5" />
                              <span>Edit</span>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Posts
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="challenges" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Challenge Participation</CardTitle>
                      <CardDescription>You have participated in {user.stats.challenges} challenges</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Completed</Badge>
                              <Badge variant="outline">2nd Place</Badge>
                            </div>
                            <CardTitle className="mt-2 text-lg">
                              <Link href="#" className="hover:underline">
                                Weekly Coding Challenge: Build a CLI Tool
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground">
                              Created LogAnalyzer, a command-line tool for parsing and analyzing log files with
                              customizable filters.
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>Ended 1 week ago</span>
                            </div>
                            <Button variant="outline" size="sm">
                              View Submission
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-[#A2D9B1] text-foreground hover:bg-[#8fc99e]">Active</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>18 days left</span>
                              </div>
                            </div>
                            <CardTitle className="mt-2 text-lg">
                              <Link href="#" className="hover:underline">
                                30-Day UI Component Challenge
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span>Progress</span>
                                <span>Day 12/30</span>
                              </div>
                              <Progress value={40} className="h-2" />
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Building a card carousel component</span>
                            </div>
                            <Button size="sm">Continue Challenge</Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Challenges
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="contributions" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Contributions</CardTitle>
                      <CardDescription>
                        You have made {user.contributions.total} contributions to the community
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="space-y-1 rounded-lg bg-muted p-4">
                            <p className="text-2xl font-bold">{user.contributions.thisWeek}</p>
                            <p className="text-xs text-muted-foreground">This Week</p>
                          </div>
                          <div className="space-y-1 rounded-lg bg-muted p-4">
                            <p className="text-2xl font-bold">{user.contributions.lastMonth}</p>
                            <p className="text-xs text-muted-foreground">Last Month</p>
                          </div>
                          <div className="space-y-1 rounded-lg bg-muted p-4">
                            <p className="text-2xl font-bold">{user.contributions.total}</p>
                            <p className="text-xs text-muted-foreground">Total</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">Contribution Types</h3>
                          <div className="space-y-2">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>Blog Posts</span>
                                <span>{user.stats.posts}</span>
                              </div>
                              <Progress value={(user.stats.posts / user.contributions.total) * 100} className="h-2" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>Comments</span>
                                <span>{user.stats.comments}</span>
                              </div>
                              <Progress
                                value={(user.stats.comments / user.contributions.total) * 100}
                                className="h-2"
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>Challenge Submissions</span>
                                <span>{user.stats.challenges}</span>
                              </div>
                              <Progress
                                value={(user.stats.challenges / user.contributions.total) * 100}
                                className="h-2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Detailed Statistics
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line">{user.bio}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Edit className="h-4 w-4" />
                    <span>Edit Bio</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

