import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

const KPICard = ({ title, value, change, icon: Icon, trend }: KPICardProps) => {
  const isPositive = trend === "up";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  
  return (
    <Card className="card-gradient hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${isPositive ? 'bg-success-light' : 'bg-destructive/10'}`}>
            <Icon className={`h-6 w-6 ${isPositive ? 'text-success' : 'text-destructive'}`} />
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
            <TrendIcon className="h-4 w-4" />
            {change}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-muted-foreground text-sm">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default KPICard;