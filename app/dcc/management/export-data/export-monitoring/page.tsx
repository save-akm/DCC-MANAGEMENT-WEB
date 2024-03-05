import OptionsMonitorAll from "@/components/form/OptionsMonitorAll"
import TableComponent from "@/components/table/Table"


export default function page()
{
    return <div className="grid gap-[32px]">
        <OptionsMonitorAll />
        <div className='grid grid-cols-1'>
        <TableComponent table_name={"monitorall"} title={"Monitor All"} />
        </div>
    </div>
}