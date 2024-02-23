import Icon from '@/components/IconLucide'
import {MenuSidebar} from '@/lib/types/type'

export const menuList:MenuSidebar[] = [
    {
        group: "Monitoring",
        item:[
            {
                link:"/dcc/monitoring/dashboard",
                text:"Dashboard",
                icon:<Icon name='layout-dashboard' />
            },
            {
                link:"/dcc/monitoring/monthly",
                text:"Monthly Report",
                icon:<Icon name='calendar-heart' />
            },
            {
                link:"/dcc/monitoring/receive",
                text:"Receive Inquiry",
                icon:<Icon name='hand-coins' />
            },
            {
                link:"/dcc/monitoring/master-data",
                text:"Master Data",
                icon:<Icon name='database-zap' />,
                submenu: true,
                subMenuItems: [
                { title: 'Downtime', path: '/dcc/monitoring/master-data/downtime' },
                { title: 'Monitor', path: '/dcc/monitoring/master-data/monitors' },
                { title: 'Break Times', path: '/dcc/monitoring/master-data/break-times' },
                { title: 'Deliver Status', path: '/dcc/monitoring/master-data/deliver-status' }
                ],
            },
    ]},
    {
        group: "Management",
        item:[
            {
                link:"/dcc/management/master-zone",
                text:"Master Zone",
                icon:<Icon name='component' />
            },
            {
                link:"/dcc/management/adjust-time",
                text:"Adjust Time",
                icon:<Icon name='hourglass' />
            },
            {
                link:"/dcc/management/export-data",
                text:"Export Data",
                icon:<Icon name='file-up' />,
                submenu: true,
                subMenuItems: [
                { title: 'Ecport Data', path: '/dcc/management/export-data/export-data' },
                { title: 'Export Picking', path: '/dcc/management/export-data/export-picking' },
                { title: 'Export D3DIWEK', path: '/dcc/management/export-data/export-d3diwek' },
                { title: 'Export Monitoring', path: '/dcc/management/export-data/export-monitoring' }
                ],
            },
    ]},
]
