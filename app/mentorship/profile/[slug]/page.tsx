import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Github, Globe, Linkedin, MapPin, MessageSquare, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MentorProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the mentor data based on the slug
  // For this example, we'll use mock data
  const mentor = {
    name: "Sarah Chen",
    slug: "sarah-chen",
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    availability: "1-2 hours/week",
    rating: 4.9,
    reviews: 24,
    mentees: 12,
    experience: "7+ years",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "UI/UX", "Performance Optimization", "Accessibility"],
    bio: "I'm a frontend engineer specializing in building scalable and performant web applications. With over 7 years of experience across startups and enterprise companies, I've helped teams implement best practices for frontend architecture, performance optimization, and accessibility. I'm passionate about mentoring developers and helping them level up their frontend skills.",
    approach:
      "My mentorship style is collaborative and goal-oriented. I believe in providing hands-on guidance while encouraging mentees to explore solutions independently. I focus on building a strong foundation of fundamentals while sharing practical, real-world experience. My sessions typically combine code reviews, pair programming, and career discussions tailored to your specific needs and goals.",
    socials: {
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      website: "https://sarahchen.dev",
    },
    sessions: [
      {
        title: "Career Paths in Frontend Development",
        type: "Group Session",
        date: "Mar 30, 2025",
        time: "2:00 PM",
        spots: "12/20",
      },
    ],
    testimonials: [
      {
        name: "Jason Taylor",
        title: "Junior Developer",
        content:
          "Sarah has been an incredible mentor. Her deep knowledge of React and frontend best practices helped me level up my skills significantly. She's patient, encouraging, and provides actionable feedback that I could immediately apply to my work.",
        rating: 5,
      },
      {
        name: "Lisa Wong",
        title: "UX Engineer",
        content:
          "Working with Sarah transformed my approach to frontend development. She helped me understand the intersection of design and engineering, and showed me how to implement accessible UI components that work for everyone. Highly recommend!",
        rating: 5,
      },
      {
        name: "Miguel Rodriguez",
        title: "Mid-level Developer",
        content:
          "Sarah's guidance on performance optimization techniques was invaluable. She helped me identify bottlenecks in my React application and implement solutions that improved loading times by 40%. Her practical, real-world experience is evident in every session.",
        rating: 4.5,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Link
            href="/mentorship"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mentors
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" alt={mentor.name} />
                      <AvatarFallback>
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold">{mentor.name}</h1>
                    <p className="text-muted-foreground">{mentor.title}</p>
                    <p className="text-muted-foreground">{mentor.company}</p>

                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="ml-1 font-medium">{mentor.rating}</span>
                      <span className="mx-1 text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{mentor.reviews} reviews</span>
                    </div>

                    <div className="w-full mt-6">
                      <Button className="w-full bg-[#6F4E37] hover:bg-[#5a3f2d]">Request Mentorship</Button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{mentor.mentees} mentees</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Available {mentor.availability}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{mentor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{mentor.location}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center space-x-4">
                    <Link href={mentor.socials.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={mentor.socials.github} className="text-muted-foreground hover:text-primary">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href={mentor.socials.website} className="text-muted-foreground hover:text-primary">
                      <Globe className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mentor.sessions.map((session, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#D4A373] hover:bg-[#c29366]">{session.type}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{session.date}</span>
                        </div>
                      </div>
                      <p className="font-medium">{session.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{session.time}</span>
                        <span className="text-muted-foreground">{session.spots} spots</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        Register
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="approach">Mentorship Approach</TabsTrigger>
                  <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {mentor.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{mentor.bio}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="approach" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mentorship Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{mentor.approach}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="testimonials" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Testimonials from Mentees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {mentor.testimonials.map((testimonial, index) => (
                          <div key={index} className="space-y-2 pb-6 border-b last:border-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-10 w-10 mr-2">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=40&width=40&text=${testimonial.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}`}
                                    alt={testimonial.name}
                                  />
                                  <AvatarFallback>
                                    {testimonial.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{testimonial.name}</p>
                                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? "text-yellow-500" : "text-muted"}`}
                                    fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                                  />
                                ))}
                                {testimonial.rating % 1 > 0 && (
                                  <Star className="h-4 w-4 text-yellow-500" strokeWidth={1} fill="url(#half-star)" />
                                )}
                              </div>
                            </div>
                            <p className="text-sm pt-2">{testimonial.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Contact {mentor.name}</CardTitle>
                  <CardDescription>
                    Have a specific question before requesting mentorship? Send a message.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <MessageSquare className="h-12 w-12 text-[#6F4E37]" />
                    <div>
                      <p className="font-medium">Send a direct message</p>
                      <p className="text-sm text-muted-foreground">Messages are limited to potential mentees only.</p>
                    </div>
                    <Button className="ml-auto">Send Message</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

