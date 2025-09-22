import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Set new password</h1>
          <p className="text-muted-foreground">
            Please enter your new password below. Make sure it's strong and secure.
          </p>
        </div>

        <div className="card-gradient rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                New password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-all duration-200"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-all duration-200"
                placeholder="Confirm new password"
              />
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Password requirements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  At least 8 characters
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  At least one uppercase letter
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  At least one number
                </li>
              </ul>
            </div>

            <Button className="btn-gradient w-full py-3 text-base font-medium">
              Update password
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;