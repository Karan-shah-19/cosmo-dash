import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import authHero from "@/assets/auth-hero.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <img src={authHero} alt="RetailPro Dashboard" className="w-full h-auto mb-8 rounded-lg shadow-xl" />
          <h2 className="text-3xl font-bold mb-4">Welcome back to RetailPro</h2>
          <p className="text-white/90 leading-relaxed">
            Access your comprehensive retail management dashboard and take control of your business operations.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src={logo} alt="RetailPro" className="h-12 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Sign in to your account</h1>
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Create one here
              </Link>
            </p>
          </div>

          <div className="card-gradient rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button className="btn-gradient w-full py-3 text-base font-medium">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;