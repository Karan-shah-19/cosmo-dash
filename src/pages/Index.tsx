import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, Users, Zap } from "lucide-react";
import logo from "@/assets/logo.png";
import dashboardHero from "@/assets/dashboard-hero.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card-gradient px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RetailPro" className="h-8 w-8" />
            <span className="font-bold text-xl">RetailPro</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button className="btn-gradient hover-lift">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Manage Your
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Retail Empire</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The complete SaaS platform for modern retailers. Track inventory, manage orders, 
                  analyze performance, and scale your business with powerful insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="btn-gradient hover-lift w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="hover-lift w-full sm:w-auto">
                    View Demo
                  </Button>
                </Link>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">1000+ Retailers</p>
                    <p className="text-sm text-muted-foreground">Trust our platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success-light rounded-lg">
                    <BarChart3 className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium">Real-time Analytics</p>
                    <p className="text-sm text-muted-foreground">Data-driven insights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={dashboardHero} 
                alt="RetailPro Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and insights to help you manage, grow, and optimize your retail business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-gradient p-8 rounded-xl hover-lift">
              <div className="p-3 bg-primary-light rounded-lg w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Get deep insights into your sales performance, inventory trends, and customer behavior 
                with our powerful analytics dashboard.
              </p>
            </div>

            <div className="card-gradient p-8 rounded-xl hover-lift">
              <div className="p-3 bg-success-light rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retailer Management</h3>
              <p className="text-muted-foreground">
                Manage your entire retail network from one central dashboard. Track performance, 
                communication, and partnerships effortlessly.
              </p>
            </div>

            <div className="card-gradient p-8 rounded-xl hover-lift">
              <div className="p-3 bg-warning-light rounded-lg w-fit mb-6">
                <Shield className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-level security with advanced encryption, role-based access control, 
                and comprehensive audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-gradient p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to transform your retail business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of retailers who trust RetailPro to manage and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="btn-gradient hover-lift">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="hover-lift">
                  Sign In to Your Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card-gradient px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="RetailPro" className="h-6 w-6" />
            <span className="font-semibold">RetailPro</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 RetailPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
