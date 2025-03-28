import Link from "next/link"
import { Coffee, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MentorApplicationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span>Dev's Cafe Hub</span>
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Become a Mentor</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Share your expertise and help shape the next generation of developers.
              </p>
            </div>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Mentor Application</CardTitle>
              <CardDescription>
                Please fill out the form below. All fields are required unless marked optional.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" placeholder="e.g. Senior Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="Where do you currently work?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                    <Input id="linkedin" placeholder="https://linkedin.com/in/your-profile" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile (Optional)</Label>
                    <Input id="github" placeholder="https://github.com/your-username" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Profile Photo</h3>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed border-input p-8">
                  <div className="bg-muted rounded-full p-4">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-sm text-muted-foreground">Drag & drop your photo here or</p>
                    <div className="mt-2">
                      <Button variant="secondary" size="sm">
                        Choose file
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (max. 2MB)</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Professional Experience</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="years-of-experience">Years of Professional Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Areas of Expertise (select up to 5)</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 pt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="frontend" />
                        <label htmlFor="frontend" className="text-sm">
                          Frontend Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="backend" />
                        <label htmlFor="backend" className="text-sm">
                          Backend Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fullstack" />
                        <label htmlFor="fullstack" className="text-sm">
                          Full Stack Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile" />
                        <label htmlFor="mobile" className="text-sm">
                          Mobile Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="devops" />
                        <label htmlFor="devops" className="text-sm">
                          DevOps
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ui-ux" />
                        <label htmlFor="ui-ux" className="text-sm">
                          UI/UX Design
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="data" />
                        <label htmlFor="data" className="text-sm">
                          Data Science
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cloud" />
                        <label htmlFor="cloud" className="text-sm">
                          Cloud Computing
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="security" />
                        <label htmlFor="security" className="text-sm">
                          Security
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="career" />
                        <label htmlFor="career" className="text-sm">
                          Career Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="leadership" />
                        <label htmlFor="leadership" className="text-sm">
                          Technical Leadership
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="architecture" />
                        <label htmlFor="architecture" className="text-sm">
                          System Architecture
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Key Skills & Technologies</Label>
                    <Input id="skills" placeholder="e.g. React, Node.js, AWS, TypeScript, etc." />
                    <p className="text-xs text-muted-foreground">Separate skills with commas</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your experience, accomplishments, and why you want to mentor others (200-500 words)"
                      className="min-h-32"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Mentorship Preferences</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Availability (hours per week)</Label>
                    <RadioGroup defaultValue="1-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-2" id="1-2-hours" />
                        <Label htmlFor="1-2-hours">1-2 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="3-5-hours" />
                        <Label htmlFor="3-5-hours">3-5 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="5-plus-hours" />
                        <Label htmlFor="5-plus-hours">5+ hours</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Mentorship Format</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 pt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="one-on-one" />
                        <label htmlFor="one-on-one" className="text-sm">
                          One-on-one sessions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="group" />
                        <label htmlFor="group" className="text-sm">
                          Group sessions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="code-review" />
                        <label htmlFor="code-review" className="text-sm">
                          Code reviews
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pair-programming" />
                        <label htmlFor="pair-programming" className="text-sm">
                          Pair programming
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mentorship-statement">Why do you want to be a mentor?</Label>
                    <Textarea
                      id="mentorship-statement"
                      placeholder="What motivates you to mentor others? What do you hope to achieve as a mentor? (100-300 words)"
                      className="min-h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mentorship-approach">What is your mentorship approach?</Label>
                    <Textarea
                      id="mentorship-approach"
                      placeholder="How would you describe your mentoring style? How do you approach teaching and guiding others? (100-300 words)"
                      className="min-h-24"
                    />
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
                      I understand that my information will be used to evaluate my application to become a mentor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="commitment" />
                  <div className="space-y-1 leading-none">
                    <label htmlFor="commitment" className="text-sm font-medium">
                      I can commit to at least 3 months of mentorship
                    </label>
                    <p className="text-sm text-muted-foreground">
                      I understand that mentorship relationships require consistency and commitment.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button className="w-full sm:w-auto bg-[#6F4E37] hover:bg-[#5a3f2d]">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

