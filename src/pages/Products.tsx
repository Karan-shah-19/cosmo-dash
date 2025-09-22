import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2, MoreHorizontal, Package } from "lucide-react";
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
import productsImage from "@/assets/products.png";

const products = [
  { id: "1", name: "iPhone 14 Pro", category: "Smartphones", price: "$999", stock: 45, image: productsImage, status: "active", sales: 156 },
  { id: "2", name: "MacBook Air M2", category: "Laptops", price: "$1,299", stock: 23, image: productsImage, status: "active", sales: 89 },
  { id: "3", name: "AirPods Pro", category: "Audio", price: "$249", stock: 0, image: productsImage, status: "out_of_stock", sales: 234 },
  { id: "4", name: "iPad Air", category: "Tablets", price: "$599", stock: 67, image: productsImage, status: "active", sales: 123 },
  { id: "5", name: "Apple Watch Series 9", category: "Wearables", price: "$399", stock: 34, image: productsImage, status: "active", sales: 187 },
  { id: "6", name: "Samsung Galaxy S24", category: "Smartphones", price: "$899", stock: 12, image: productsImage, status: "low_stock", sales: 76 },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Smartphones", "Laptops", "Audio", "Tablets", "Wearables"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string, stock: number) => {
    if (status === "out_of_stock" || stock === 0) {
      return <Badge className="status-badge-cancelled">Out of Stock</Badge>;
    }
    if (status === "low_stock" || stock < 20) {
      return <Badge className="status-badge-pending">Low Stock</Badge>;
    }
    return <Badge className="status-badge-delivered">In Stock</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog and inventory</p>
        </div>
        <Button className="btn-gradient hover-lift">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="hover-lift"
                >
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="card-gradient hover-lift overflow-hidden">
            <div className="aspect-square bg-muted/30 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                {getStatusBadge(product.status, product.stock)}
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg mb-1 truncate">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.category}</CardDescription>
                </div>
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
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <span className="text-sm text-muted-foreground">
                  {product.stock} in stock
                </span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-semibold">{product.sales}</div>
                  <div className="text-xs text-muted-foreground">Sales</div>
                </div>
                <Button size="sm" className="btn-gradient">
                  <Package className="w-4 h-4 mr-2" />
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <Card className="card-gradient">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or add a new product to get started.
            </p>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Add First Product
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Products;