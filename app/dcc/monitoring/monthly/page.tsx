import MonthlyBarChart from "@/components/Card/MonthlyBarChart";
import DateRangeForm from "@/components/form/DateRangeForm";
import { monthlyData } from "@/lib/mockData";
import MonthlyTable from "@/components/MonthlyTable";
import { PlanActual } from "@/lib/types/type";

async function getData(): Promise<PlanActual[]> {
  return monthlyData;
}
export default async function page() {
  const data = await getData();
  return (
    <div className="grid gap-[32px]">
      <div>
        <DateRangeForm />
      </div>
      <div className="grid grid-cols-1">
        <MonthlyBarChart />
      </div>
      <div className="grid grid-cols-1">
        <MonthlyTable />
      </div>
    </div>
  );
}
