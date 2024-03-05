import OptionsPickDeilvery from "@/components/form/OptionsPickDeilvery";
import TableComponent from "@/components/table/Table";


export default function page()
{
    return <div className="grid gap-[32px]">
        <div id="Form">
            <OptionsPickDeilvery />
        </div>
        <div className='grid grid-cols-1'>
            <TableComponent table_name={"picking"} title={"EXPORT PICKING"} />
        </div>
    </div>
}