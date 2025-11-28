import { Button } from "@/components/ui/button"
import { handleLogin } from "@/api";

export default async function LoginPage( ) {

  return (
    <>
        <header className="mt-8 block text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Code Blocks</h1>
        </header>
      <div className="flex items-center justify-center h-screen">
          
          <form
            action={handleLogin}
            className="w-full max-w-sm space-y-6 rounded-lg border border-input bg-card p-8 shadow-sm"
          >
          <h1 className="text-2xl font-semibold text-center text-foreground">Login</h1>

          <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-foreground">
              Username
              </label>
              <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>

          <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
              </label>
              <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Login
          </Button>
          </form>
      </div>
    </>
  )
}
