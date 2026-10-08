import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { ChartBar, LayoutGrid } from "lucide-react";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">
          <ChartBar className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="category">
          <LayoutGrid className="h-4 w-4" />
          By Category
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        <OverviewCards />
      </TabsContent>

      <TabsContent value="category" className="mt-4">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
