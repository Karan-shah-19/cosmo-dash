import { BarChart3, TrendingUp, Users, Package, ShoppingCart, DollarSign, Eye, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import KPICard from "@/components/dashboard/KPICard";
import dashboardHero from "@/assets/dashboard-hero.png";

const recentOrders = [
  { id: "1001", customer: "Alice Johnson", product: "iPhone 14 Pro", amount: "$999", status: "delivered", date: "2024-01-15" },
  { id: "1002", customer: "Bob Smith", product: "MacBook Air", amount: "$1,299", status: "pending", date: "2024-01-15" },
  { id: "1003", customer: "Carol Davis", product: "AirPods Pro", amount: "$249", status: "delivered", date: "2024-01-14" },
  { id: "1004", customer: "David Wilson", product: "iPad Air", amount: "$599", status: "cancelled", date: "2024-01-14" },
  { id: "1005", customer: "Eva Brown", product: "Apple Watch", amount: "$399", status: "pending", date: "2024-01-13" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground text-lg">
            Here's an overview of your retail business performance.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img 
            src={dashboardHero} 
            alt="Dashboard Analytics" 
            className="w-48 h-32 object-cover rounded-lg shadow-lg hover-lift"
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Retailers"
          value="1,247"
          change="+12.5%"
          icon={Users}
          trend="up"
        />
        <KPICard
          title="Total Products"
          value="3,891"
          change="+8.2%"
          icon={Package}
          trend="up"
        />
        <KPICard
          title="Total Orders"
          value="12,543"
          change="+23.1%"
          icon={ShoppingCart}
          trend="up"
        />
        <KPICard
          title="Revenue"
          value="$1.2M"
          change="+15.3%"
          icon={DollarSign}
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Orders Over Time
            </CardTitle>
            <CardDescription>
              Track your order volume trends over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Chart visualization would go here</p>
                <p className="text-sm text-muted-foreground mt-1">Integration ready for chart library</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Revenue by Product
            </CardTitle>
            <CardDescription>
              See which products are driving the most revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-success/5 to-warning/5 rounded-lg flex items-center justify-center border-2 border-dashed border-success/20">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-success/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Chart visualization would go here</p>
                <p className="text-sm text-muted-foreground mt-1">Integration ready for chart library</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="card-gradient">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Latest orders from your retail network
              </CardDescription>
            </div>
            <Button variant="outline" className="hover-lift">
              View All Orders
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">#{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4">{order.product}</td>
                    <td className="py-4 px-4 font-semibold">{order.amount}</td>
                    <td className="py-4 px-4">
                      <Badge className={`status-badge-${order.status}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{order.date}</td>
                    <td className="py-4 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;