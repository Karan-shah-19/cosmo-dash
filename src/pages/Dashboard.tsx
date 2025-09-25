import { BarChart3, TrendingUp, Users, Package, ShoppingCart, DollarSign, Eye, MoreHorizontal, AlertTriangle, Store, TrendingDown, Calendar, Package2 } from "lucide-react";
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
  { id: "1005", customer: "Eva Brown", product: "Apple Watch", amount: "$399", status: "processing", date: "2024-01-13" },
];

const lowStockProducts = [
  { name: "iPhone 14 Pro", stock: 3, minStock: 10, sku: "IP14P-128" },
  { name: "MacBook Air M2", stock: 1, minStock: 5, sku: "MBA-M2-256" },
  { name: "AirPods Pro 2nd Gen", stock: 2, minStock: 15, sku: "APP-2ND" },
  { name: "iPad Air 5th Gen", stock: 0, minStock: 8, sku: "IPA-5TH" },
];

const retailerInfo = {
  name: "TechHub Store",
  logo: "🏪",
  themeColor: "hsl(213 94% 68%)",
  location: "San Francisco, CA"
};

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-hero text-white">
        <div className="slide-in-left">
          <h1 className="text-4xl font-bold mb-2 text-white">Welcome back, Karan!</h1>
          <p className="text-white/90 text-lg">
            Here's an overview of your retail business performance.
          </p>
        </div>
        <div className="flex-shrink-0 slide-in-right">
          <img 
            src={dashboardHero} 
            alt="Dashboard Analytics" 
            className="w-56 h-36 object-cover rounded-xl shadow-2xl hover-glow"
          />
        </div>
      </div>

      {/* Retailer Summary */}
      <div className="card-retailer rounded-2xl p-6 hover-lift">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl shadow-lg">
            {retailerInfo.logo}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-1">{retailerInfo.name}</h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <Store className="h-4 w-4" />
              {retailerInfo.location}
            </p>
          </div>
          <div className="text-right">
            <div 
              className="w-8 h-8 rounded-full shadow-lg" 
              style={{ backgroundColor: retailerInfo.themeColor }}
            />
            <p className="text-xs text-muted-foreground mt-1">Brand Color</p>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Statistics */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="card-stats rounded-2xl p-6 hover-lift">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Package2 className="h-5 w-5 text-primary" />
              Product Overview
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3,891</div>
                <div className="text-xs text-muted-foreground">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">3,425</div>
                <div className="text-xs text-muted-foreground">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">466</div>
                <div className="text-xs text-muted-foreground">Low Stock</div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Statistics */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="card-gradient rounded-2xl p-6 hover-lift">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-secondary" />
              Order Statistics (Last 30 Days)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">12,543</div>
                <div className="text-xs text-muted-foreground">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">$1.2M</div>
                <div className="text-xs text-muted-foreground">Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">342</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">11,856</div>
                <div className="text-xs text-muted-foreground">Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Low Stock Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Order Chart */}
        <div className="lg:col-span-2">
          <Card className="card-gradient hover-lift rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Weekly Order Trends
              </CardTitle>
              <CardDescription>
                Order volume and revenue trends over the past 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 chart-container flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center fade-in-up">
                  <BarChart3 className="h-16 w-16 text-primary/40 mx-auto mb-4 animate-pulse" />
                  <p className="text-muted-foreground font-medium">Interactive Chart Coming Soon</p>
                  <p className="text-sm text-muted-foreground mt-1">Real-time data visualization</p>
                  <div className="flex gap-2 justify-center mt-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Products */}
        <div className="lg:col-span-1">
          <Card className="card-gradient hover-lift rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Low Stock Alert
              </CardTitle>
              <CardDescription>
                Products requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <div key={product.sku} className="low-stock-item slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.stock === 0 ? 'bg-destructive text-destructive-foreground' : 'bg-warning text-warning-foreground'
                    }`}>
                      {product.stock === 0 ? 'Out of Stock' : 'Low Stock'}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Stock: {product.stock}</span>
                    <span>Min: {product.minStock}</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-2">
                    <div 
                      className={`h-2 rounded-full ${product.stock === 0 ? 'bg-destructive' : 'bg-warning'}`}
                      style={{ width: `${Math.max((product.stock / product.minStock) * 100, 5)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4 btn-gradient hover-glow">
                Reorder Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Orders Table */}
      <Card className="card-gradient rounded-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Recent Orders
              </CardTitle>
              <CardDescription>
                Latest orders from your retail network
              </CardDescription>
            </div>
            <Button variant="outline" className="hover-glow btn-gradient">
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
                {recentOrders.map((order, index) => (
                  <tr key={order.id} className="border-b border-border hover:bg-gradient-primary/5 transition-all duration-200 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <td className="py-4 px-4 font-medium">#{order.id}</td>
                    <td className="py-4 px-4 font-medium">{order.customer}</td>
                    <td className="py-4 px-4">{order.product}</td>
                    <td className="py-4 px-4 font-semibold text-success">{order.amount}</td>
                    <td className="py-4 px-4">
                      <Badge className={`status-badge-${order.status} hover-glow`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{order.date}</td>
                    <td className="py-4 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="hover-glow">
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