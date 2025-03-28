import Link from "next/link"
import { Coffee, Github, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F5F5DC] to-white dark:from-[#2C1B13] dark:to-background p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-lg font-bold">
        <Coffee className="h-6 w-6 text-primary" />
        <span>Dev's Cafe Hub</span>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in securely with your preferred platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <Button className="flex items-center justify-center gap-2 h-12 bg-[#24292e] hover:bg-[#1b1f23] text-white">
              <Github className="h-5 w-5" />
              <span>Continue with GitHub</span>
            </Button>
            <Button className="flex items-center justify-center gap-2 h-12 bg-[#5865F2] hover:bg-[#4752c4] text-white">
              <MessageSquare className="h-5 w-5" />
              <span>Continue with Discord</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

