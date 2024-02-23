
import InquiryReceive from '@/components/form/InquiryReceive';
import TableComponent from '@/components/table/Table';

export default function Receive()
{
  
    return <div className="grid gap-[32px]">
        <div id="Form">
            <InquiryReceive />
        </div>
        <div className='grid grid-cols-1'>
            <TableComponent table_name='early' title='INQUIRY RECEIVE DATA' />
        </div>
    </div>
}

