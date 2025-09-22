import { useState } from "react";
import { Save, Upload, Palette, Globe, Bell, Shield, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const themes = [
    { id: "default", name: "Default Blue", primary: "#6366f1", secondary: "#8b5cf6" },
    { id: "green", name: "Forest Green", primary: "#10b981", secondary: "#059669" },
    { id: "purple", name: "Royal Purple", primary: "#8b5cf6", secondary: "#7c3aed" },
    { id: "orange", name: "Sunset Orange", primary: "#f59e0b", secondary: "#d97706" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your account profile information and email address.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/api/placeholder/80/80" alt="Profile" />
                  <AvatarFallback className="bg-gradient-primary text-white text-xl font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" className="hover-lift">
                    <Upload className="w-4 h-4 mr-2" />
                    Change Avatar
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@retailpro.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself..."
                  defaultValue="Retail operations manager with 10+ years of experience in e-commerce and inventory management."
                  rows={3}
                />
              </div>

              <Button className="btn-gradient hover-lift">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme & Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">Color Theme</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {themes.map((theme) => (
                    <div
                      key={theme.id}
                      className="p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors hover-lift"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <div 
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: theme.secondary }}
                        />
                      </div>
                      <h4 className="font-medium">{theme.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {theme.id === "default" ? "Current theme" : "Preview theme"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-base font-medium">Logo & Branding</Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="logo">Company Logo</Label>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="w-16 h-16 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                        <Upload className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <Button variant="outline">Upload New Logo</Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="RetailPro" className="mt-2" />
                  </div>
                </div>
              </div>

              <Button className="btn-gradient hover-lift">
                <Save className="w-4 h-4 mr-2" />
                Save Appearance
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose how you want to be notified about important events.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email for orders, inventory alerts, and system updates.
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, email: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get instant notifications in your browser for urgent alerts.
                    </p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, push: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive text messages for critical system alerts and order updates.
                    </p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, sms: checked }))
                    }
                  />
                </div>
              </div>

              <Button className="btn-gradient hover-lift">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" className="mt-2" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-base font-medium">Two-Factor Authentication</Label>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">SMS Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>

              <Button className="btn-gradient hover-lift">
                <Save className="w-4 h-4 mr-2" />
                Update Security
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Integrations & API
              </CardTitle>
              <CardDescription>
                Connect with third-party services and manage API access.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <h4 className="font-medium">Shopify Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Sync products and orders with your Shopify store
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      W
                    </div>
                    <div>
                      <h4 className="font-medium">WooCommerce</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with your WooCommerce website
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Z
                    </div>
                    <div>
                      <h4 className="font-medium">Zapier</h4>
                      <p className="text-sm text-muted-foreground">
                        Automate workflows with 1000+ apps
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-base font-medium">API Keys</Label>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="apiKey">API Key</Label>
                    <div className="flex gap-2 mt-2">
                      <Input 
                        id="apiKey" 
                        value="rp_1234567890abcdef..." 
                        readOnly 
                        className="font-mono"
                      />
                      <Button variant="outline">Copy</Button>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;