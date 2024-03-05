import { redirect } from "next/navigation";

export default function page()
{
    redirect('/dcc/monitoring/dashboard');
    return <div>Hello page</div>;
}