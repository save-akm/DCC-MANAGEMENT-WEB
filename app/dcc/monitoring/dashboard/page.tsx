import DashboardBarChart from "@/components/Card/DashboardBarChart";
import DashboardDonutDay from "@/components/Card/DashboardDonutDay";
import DashboardDonutNight from "@/components/Card/DashboardDonutNgiht";


export default function DashboardPage()
{
    return <div className="grid gap-[32px]">
        <div className="grid grid-cols-2 gap-[32px]">
            <DashboardDonutDay />
            <DashboardDonutNight />
        </div>
        <div className="grid grid-cols-1">
            <DashboardBarChart />
        </div>
    </div>;
}