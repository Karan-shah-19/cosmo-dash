import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const retailers = [
  { id: "1", name: "Tech Plaza Store", location: "New York, NY", phone: "+1 (555) 123-4567", email: "contact@techplaza.com", status: "active", orders: 156, revenue: "$45,200" },
  { id: "2", name: "Digital World", location: "Los Angeles, CA", phone: "+1 (555) 234-5678", email: "info@digitalworld.com", status: "active", orders: 89, revenue: "$28,900" },
  { id: "3", name: "Gadget Hub", location: "Chicago, IL", phone: "+1 (555) 345-6789", email: "sales@gadgethub.com", status: "inactive", orders: 34, revenue: "$12,400" },
  { id: "4", name: "Mobile Zone", location: "Houston, TX", phone: "+1 (555) 456-7890", email: "contact@mobilezone.com", status: "active", orders: 203, revenue: "$67,800" },
  { id: "5", name: "Electronics Express", location: "Phoenix, AZ", phone: "+1 (555) 567-8901", email: "info@electronicsexpress.com", status: "active", orders: 78, revenue: "$23,100" },
];

const Retailers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRetailers = retailers.filter(retailer =>
    retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    retailer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Retailers</h1>
          <p className="text-muted-foreground">Manage your retail network and partnerships</p>
        </div>
        <Button className="btn-gradient hover-lift">
          <Plus className="w-4 h-4 mr-2" />
          Add Retailer
        </Button>
      </div>

      {/* Filters */}
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search retailers by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="hover-lift">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Retailers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRetailers.map((retailer) => (
          <Card key={retailer.id} className="card-gradient hover-lift">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-1">{retailer.name}</CardTitle>
                  <CardDescription className="text-sm">{retailer.location}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={retailer.status === 'active' ? 'status-badge-delivered' : 'status-badge-cancelled'}>
                    {retailer.status}
                  </Badge>
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
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{retailer.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium truncate ml-2">{retailer.email}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{retailer.orders}</div>
                  <div className="text-xs text-muted-foreground">Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{retailer.revenue}</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredRetailers.length === 0 && (
        <Card className="card-gradient">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No retailers found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or add a new retailer to get started.
            </p>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Add First Retailer
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Retailers;