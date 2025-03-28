import Link from "next/link"
import { ArrowLeft, Bookmark, Calendar, Clock, Heart, MessageSquare, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="container max-w-4xl py-12 md:py-20">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#D4A373] hover:bg-[#c29366]">Featured</Badge>
                <Badge variant="outline">Web Development</Badge>
                <Badge variant="outline">Trends</Badge>
                <Badge variant="outline">AI</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Future of Web Development: Trends to Watch in 2025
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">March 24, 2025</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">8 min read</span>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@emma" />
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Emma Johnson</p>
                  <p className="text-xs text-muted-foreground">Tech Evangelist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] mb-10 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Featured image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="lead">
              As we move further into 2025, the landscape of web development continues to evolve at a rapid pace. New
              technologies, methodologies, and user expectations are reshaping how we build for the web. In this
              article, we'll explore the most significant trends that are defining the future of web development.
            </p>

            <h2>1. AI-Assisted Development</h2>
            <p>
              Artificial intelligence is no longer just a buzzword in web development—it's becoming an essential part of
              the developer's toolkit. AI-powered coding assistants have evolved from simple code completion tools to
              sophisticated pair programmers that can:
            </p>
            <ul>
              <li>Generate entire components based on natural language descriptions</li>
              <li>Identify and fix bugs before they make it to production</li>
              <li>Optimize code for performance and accessibility</li>
              <li>Suggest architectural improvements based on best practices</li>
            </ul>
            <p>
              These tools are not replacing developers but rather augmenting their capabilities, allowing them to focus
              on higher-level problems while AI handles the repetitive aspects of coding.
            </p>

            <div className="bg-muted p-4 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-2">Code Example: Using AI to Generate a Component</h3>
              <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
                <code>{`// Example of using an AI assistant to generate a React component
import { generateComponent } from 'ai-dev-assistant';

const TodoListComponent = await generateComponent({
  description: "Create a Todo list component with the ability to add, 
  complete, and delete tasks. Include dark mode support.",
  framework: "react",
  styling: "tailwind",
  accessibility: true
});

export default TodoListComponent;`}</code>
              </pre>
            </div>

            <h2>2. WebAssembly Goes Mainstream</h2>
            <p>
              WebAssembly (Wasm) has moved beyond experimental status to become a core technology for high-performance
              web applications. By allowing developers to run code written in languages like Rust, C++, and Go at
              near-native speed in the browser, Wasm is enabling a new class of web applications:
            </p>
            <ul>
              <li>Browser-based video and image editing tools with professional-grade performance</li>
              <li>Complex data visualization and scientific computing applications</li>
              <li>Games and simulations that previously required native applications</li>
              <li>On-device machine learning models that preserve user privacy</li>
            </ul>

            <h2>3. Edge Computing Transforms Architecture</h2>
            <p>
              The traditional client-server model is giving way to edge computing, where computation happens closer to
              the user. This shift is fundamentally changing how we architect web applications:
            </p>
            <ul>
              <li>Server components that render at the edge, reducing latency</li>
              <li>Distributed databases with edge-local replicas for faster data access</li>
              <li>Content delivery networks that execute code, not just cache static assets</li>
              <li>API routes that run globally, eliminating the need for regional deployments</li>
            </ul>

            <blockquote>
              "The future of web development isn't about choosing between client-side and server-side rendering—it's
              about intelligently distributing computation across the client, server, and edge based on each component's
              specific needs."
              <cite>— Dr. Sarah Chen, Web Architecture Specialist</cite>
            </blockquote>

            <h2>4. Sustainability-Driven Development</h2>
            <p>
              As awareness of the environmental impact of digital products grows, web developers are increasingly
              adopting practices to reduce the carbon footprint of their applications:
            </p>
            <ul>
              <li>Green hosting providers powered by renewable energy</li>
              <li>Performance optimization as an environmental imperative, not just a user experience concern</li>
              <li>Tools that measure and report on a website's carbon emissions</li>
              <li>Design systems that consider energy consumption on users' devices</li>
            </ul>

            <h2>5. Immersive Web Experiences</h2>
            <p>
              The line between web applications and native experiences continues to blur as browsers gain capabilities
              previously limited to installed software:
            </p>
            <ul>
              <li>WebXR enabling virtual and augmented reality experiences directly in the browser</li>
              <li>Spatial interfaces that leverage device sensors for intuitive navigation</li>
              <li>Haptic feedback APIs that add a tactile dimension to web interactions</li>
              <li>Voice and gesture controls becoming standard interaction patterns</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              The web development landscape of 2025 is characterized by a blend of technological advancement and
              human-centered concerns. As developers, our challenge is to harness these new capabilities while creating
              experiences that are accessible, performant, and sustainable. By staying informed about these trends and
              thoughtfully incorporating them into our work, we can shape a web that better serves all users.
            </p>
          </div>

          <div className="flex items-center justify-between mt-10 py-4 border-t border-b">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-sm text-muted-foreground">215 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bookmark className="h-5 w-5" />
                <span className="sr-only">Bookmark</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6">Comments (76)</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user1" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Great article! I've been experimenting with WebAssembly for a data visualization project, and the
                    performance gains are substantial. Would love to see a follow-up piece on optimizing Wasm modules
                    for different use cases.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span className="text-xs">42</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">Reply</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user2" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alice Rodriguez</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    The section on sustainability-driven development resonated with me. I've been using the Website
                    Carbon Calculator to audit my projects, and it's eye-opening to see the environmental impact of
                    design decisions. Has anyone here implemented carbon budgets for their web projects?
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span className="text-xs">28</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">Reply</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user3" />
                  <AvatarFallback>MT</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Michael Tran</p>
                      <p className="text-xs text-muted-foreground">8 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    I'm particularly excited about the AI-assisted development tools. They've already changed how I
                    approach coding. The example you provided is similar to what I've been using, though I've found that
                    providing more specific constraints yields better results.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span className="text-xs">19</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">Reply</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full">Load More Comments</Button>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">
                    <Link href="#" className="hover:underline">
                      10 Performance Optimization Techniques for Modern Web Apps
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Practical strategies to improve loading times and runtime performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">
                    <Link href="#" className="hover:underline">
                      Building Accessible UIs: Beyond the Basics
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced techniques for creating truly inclusive web experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

