import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Heart,
  MessageSquare,
  Share,
  ThumbsUp,
  Trophy,
  Users,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function ChallengePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the challenge data based on the slug
  // For this example, we'll use mock data
  const challenge = {
    title: "Weekly Coding Challenge: Build a CLI Tool",
    slug: "cli-tool",
    description:
      "Create a command-line utility that solves a real-world problem. Your tool should be user-friendly, well-documented, and handle errors gracefully.",
    status: "Active",
    endDate: "Mar 30, 2025",
    daysLeft: 3,
    prize: "$500 and featured on homepage",
    difficulty: 3, // out of 5
    participants: 24,
    technologies: ["JavaScript", "Python", "Rust", "Go"],
    host: {
      name: "James Davis",
      title: "Challenge Host",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    rules: [
      "Your CLI tool must solve a real-world problem",
      "It should be well-documented with installation and usage instructions",
      "Code must be original and created for this challenge",
      "You must handle errors gracefully with helpful error messages",
      "Tool should follow best practices for the language you choose",
      "Submissions are due by the challenge end date",
    ],
    requirements: [
      "Command-line arguments or interactive prompts for user input",
      "Help command that explains all available options",
      "Proper error handling and user feedback",
      "Documentation including installation and usage instructions",
      "Tests that verify your tool works as expected",
    ],
    judging: [
      "Usefulness (30%): How practical and valuable is your solution?",
      "Code Quality (25%): Is your code clean, well-structured, and well-documented?",
      "User Experience (25%): Is your tool intuitive and easy to use?",
      "Creativity (10%): Does your solution demonstrate innovative thinking?",
      "Testability (10%): Is your solution well-tested?",
    ],
    submissions: [
      {
        id: 1,
        user: {
          name: "Thomas Wilson",
          avatar: "/placeholder.svg?height=32&width=32",
          title: "Backend Engineer",
        },
        projectName: "LogParser",
        description: "A tool for analyzing and extracting insights from log files with customizable filters.",
        technologies: ["Python", "Click"],
        submittedAt: "Mar 20, 2025",
        likes: 18,
        comments: 7,
      },
      {
        id: 2,
        user: {
          name: "Sophia Lee",
          avatar: "/placeholder.svg?height=32&width=32",
          title: "Full Stack Developer",
        },
        projectName: "EnvSetup",
        description: "A tool that automates development environment setup for different types of projects.",
        technologies: ["JavaScript", "Node.js"],
        submittedAt: "Mar 22, 2025",
        likes: 15,
        comments: 5,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          name: "Alex Kim",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        content: "Is there a specific problem domain we should focus on, or is any real-world problem acceptable?",
        date: "Mar 15, 2025",
        likes: 3,
        replies: [
          {
            id: 2,
            user: {
              name: "James Davis",
              avatar: "/placeholder.svg?height=32&width=32",
            },
            content:
              "Any real-world problem is acceptable! We want to see a diverse range of solutions. Just make sure to explain what problem your tool is solving in your submission.",
            date: "Mar 15, 2025",
            likes: 2,
          },
        ],
      },
      {
        id: 3,
        user: {
          name: "Priya Singh",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        content:
          "Can we submit a tool that we've started working on before this challenge, or does it need to be created from scratch?",
        date: "Mar 16, 2025",
        likes: 4,
        replies: [
          {
            id: 4,
            user: {
              name: "James Davis",
              avatar: "/placeholder.svg?height=32&width=32",
            },
            content:
              "For this challenge, we're looking for tools created specifically for the challenge. However, you can certainly use a previous idea as inspiration and create a new implementation!",
            date: "Mar 16, 2025",
            likes: 1,
          },
        ],
      },
    ],
    resources: [
      {
        title: "Building CLI Tools with Node.js",
        type: "Article",
        link: "#",
      },
      {
        title: "Python Click: Command Line Interfaces Made Simple",
        type: "Documentation",
        link: "#",
      },
      {
        title: "CLI UX Best Practices",
        type: "Guide",
        link: "#",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Link
            href="/challenges"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenges
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#D4A373] hover:bg-[#c29366]">{challenge.status}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Ends in {challenge.daysLeft} days</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mt-2">{challenge.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {challenge.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={challenge.host.avatar} alt={challenge.host.name} />
                      <AvatarFallback>
                        {challenge.host.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{challenge.host.name}</p>
                      <p className="text-xs text-muted-foreground">{challenge.host.title}</p>
                    </div>
                  </div>

                  <Tabs defaultValue="details">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="submissions">Submissions</TabsTrigger>
                      <TabsTrigger value="discussion">Discussion</TabsTrigger>
                      <TabsTrigger value="resources">Resources</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="mt-6 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Challenge Rules</h3>
                        <ul className="space-y-2">
                          {challenge.rules.map((rule, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight className="mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0" />
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Requirements</h3>
                        <ul className="space-y-2">
                          {challenge.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight className="mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Judging Criteria</h3>
                        <ul className="space-y-2">
                          {challenge.judging.map((criteria, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight className="mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0" />
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="submissions" className="mt-6">
                      <div className="space-y-6">
                        {challenge.submissions.map((submission) => (
                          <Card key={submission.id}>
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src={submission.user.avatar} alt={submission.user.name} />
                                    <AvatarFallback>
                                      {submission.user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{submission.user.name}</p>
                                    <p className="text-xs text-muted-foreground">{submission.user.title}</p>
                                  </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Submitted on {submission.submittedAt}
                                </div>
                              </div>
                              <CardTitle className="mt-4 text-xl">{submission.projectName}</CardTitle>
                              <CardDescription>{submission.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {submission.technologies.map((tech, index) => (
                                  <Badge key={index} variant="outline">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between border-t pt-3">
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <Heart className="h-4 w-4" />
                                  <span>{submission.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{submission.comments}</span>
                                </Button>
                              </div>
                              <Button size="sm">View Project</Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="discussion" className="mt-6">
                      <div className="space-y-6">
                        {challenge.comments.map((comment) => (
                          <div key={comment.id} className="space-y-4">
                            <div className="flex gap-4">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                                <AvatarFallback>
                                  {comment.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">{comment.user.name}</p>
                                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                                </div>
                                <p className="text-sm">{comment.content}</p>
                                <div className="flex items-center gap-4 pt-1">
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    <span className="text-xs">{comment.likes}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <MessageSquare className="h-4 w-4 mr-1" />
                                    <span className="text-xs">Reply</span>
                                  </Button>
                                </div>
                              </div>
                            </div>

                            {comment.replies && comment.replies.length > 0 && (
                              <div className="pl-14 space-y-4">
                                {comment.replies.map((reply) => (
                                  <div key={reply.id} className="flex gap-4">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                                      <AvatarFallback>
                                        {reply.user.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                      <div className="flex items-center justify-between">
                                        <p className="font-medium">{reply.user.name}</p>
                                        <p className="text-xs text-muted-foreground">{reply.date}</p>
                                      </div>
                                      <p className="text-sm">{reply.content}</p>
                                      <div className="flex items-center gap-4 pt-1">
                                        <Button variant="ghost" size="sm" className="h-8 px-2">
                                          <ThumbsUp className="h-4 w-4 mr-1" />
                                          <span className="text-xs">{reply.likes}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 px-2">
                                          <MessageSquare className="h-4 w-4 mr-1" />
                                          <span className="text-xs">Reply</span>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="mt-6">
                          <h3 className="font-medium mb-2">Add a Comment</h3>
                          <Textarea
                            placeholder="Share your thoughts or questions about this challenge..."
                            className="min-h-24"
                          />
                          <div className="flex justify-end mt-2">
                            <Button>Post Comment</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="resources" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Helpful Resources</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          {challenge.resources.map((resource, index) => (
                            <Card key={index}>
                              <CardHeader className="pb-2">
                                <Badge variant="outline">{resource.type}</Badge>
                                <CardTitle className="mt-2 text-lg">{resource.title}</CardTitle>
                              </CardHeader>
                              <CardFooter>
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={resource.link}>
                                    View Resource
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="border-t flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <Share className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  <Button className="bg-[#6F4E37] hover:bg-[#5a3f2d]">Submit Your Solution</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Challenge Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status</span>
                    <Badge className="bg-[#D4A373] hover:bg-[#c29366]">{challenge.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">End Date</span>
                    <span className="text-sm">{challenge.endDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Time Left</span>
                    <Badge variant="outline">{challenge.daysLeft} days</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Participants</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{challenge.participants}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Difficulty</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < challenge.difficulty ? "text-[#D4A373]" : "text-muted"}`}
                          fill={i < challenge.difficulty ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <span className="text-sm font-medium">Prize</span>
                    <div className="flex items-center mt-2">
                      <Trophy className="h-5 w-5 mr-2 text-[#D4A373]" />
                      <span>{challenge.prize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link href="#" className="text-sm font-medium hover:underline">
                        30-Day UI Component Challenge
                      </Link>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>18 days left</span>
                      <span>156 participants</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link href="#" className="text-sm font-medium hover:underline">
                        Algorithm Optimization Challenge
                      </Link>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>5 days left</span>
                      <span>87 participants</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link href="#" className="text-sm font-medium hover:underline">
                        Build a Responsive Portfolio
                      </Link>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>10 days left</span>
                      <span>203 participants</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/challenges">
                      View All Challenges
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
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

