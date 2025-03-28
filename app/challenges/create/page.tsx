import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export default function CreateChallengePage() {
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

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Create a Challenge</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Challenge the community with a coding task that tests skills and sparks creativity.
              </p>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
              <CardDescription>
                Please fill out the form below. All fields are required unless marked optional.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge Title</Label>
                    <Input id="title" placeholder="e.g. Build a Responsive Weather Dashboard" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Challenge Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a clear and concise description of the challenge. What will participants be building or solving?"
                      className="min-h-24"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="challenge-type">Challenge Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select challenge type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly Challenge</SelectItem>
                          <SelectItem value="monthly">Monthly Project</SelectItem>
                          <SelectItem value="hackathon">Hackathon</SelectItem>
                          <SelectItem value="competition">Competition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Beginner</SelectItem>
                          <SelectItem value="2">Easy</SelectItem>
                          <SelectItem value="3">Intermediate</SelectItem>
                          <SelectItem value="4">Advanced</SelectItem>
                          <SelectItem value="5">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Challenge Timeline</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <DatePicker />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <DatePicker />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Technologies & Skills</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Relevant Technologies (select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 pt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="javascript" />
                        <label htmlFor="javascript" className="text-sm">
                          JavaScript
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="typescript" />
                        <label htmlFor="typescript" className="text-sm">
                          TypeScript
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="react" />
                        <label htmlFor="react" className="text-sm">
                          React
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="node" />
                        <label htmlFor="node" className="text-sm">
                          Node.js
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="python" />
                        <label htmlFor="python" className="text-sm">
                          Python
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="html-css" />
                        <label htmlFor="html-css" className="text-sm">
                          HTML/CSS
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="golang" />
                        <label htmlFor="golang" className="text-sm">
                          Go
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rust" />
                        <label htmlFor="rust" className="text-sm">
                          Rust
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="java" />
                        <label htmlFor="java" className="text-sm">
                          Java
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="csharp" />
                        <label htmlFor="csharp" className="text-sm">
                          C#
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="aws" />
                        <label htmlFor="aws" className="text-sm">
                          AWS
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="docker" />
                        <label htmlFor="docker" className="text-sm">
                          Docker
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-techs">Additional Technologies</Label>
                    <Input id="additional-techs" placeholder="e.g. Firebase, MongoDB, GraphQL, etc." />
                    <p className="text-xs text-muted-foreground">Separate with commas</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Challenge Requirements</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rules">Challenge Rules</Label>
                    <Textarea
                      id="rules"
                      placeholder="List the rules for this challenge. Each rule should be on a new line."
                      className="min-h-24"
                    />
                    <p className="text-xs text-muted-foreground">Each rule on a new line</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Technical Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="List the specific technical requirements participants need to fulfill. Each requirement should be on a new line."
                      className="min-h-24"
                    />
                    <p className="text-xs text-muted-foreground">Each requirement on a new line</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="judging">Judging Criteria</Label>
                    <Textarea
                      id="judging"
                      placeholder="Specify how submissions will be evaluated. Format: Criteria (Percentage) - e.g., 'Code Quality (30%)'"
                      className="min-h-24"
                    />
                    <p className="text-xs text-muted-foreground">Each criterion on a new line with percentage weight</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Prizes & Rewards</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="prize-description">Prize Description</Label>
                    <Textarea
                      id="prize-description"
                      placeholder="Describe the prizes for winners. What will participants receive for placing 1st, 2nd, 3rd, etc."
                      className="min-h-16"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="prize-amount">Prize Amount (Optional)</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                          $
                        </span>
                        <Input id="prize-amount" placeholder="e.g. 500" className="rounded-l-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional-rewards">Additional Rewards (Optional)</Label>
                      <Input id="additional-rewards" placeholder="e.g. Featured on homepage" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Resources</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resources">Helpful Resources (Optional)</Label>
                    <Textarea
                      id="resources"
                      placeholder="List any articles, tutorials, or documentation that might help participants. Format: Title - URL"
                      className="min-h-16"
                    />
                    <p className="text-xs text-muted-foreground">One resource per line</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="space-y-1 leading-none">
                    <label htmlFor="terms" className="text-sm font-medium">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                    <p className="text-sm text-muted-foreground">
                      I confirm that I have the right to issue this challenge and award any prizes offered.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
              <Button variant="outline" className="w-full sm:w-auto">
                Save as Draft
              </Button>
              <Button className="w-full sm:w-auto bg-[#6F4E37] hover:bg-[#5a3f2d]">Publish Challenge</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

