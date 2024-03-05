
import InquiryReceive from '@/components/form/InquiryReceive';
import ReceiveInquiry from '@/components/table/ReceiveInquiry';
import { columnsReceive} from '@/lib/columns/columnReceive'
import { receiveInquiry } from '@/lib/mockData'

export default function Receive()
{
  
    return <div className="grid gap-[32px]">
        <div id="Form">
            <InquiryReceive />
        </div>
        <div className='grid grid-cols-1'>
            <ReceiveInquiry columns={columnsReceive} data={receiveInquiry} />
        </div>
    </div>
}

