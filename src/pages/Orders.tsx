import { useState } from "react";
import { Search, Filter, Eye, MoreHorizontal, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orders = [
  { id: "1001", customer: "Alice Johnson", retailer: "Tech Plaza Store", product: "iPhone 14 Pro", amount: "$999", status: "delivered", date: "2024-01-15", priority: "high" },
  { id: "1002", customer: "Bob Smith", retailer: "Digital World", product: "MacBook Air", amount: "$1,299", status: "pending", date: "2024-01-15", priority: "medium" },
  { id: "1003", customer: "Carol Davis", retailer: "Gadget Hub", product: "AirPods Pro", amount: "$249", status: "delivered", date: "2024-01-14", priority: "low" },
  { id: "1004", customer: "David Wilson", retailer: "Mobile Zone", product: "iPad Air", amount: "$599", status: "cancelled", date: "2024-01-14", priority: "medium" },
  { id: "1005", customer: "Eva Brown", retailer: "Electronics Express", product: "Apple Watch", amount: "$399", status: "pending", date: "2024-01-13", priority: "high" },
  { id: "1006", customer: "Frank Miller", retailer: "Tech Plaza Store", product: "Samsung Galaxy S24", amount: "$899", status: "delivered", date: "2024-01-13", priority: "low" },
  { id: "1007", customer: "Grace Lee", retailer: "Digital World", product: "iPad Pro", amount: "$1,099", status: "pending", date: "2024-01-12", priority: "high" },
  { id: "1008", customer: "Henry Chen", retailer: "Gadget Hub", product: "MacBook Pro", amount: "$2,399", status: "delivered", date: "2024-01-12", priority: "medium" },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.includes(searchTerm) ||
                         order.retailer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="status-badge-delivered">Delivered</Badge>;
      case "pending":
        return <Badge className="status-badge-pending">Pending</Badge>;
      case "cancelled":
        return <Badge className="status-badge-cancelled">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      case "low":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Track and manage all customer orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hover-lift">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" className="hover-lift">
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by order ID, customer, product, or retailer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>All Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Retailer</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Priority</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">#{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4 text-muted-foreground">{order.retailer}</td>
                    <td className="py-4 px-4">{order.product}</td>
                    <td className="py-4 px-4 font-semibold">{order.amount}</td>
                    <td className="py-4 px-4">{getStatusBadge(order.status)}</td>
                    <td className="py-4 px-4">
                      <span className={`text-sm font-medium capitalize ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
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
                          <DropdownMenuItem>
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Contact Customer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(startIndex + ordersPerPage, filteredOrders.length)} of {filteredOrders.length} orders
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;