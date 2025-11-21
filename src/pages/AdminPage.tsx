import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PortfolioManager from "@/components/admin/PortfolioManager";
import ContactSubmissions from "@/components/admin/ContactSubmissions";
import { Shield } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your website content and view contact submissions
          </p>
        </div>

        {/* Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 xl:w-[400px]">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Management</CardTitle>
                <CardDescription>
                  Add, edit, or remove portfolio items displayed on the website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PortfolioManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
                <CardDescription>
                  View and manage contact form submissions from visitors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactSubmissions />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
