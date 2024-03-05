import { AdjustTime, BreakTime, DeliverStatus, Downtime, MasterZone, Monitor, MonitorAll, PickingDelivery, PlanActual, ReceiveInQuiry } from "./types/type";


export const monthlyData: PlanActual[] = [
    {
        id: "728ed52fd",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321283M0 J003",
        parts_colour: "RED",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: 30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52ff",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "327283M0 J003",
        parts_colour: "RED",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: 65,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f0",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "329283M0 J003",
        parts_colour: "ORANGE",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: 12,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f9",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "326283M0 J003",
        parts_colour: "ORANGE",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -96,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f8",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321183M0 J003",
        parts_colour: "BLUE",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: 87,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f7",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "3212835M0 J003",
        parts_colour: "BLACK",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: 46,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f6",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321283M0 J003",
        parts_colour: "BLUE",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f5",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321283M0 J003",
        parts_colour: "YELLOW",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f4",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321283M0 J003",
        parts_colour: "YELLOW",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f3",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "321283M0 J003",
        parts_colour: "RED",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f2",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "341283M0 J003",
        parts_colour: "GREEN",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
      {
        id: "728ed52f1",
        production_month: "202405",
        delivery_slip: 24051003551000,
        delivery_DockNo: "R3F09",
        parts_no: "341283M0 J003",
        parts_colour: "GREEN",
        supplier_name: "FURUKAWA AUTOMOTIVE SYSTEMS (THAILAND)CO.,LTD.",
        order_Remain_Qty: -30,
        delivery_Datetime: "2024-02-01T09:51:00",
        dlVdateF: "01-02-2024 09:51"
      },
     
]

export const downTimeData:Downtime[] = [
  {
      "dwnondat": "2017-10-24T00:00:00",
      "dwnontim": "0001-01-01T21:30:00",
      "getDLVdatetimeTicks": 636444774000000000,
      "dwnoNdateF": "24-10-2017",
      "dwnoNtimeF": "21:30",
      "dwntime": 30,
      "descrip": "testtest",
      "emaillst": "ben.buu@hotmail.com;benjaporn-wan@hlas.co.th",
      "process": "REC",
      "processrec": true,
      "processpic": false,
      "processdlv": false,
      "processrecValue": "REC",
      "processpicValue": "",
      "processdlvValue": "",
      "allProcess": [
          {
              "text": "Receive",
              "value": "REC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "PIC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Delivery",
              "value": "DLV",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "REC",
              "selectedValue": null,
              "values": null
          }
      ],
      "allStatus": [
          {
              "text": "Waiting",
              "value": "0",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Time out",
              "value": "1",
              "selectedValue": null,
              "values": null
          }
      ],
      "downsts": 0,
      "oT_STATUS": true,
      "oT_STATUSDesc": "Overtime",
      "downstsDesc": "Time out",
      "recdate": "2017-10-24T00:00:00",
      "rectime": "0001-01-01T10:42:07",
      "reCdateF": "24-10-2017",
      "reCtimeF": "10:42",
      "recempid": "000528",
      "upddate": "2017-10-24T10:42:07.444",
      "updempid": "001437"
  },
  {
      "dwnondat": "2024-02-19T00:00:00",
      "dwnontim": "0001-01-01T17:00:00",
      "getDLVdatetimeTicks": 638439588000000000,
      "dwnoNdateF": "19-02-2024",
      "dwnoNtimeF": "17:00",
      "dwntime": 60,
      "descrip": "ZXxZx",
      "emaillst": "test223@gmail.com",
      "process": "REC",
      "processrec": true,
      "processpic": false,
      "processdlv": false,
      "processrecValue": "REC",
      "processpicValue": "",
      "processdlvValue": "",
      "allProcess": [
          {
              "text": "Receive",
              "value": "REC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "PIC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Delivery",
              "value": "DLV",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "REC",
              "selectedValue": null,
              "values": null
          }
      ],
      "allStatus": [
          {
              "text": "Waiting",
              "value": "0",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Time out",
              "value": "1",
              "selectedValue": null,
              "values": null
          }
      ],
      "downsts": 0,
      "oT_STATUS": true,
      "oT_STATUSDesc": "Overtime",
      "downstsDesc": "Time out",
      "recdate": "2024-02-19T00:00:00",
      "rectime": "0001-01-01T14:56:50",
      "reCdateF": "19-02-2024",
      "reCtimeF": "14:56",
      "recempid": "001437",
      "upddate": "2024-02-19T14:56:50.362",
      "updempid": "001437"
  },
  {
      "dwnondat": "2024-02-19T00:00:00",
      "dwnontim": "0001-01-01T18:00:00",
      "getDLVdatetimeTicks": 638439624000000000,
      "dwnoNdateF": "19-02-2024",
      "dwnoNtimeF": "18:00",
      "dwntime": 60,
      "descrip": "fdlkflkdsjf",
      "emaillst": "test2333@gmail.com",
      "process": "REC",
      "processrec": true,
      "processpic": false,
      "processdlv": false,
      "processrecValue": "REC",
      "processpicValue": "",
      "processdlvValue": "",
      "allProcess": [
          {
              "text": "Receive",
              "value": "REC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "PIC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Delivery",
              "value": "DLV",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "REC",
              "selectedValue": null,
              "values": null
          }
      ],
      "allStatus": [
          {
              "text": "Waiting",
              "value": "0",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Time out",
              "value": "1",
              "selectedValue": null,
              "values": null
          }
      ],
      "downsts": 0,
      "oT_STATUS": true,
      "oT_STATUSDesc": "Overtime",
      "downstsDesc": "Time out",
      "recdate": "2024-02-19T00:00:00",
      "rectime": "0001-01-01T15:15:16",
      "reCdateF": "19-02-2024",
      "reCtimeF": "15:15",
      "recempid": "001437",
      "upddate": "2024-02-19T15:15:16.337",
      "updempid": "001437"
  },
  {
      "dwnondat": "2024-02-19T00:00:00",
      "dwnontim": "0001-01-01T17:00:00",
      "getDLVdatetimeTicks": 638439588000000000,
      "dwnoNdateF": "19-02-2024",
      "dwnoNtimeF": "17:00",
      "dwntime": 60,
      "descrip": "xzczxcxzc",
      "emaillst": "tefds1fs23@gmail.com",
      "process": "REC",
      "processrec": true,
      "processpic": false,
      "processdlv": false,
      "processrecValue": "REC",
      "processpicValue": "",
      "processdlvValue": "",
      "allProcess": [
          {
              "text": "Receive",
              "value": "REC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "PIC",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Delivery",
              "value": "DLV",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Picking",
              "value": "REC",
              "selectedValue": null,
              "values": null
          }
      ],
      "allStatus": [
          {
              "text": "Waiting",
              "value": "0",
              "selectedValue": null,
              "values": null
          },
          {
              "text": "Time out",
              "value": "1",
              "selectedValue": null,
              "values": null
          }
      ],
      "downsts": 0,
      "oT_STATUS": true,
      "oT_STATUSDesc": "Overtime",
      "downstsDesc": "Time out",
      "recdate": "2024-02-19T00:00:00",
      "rectime": "0001-01-01T15:16:48",
      "reCdateF": "19-02-2024",
      "reCtimeF": "15:16",
      "recempid": "001437",
      "upddate": "2024-02-19T15:16:48.437",
      "updempid": "001437"
  }
]

export const monitorData:Monitor[] = 
[
    {
        "monitrid": "Monitor S",
        "ipaddr": "192.168.33.67",
        "clientid": "ClientIDS",
        "clientse": "ClientIDSSE",
        "process": "Receive",
        "recdate": "2017-10-25T00:00:00",
        "rectime": "0001-01-01T11:07:26",
        "recempid": "000528",
        "upddate": "2017-10-25T11:07:27.67",
        "updempid": "001437",
        "alldock": "R3FPS,R3F01,R3F02,R3F03,R3F04,R3F05,R3F06,R3F07,R3F08,R3F09,R3F10,R3F11,R3F12,R3F13,R3F14,R3F15,R3F16,R3F17,R3F18,R3F19,R3F20,R3F21,R3F22,R3F23,",
        "selectdockList": [
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3FPS",
                "value": "R3FPS"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F01",
                "value": "R3F01"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F02",
                "value": "R3F02"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F03",
                "value": "R3F03"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F04",
                "value": "R3F04"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F05",
                "value": "R3F05"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F06",
                "value": "R3F06"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F07",
                "value": "R3F07"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F08",
                "value": "R3F08"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F09",
                "value": "R3F09"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F10",
                "value": "R3F10"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F11",
                "value": "R3F11"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F12",
                "value": "R3F12"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F13",
                "value": "R3F13"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F14",
                "value": "R3F14"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F15",
                "value": "R3F15"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F16",
                "value": "R3F16"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F17",
                "value": "R3F17"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F18",
                "value": "R3F18"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F19",
                "value": "R3F19"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F20",
                "value": "R3F20"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F21",
                "value": "R3F21"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F22",
                "value": "R3F22"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F23",
                "value": "R3F23"
            }
        ],
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ],
        "monitrdock": [
            {
                "clientid": "ClientIDS",
                "dockNo": "R3FPS"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F01"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F02"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F03"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F04"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F05"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F06"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F07"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F08"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F09"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F10"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F11"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F12"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F13"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F14"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F15"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F16"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F17"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F18"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F19"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F20"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F21"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F22"
            },
            {
                "clientid": "ClientIDS",
                "dockNo": "R3F23"
            }
        ]
    },
    {
        "monitrid": "Monitor N",
        "ipaddr": "192.168.33.78",
        "clientid": "ClientIDN",
        "clientse": "ClientIDNSE",
        "process": "Receive",
        "recdate": "2017-10-25T00:00:00",
        "rectime": "0001-01-01T11:08:13",
        "recempid": "000528",
        "upddate": "2017-10-25T11:08:13.714",
        "updempid": "001437",
        "alldock": "R3FPN,R3F24,R3F25,R3F26,R3F27,R3F28,R3F30,R3F31,R3F32,R3F34,R3F35,R3F36,R3F37,R3F38,R3F39,R3F40,R3F41,R3F42,R3F43,R3F44,R3F45,R3F46,R3F47,R3Y30,R3Y34,R3Y35,R3Y37,R3Y38,R3Y42,R3Y44,",
        "selectdockList": [
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3FPN",
                "value": "R3FPN"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F24",
                "value": "R3F24"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F25",
                "value": "R3F25"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F26",
                "value": "R3F26"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F27",
                "value": "R3F27"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F28",
                "value": "R3F28"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F30",
                "value": "R3F30"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F31",
                "value": "R3F31"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F32",
                "value": "R3F32"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F34",
                "value": "R3F34"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F35",
                "value": "R3F35"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F36",
                "value": "R3F36"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F37",
                "value": "R3F37"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F38",
                "value": "R3F38"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F39",
                "value": "R3F39"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F40",
                "value": "R3F40"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F41",
                "value": "R3F41"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F42",
                "value": "R3F42"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F43",
                "value": "R3F43"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F44",
                "value": "R3F44"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F45",
                "value": "R3F45"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F46",
                "value": "R3F46"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3F47",
                "value": "R3F47"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y30",
                "value": "R3Y30"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y34",
                "value": "R3Y34"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y35",
                "value": "R3Y35"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y37",
                "value": "R3Y37"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y38",
                "value": "R3Y38"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y42",
                "value": "R3Y42"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3Y44",
                "value": "R3Y44"
            }
        ],
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ],
        "monitrdock": [
            {
                "clientid": "ClientIDN",
                "dockNo": "R3FPN"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F24"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F25"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F26"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F27"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F28"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F30"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F31"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F32"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F34"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F35"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F36"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F37"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F38"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F39"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F40"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F41"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F42"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F43"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F44"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F45"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F46"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3F47"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y30"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y34"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y35"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y37"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y38"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y42"
            },
            {
                "clientid": "ClientIDN",
                "dockNo": "R3Y44"
            }
        ]
    },
    {
        "monitrid": "Welding W",
        "ipaddr": "192.168.33.76",
        "clientid": "7b795fccfe",
        "clientse": "7fc9a310bb",
        "process": "Receive",
        "recdate": "2019-09-16T00:00:00",
        "rectime": "0001-01-01T16:26:45",
        "recempid": "001437",
        "upddate": "2019-09-16T16:26:54.73",
        "updempid": "001437",
        "alldock": "R3W01,R3W03,R3W04,R3W04,R3W04,R3W04,R3W06,R3W09,R3W10,R3W13,R3W14,R3W15,",
        "selectdockList": [
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W01",
                "value": "R3W01"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W03",
                "value": "R3W03"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W04",
                "value": "R3W04"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W04",
                "value": "R3W04"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W04",
                "value": "R3W04"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W04",
                "value": "R3W04"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W06",
                "value": "R3W06"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W09",
                "value": "R3W09"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W10",
                "value": "R3W10"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W13",
                "value": "R3W13"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W14",
                "value": "R3W14"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W15",
                "value": "R3W15"
            }
        ],
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ],
        "monitrdock": [
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W01"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W03"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W04"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W04"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W04"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W04"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W06"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W09"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W10"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W13"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W14"
            },
            {
                "clientid": "7b795fccfe",
                "dockNo": "R3W15"
            }
        ]
    },
    {
        "monitrid": "Welding E",
        "ipaddr": "192.168.33.69",
        "clientid": "3b4e8e35de",
        "clientse": "7f79749269",
        "process": "Receive",
        "recdate": "2019-11-08T00:00:00",
        "rectime": "0001-01-01T14:36:36",
        "recempid": "002392",
        "upddate": "2019-11-08T14:36:36.761",
        "updempid": "001437",
        "alldock": "R3W21,R3W22,",
        "selectdockList": [
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W21",
                "value": "R3W21"
            },
            {
                "disabled": false,
                "group": null,
                "selected": true,
                "text": "R3W22",
                "value": "R3W22"
            }
        ],
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ],
        "monitrdock": [
            {
                "clientid": "3b4e8e35de",
                "dockNo": "R3W21"
            },
            {
                "clientid": "3b4e8e35de",
                "dockNo": "R3W22"
            }
        ]
    }
]

export const breakTimeData:BreakTime[] = [
    {
        "montrid": "ClientIDS",
        "brkstrt": "0001-01-01T15:00:00",
        "brkendt": "0001-01-01T15:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Forklift Fail Compilation - Heavy Equipment Accidents.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDN",
        "brkstrt": "0001-01-01T15:00:00",
        "brkendt": "0001-01-01T15:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDS",
        "brkstrt": "0001-01-01T17:00:00",
        "brkendt": "0001-01-01T17:20:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDS",
        "brkstrt": "0001-01-01T10:00:00",
        "brkendt": "0001-01-01T10:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDN",
        "brkstrt": "0001-01-01T10:00:00",
        "brkendt": "0001-01-01T10:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDN",
        "brkstrt": "0001-01-01T17:00:00",
        "brkendt": "0001-01-01T17:20:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Forklift Fail Compilation - Heavy Equipment Accidents.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDS",
        "brkstrt": "0001-01-01T12:10:00",
        "brkendt": "0001-01-01T12:50:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Forklift Fail Compilation - Heavy Equipment Accidents.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "ClientIDN",
        "brkstrt": "0001-01-01T12:10:00",
        "brkendt": "0001-01-01T12:50:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Forklift Fail Compilation - Heavy Equipment Accidents.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "7b795fccfe",
        "brkstrt": "0001-01-01T15:00:00",
        "brkendt": "0001-01-01T15:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "7b795fccfe",
        "brkstrt": "0001-01-01T10:00:00",
        "brkendt": "0001-01-01T10:10:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Ultimate Forklift Fail Compilation.mp4",
        "monitors": null,
        "mdurLs": null
    },
    {
        "montrid": "7b795fccfe",
        "brkstrt": "0001-01-01T17:00:00",
        "brkendt": "0001-01-01T17:20:00",
        "positin": 1,
        "mdurl": "http://dccmedia.hlas.co.th//video/Forklift Fail Compilation - Heavy Equipment Accidents.mp4",
        "monitors": null,
        "mdurLs": null
    }
]

export const deliverStatusData:DeliverStatus[] = [
    {
        "timeamt": 60,
        "process": "REC",
        "processrec": true,
        "processpic": false,
        "processdlv": false,
        "processrecValue": "REC",
        "processpicValue": "",
        "processdlvValue": "",
        "crtdate": "2017-12-20T00:00:00",
        "crttime": "0001-01-01T00:00:00",
        "crtby": "IWOON",
        "allProcess": [
            {
                "text": "Receive",
                "value": "REC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "REC",
                "selectedValue": null,
                "values": null
            }
        ],
        "allStatus": [
            {
                "text": "CP",
                "value": "CP",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "DELAYED",
                "value": "DELAYED",
                "selectedValue": null,
                "values": null
            }
        ],
        "status": "DELAY",
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ]
    },
    {
        "timeamt": 60,
        "process": "PIC",
        "processrec": false,
        "processpic": true,
        "processdlv": false,
        "processrecValue": "",
        "processpicValue": "PIC",
        "processdlvValue": "",
        "crtdate": "2017-12-20T00:00:00",
        "crttime": "0001-01-01T00:00:00",
        "crtby": "IWOON",
        "allProcess": [
            {
                "text": "Receive",
                "value": "REC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            }
        ],
        "allStatus": [
            {
                "text": "CP",
                "value": "CP",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "DELAYED",
                "value": "DELAYED",
                "selectedValue": null,
                "values": null
            }
        ],
        "status": "DELAY",
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ]
    },
    {
        "timeamt": 120,
        "process": "PIC",
        "processrec": false,
        "processpic": true,
        "processdlv": false,
        "processrecValue": "",
        "processpicValue": "PIC",
        "processdlvValue": "",
        "crtdate": "2017-12-20T00:00:00",
        "crttime": "0001-01-01T00:00:00",
        "crtby": "IWOON",
        "allProcess": [
            {
                "text": "Receive",
                "value": "REC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            }
        ],
        "allStatus": [
            {
                "text": "CP",
                "value": "CP",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "DELAYED",
                "value": "DELAYED",
                "selectedValue": null,
                "values": null
            }
        ],
        "status": "CP",
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ]
    },
    {
        "timeamt": 60,
        "process": "DLV",
        "processrec": false,
        "processpic": false,
        "processdlv": true,
        "processrecValue": "",
        "processpicValue": "",
        "processdlvValue": "DLV",
        "crtdate": "2017-12-20T00:00:00",
        "crttime": "0001-01-01T00:00:00",
        "crtby": "IWOON",
        "allProcess": [
            {
                "text": "Receive",
                "value": "REC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            }
        ],
        "allStatus": [
            {
                "text": "CP",
                "value": "CP",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "DELAYED",
                "value": "DELAYED",
                "selectedValue": null,
                "values": null
            }
        ],
        "status": "DELAY",
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ]
    },
    {
        "timeamt": 120,
        "process": "REC",
        "processrec": true,
        "processpic": false,
        "processdlv": false,
        "processrecValue": "REC",
        "processpicValue": "",
        "processdlvValue": "",
        "crtdate": "2018-01-18T00:00:00",
        "crttime": "0001-01-01T14:49:09",
        "crtby": "000528",
        "allProcess": [
            {
                "text": "Receive",
                "value": "REC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "PIC",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Delivery",
                "value": "DLV",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "Picking",
                "value": "REC",
                "selectedValue": null,
                "values": null
            }
        ],
        "allStatus": [
            {
                "text": "CP",
                "value": "CP",
                "selectedValue": null,
                "values": null
            },
            {
                "text": "DELAYED",
                "value": "DELAYED",
                "selectedValue": null,
                "values": null
            }
        ],
        "status": "CP",
        "processList": [
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Receive",
                "value": "Receive"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Picking",
                "value": "Picking"
            },
            {
                "disabled": false,
                "group": null,
                "selected": false,
                "text": "Delivery",
                "value": "Delivery"
            }
        ]
    }
]

export const masterZoneData:MasterZone[] = [
    {
        "dlvmnt": "N1                  ",
        "dlvzne": "WSR13",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSR13",
        "montip": "               ",
        "pikflg": 0,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N1                  ",
        "dlvzne": "WSR12",
        "montip": "               ",
        "pikflg": 0,
        "dlvflg": 0,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSR12",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 0,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N2                  ",
        "dlvzne": "WSR01",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSR01",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N1                  ",
        "dlvzne": "WSL13",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSL13",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 0,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N1                  ",
        "dlvzne": "WSL12",
        "montip": "               ",
        "pikflg": 0,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSL12",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N2                  ",
        "dlvzne": "WSL01",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WSL01",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "N2                  ",
        "dlvzne": "WNORM",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    },
    {
        "dlvmnt": "D-WIRING            ",
        "dlvzne": "WNORM",
        "montip": "               ",
        "pikflg": 1,
        "dlvflg": 1,
        "crtdte": 0,
        "crttme": 0,
        "crtusr": "          ",
        "upddte": 0,
        "updtme": 0,
        "updusr": "          "
    }]

export const adjustTimeData:AdjustTime[] = [
    {
        "d3NUMID": "1",
        "d3NUMBE": "0",
        "d3TYPET": "MINUTES     ",
        "d3ZONEM": "AF   "
    },
    {
        "d3NUMID": "2",
        "d3NUMBE": "0",
        "d3TYPET": "MINUTES     ",
        "d3ZONEM": "WE   "
    }
]

export const pickingData:PickingDelivery[] = [
    {
        "pklno": "PSB2402010408BUM0101",
        "cpino": "CPI202402010022",
        "dcptno": "711623N1 T001     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45341 ",
        "pcrqty": 0,
        "dlvqty": 30,
        "dlvzne": "BUM01",
        "dlvdte": 20240201,
        "dlvtme": 40800,
        "kdltfr": "HATC0M202402000201",
        "picdte": 20240201,
        "pictme": 10800,
        "dlvmnt": "S                   ",
        "splcsh": "SANKO               ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402010823BUM0101",
        "cpino": "CPI202402010067",
        "dcptno": "44732T8N T010M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45532 ",
        "pcrqty": 112,
        "dlvqty": 120,
        "dlvzne": "BUM01",
        "dlvdte": 20240201,
        "dlvtme": 82300,
        "kdltfr": "HATC0M202402001301",
        "picdte": 20240201,
        "pictme": 22300,
        "dlvmnt": "S                   ",
        "splcsh": "PIT                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSR2402010823BUM2101",
        "cpino": "CPI202402010085",
        "dcptno": "711513N1 T100     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45302 ",
        "pcrqty": 0,
        "dlvqty": 15,
        "dlvzne": "BUM21",
        "dlvdte": 20240201,
        "dlvtme": 82300,
        "kdltfr": "HATC0M202402001301",
        "picdte": 20240201,
        "pictme": 22300,
        "dlvmnt": "S                   ",
        "splcsh": "NCT                 ",
        "picscn": "1",
        "dlvscn": " "
    },
    {
        "pklno": "PSR2402010823BUM2102",
        "cpino": "CPI202402010086",
        "dcptno": "711513N1 T100     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45302 ",
        "pcrqty": 0,
        "dlvqty": 15,
        "dlvzne": "BUM21",
        "dlvdte": 20240201,
        "dlvtme": 82300,
        "kdltfr": "HATC0M202402001301",
        "picdte": 20240201,
        "pictme": 22300,
        "dlvmnt": "S                   ",
        "splcsh": "NCT                 ",
        "picscn": "1",
        "dlvscn": " "
    },
    {
        "pklno": "PSB2402010851COR0101",
        "cpino": "CPI202402010068",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 60,
        "dlvzne": "COR01",
        "dlvdte": 20240201,
        "dlvtme": 85100,
        "kdltfr": "HATC0M202402001301",
        "picdte": 20240201,
        "pictme": 25100,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402011011COR0101",
        "cpino": "CPI202402010180",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 60,
        "dlvzne": "COR01",
        "dlvdte": 20240201,
        "dlvtme": 101100,
        "kdltfr": "HATC0M202402000401",
        "picdte": 20240201,
        "pictme": 41100,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402011121COR0101",
        "cpino": "CPI202402010207",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 8,
        "dlvzne": "COR01",
        "dlvdte": 20240201,
        "dlvtme": 112100,
        "kdltfr": "HATC0P202402001502",
        "picdte": 20240201,
        "pictme": 82100,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402011130COR0101",
        "cpino": "CPI202402010208",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 52,
        "dlvzne": "COR01",
        "dlvdte": 20240201,
        "dlvtme": 113000,
        "kdltfr": "HATC0P202402001501",
        "picdte": 20240201,
        "pictme": 83000,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402011550COR0101",
        "cpino": "CPI202402010417",
        "dcptno": "753123M1 T010M2   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45341 ",
        "pcrqty": 25,
        "dlvqty": 30,
        "dlvzne": "COR01",
        "dlvdte": 20240201,
        "dlvtme": 155000,
        "kdltfr": "HATC0M202402000501",
        "picdte": 20240201,
        "pictme": 120000,
        "dlvmnt": "S                   ",
        "splcsh": "SANKO               ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402012046BUM0101",
        "cpino": "CPI202402010503",
        "dcptno": "749853M0 J512M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "LPAW  ",
        "pcrqty": 0,
        "dlvqty": 30,
        "dlvzne": "BUM01",
        "dlvdte": 20240201,
        "dlvtme": 204600,
        "kdltfr": "HATC0M202402000901",
        "picdte": 20240201,
        "pictme": 144600,
        "dlvmnt": "S                   ",
        "splcsh": "                    ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020327COL0101",
        "cpino": "CPI202402010713",
        "dcptno": "17670T3W 0033     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "LPJS  ",
        "pcrqty": 0,
        "dlvqty": 30,
        "dlvzne": "COL01",
        "dlvdte": 20240202,
        "dlvtme": 32700,
        "kdltfr": "HATC0P202402000401",
        "picdte": 20240201,
        "pictme": 233700,
        "dlvmnt": "S                   ",
        "splcsh": "                    ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020327COR0101",
        "cpino": "CPI202402010735",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 60,
        "dlvzne": "COR01",
        "dlvdte": 20240202,
        "dlvtme": 32700,
        "kdltfr": "HATC0P202402000401",
        "picdte": 20240201,
        "pictme": 233700,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020408BUM0101",
        "cpino": "CPI202402020013",
        "dcptno": "44732T6A N010M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45532 ",
        "pcrqty": 60,
        "dlvqty": 120,
        "dlvzne": "BUM01",
        "dlvdte": 20240202,
        "dlvtme": 40800,
        "kdltfr": "HATC0M202402001101",
        "picdte": 20240202,
        "pictme": 10800,
        "dlvmnt": "S                   ",
        "splcsh": "PIT                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020436COR0101",
        "cpino": "CPI202402020012",
        "dcptno": "51608SLJ 0000     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45421 ",
        "pcrqty": 0,
        "dlvqty": 60,
        "dlvzne": "COR01",
        "dlvdte": 20240202,
        "dlvtme": 43600,
        "kdltfr": "HATC0M202402001101",
        "picdte": 20240202,
        "pictme": 13600,
        "dlvmnt": "S                   ",
        "splcsh": "IRP                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020823BUM0101",
        "cpino": "CPI202402020288",
        "dcptno": "711403M1 K300     ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45539 ",
        "pcrqty": 20,
        "dlvqty": 30,
        "dlvzne": "BUM01",
        "dlvdte": 20240202,
        "dlvtme": 82300,
        "kdltfr": "HATC0M202402001001",
        "picdte": 20240202,
        "pictme": 22300,
        "dlvmnt": "S                   ",
        "splcsh": "TSPT                ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402020933BUM0101",
        "cpino": "CPI202402020332",
        "dcptno": "44732T8N T010M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45532 ",
        "pcrqty": 0,
        "dlvqty": 120,
        "dlvzne": "BUM01",
        "dlvdte": 20240202,
        "dlvtme": 93300,
        "kdltfr": "HATC0M202402001401",
        "picdte": 20240202,
        "pictme": 34300,
        "dlvmnt": "S                   ",
        "splcsh": "PIT                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402021339BUM0101",
        "cpino": "CPI202402020343",
        "dcptno": "44732T8N T010M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45532 ",
        "pcrqty": 0,
        "dlvqty": 120,
        "dlvzne": "BUM01",
        "dlvdte": 20240202,
        "dlvtme": 133900,
        "kdltfr": "HATC0M202402002801",
        "picdte": 20240202,
        "pictme": 94900,
        "dlvmnt": "S                   ",
        "splcsh": "PIT                 ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402021527COL0101",
        "cpino": "CPI202402020423",
        "dcptno": "389703M0 E011M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45459 ",
        "pcrqty": 17,
        "dlvqty": 30,
        "dlvzne": "COL01",
        "dlvdte": 20240202,
        "dlvtme": 152700,
        "kdltfr": "HATC0M202402001201",
        "picdte": 20240202,
        "pictme": 113700,
        "dlvmnt": "S                   ",
        "splcsh": "HTAS                ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402021527COL0101",
        "cpino": "CPI202402020424",
        "dcptno": "8S1003M3 TA10M1   ",
        "prtdsc": null,
        "prtclr": "           ",
        "sppcde": "45459 ",
        "pcrqty": 24,
        "dlvqty": 30,
        "dlvzne": "COL01",
        "dlvdte": 20240202,
        "dlvtme": 152700,
        "kdltfr": "HATC0M202402001201",
        "picdte": 20240202,
        "pictme": 113700,
        "dlvmnt": "S                   ",
        "splcsh": "HTAS                ",
        "picscn": "1",
        "dlvscn": "1"
    },
    {
        "pklno": "PSB2402021527COR0101",
        "cpino": "CPI202402020404",
        "dcptno": "764103M0 J010M1   ",
        "prtdsc": null,
        "prtclr": "NH900L     ",
        "sppcde": "45436 ",
        "pcrqty": 0,
        "dlvqty": 30,
        "dlvzne": "COR01",
        "dlvdte": 20240202,
        "dlvtme": 152700,
        "kdltfr": "HATC0M202402001201",
        "picdte": 20240202,
        "pictme": 113700,
        "dlvmnt": "S                   ",
        "splcsh": "NT                  ",
        "picscn": "1",
        "dlvscn": "1"
    }]

export const monitorAllData : MonitorAll[] = [
    {
        "dcptno": "75333-3M1-T210-M2",
        "prtclr": "",
        "splcsh": "SANKO               ",
        "dlvqty": "25/30",
        "dlvzne": "COL01",
        "kdltfr": "HATC0M202402006801",
        "picdte": "2024-02-28",
        "pictme": "10.31.00"
    },
    {
        "dcptno": "82500-3P2-TD13-M1",
        "prtclr": "",
        "splcsh": "AS                  ",
        "dlvqty": "0/30",
        "dlvzne": "COL03",
        "kdltfr": "HATC04202402003501",
        "picdte": "2024-02-28",
        "pictme": "16.15.00"
    },
    {
        "dcptno": "81100-3P2-SC13-M1",
        "prtclr": "",
        "splcsh": "TST                 ",
        "dlvqty": "0/30",
        "dlvzne": "COR02",
        "kdltfr": "HATC04202402003501",
        "picdte": "2024-02-28",
        "pictme": "16.15.00"
    },
    {
        "dcptno": "81500-3P2-SD13-M1",
        "prtclr": "",
        "splcsh": "TST                 ",
        "dlvqty": "0/30",
        "dlvzne": "COL02",
        "kdltfr": "HATC04202402003501",
        "picdte": "2024-02-28",
        "pictme": "16.15.00"
    },
    {
        "dcptno": "82100-3P2-TD13-M1",
        "prtclr": "",
        "splcsh": "AS                  ",
        "dlvqty": "0/30",
        "dlvzne": "COR03",
        "kdltfr": "HATC04202402003501",
        "picdte": "2024-02-28",
        "pictme": "16.15.00"
    },
    {
        "dcptno": "71200-3P0-T810-C1",
        "prtclr": "",
        "splcsh": "TGAS                ",
        "dlvqty": "0/30",
        "dlvzne": "BUM23",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "33505-TSA-T010-M1",
        "prtclr": "",
        "splcsh": "                    ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "33555-TSA-T010-M1",
        "prtclr": "",
        "splcsh": "                    ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71192-3P0-T800",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71151-3P2-T800",
        "prtclr": "",
        "splcsh": "MTT                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM27",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "83850-SD2-0003",
        "prtclr": "",
        "splcsh": "                    ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71142-3P0-T800",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71108-3P0-T801",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71141-3P0-T800",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "33900-T24-T011-M1",
        "prtclr": "",
        "splcsh": "TKC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "83853-SA7-9802",
        "prtclr": "",
        "splcsh": "HTAS                ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71551-3P0-T810-M1",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM25",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71191-3P0-T800",
        "prtclr": "",
        "splcsh": "KTC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "44732-T02-T010-M1",
        "prtclr": "",
        "splcsh": "PIT                 ",
        "dlvqty": "0/120",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "33950-T24-T011-M1",
        "prtclr": "",
        "splcsh": "TKC                 ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "71502-3P0-T810-M1",
        "prtclr": "",
        "splcsh": "TGAS                ",
        "dlvqty": "0/30",
        "dlvzne": "BUM01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "16.57.00"
    },
    {
        "dcptno": "17252-62K-Z010-M1",
        "prtclr": "",
        "splcsh": "TPT                 ",
        "dlvqty": "0/30",
        "dlvzne": "COR01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "20.25.00"
    },
    {
        "dcptno": "17252-62K-Z010-M1",
        "prtclr": "",
        "splcsh": "TPT                 ",
        "dlvqty": "0/30",
        "dlvzne": "COR01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "20.25.00"
    },
    {
        "dcptno": "81107-T02-T011-M1",
        "prtclr": "",
        "splcsh": "TST                 ",
        "dlvqty": "0/30",
        "dlvzne": "COR01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "20.25.00"
    },
    {
        "dcptno": "81107-T02-T011-M1",
        "prtclr": "",
        "splcsh": "TST                 ",
        "dlvqty": "0/30",
        "dlvzne": "COR01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "20.25.00"
    },
    {
        "dcptno": "74316-3P0-T010-M1",
        "prtclr": "",
        "splcsh": "TOACS               ",
        "dlvqty": "0/30",
        "dlvzne": "COL01",
        "kdltfr": "HATC04202402003601",
        "picdte": "2024-02-28",
        "pictme": "20.25.00"
    }]

export const receiveInquiry : ReceiveInQuiry[] = [
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T08:20:00",
        "dlVdateF": "1/4/2023 8:20:00 AM",
        "delivery_Slip": "23011000166900",
        "parts_No": "68610T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:32",
        "reCdateF": "1/4/2023 8:29:32 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T09:00:00",
        "dlVdateF": "1/4/2023 9:00:00 AM",
        "delivery_Slip": "23011000167000",
        "parts_No": "68610T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:30",
        "reCdateF": "1/4/2023 8:29:30 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T10:00:00",
        "dlVdateF": "1/4/2023 10:00:00 AM",
        "delivery_Slip": "23011000167100",
        "parts_No": "68610T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:28",
        "reCdateF": "1/4/2023 8:29:28 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T08:20:00",
        "dlVdateF": "1/4/2023 8:20:00 AM",
        "delivery_Slip": "23011000168300",
        "parts_No": "68660T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:22",
        "reCdateF": "1/4/2023 8:29:22 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T09:00:00",
        "dlVdateF": "1/4/2023 9:00:00 AM",
        "delivery_Slip": "23011000168400",
        "parts_No": "68660T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:23",
        "reCdateF": "1/4/2023 8:29:23 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T10:00:00",
        "dlVdateF": "1/4/2023 10:00:00 AM",
        "delivery_Slip": "23011000168500",
        "parts_No": "68660T9A T000",
        "parts_Colour": "",
        "supplier_Code": 45219,
        "supplier_Tag": "SSK",
        "supplier_name": "SSK KOLAKARN CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:29:26",
        "reCdateF": "1/4/2023 8:29:26 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000341000",
        "parts_No": "672313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 4,
        "order_Qty": 4,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:23:03",
        "reCdateF": "1/4/2023 8:23:03 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000341100",
        "parts_No": "672313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 26,
        "order_Qty": 26,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:23:05",
        "reCdateF": "1/4/2023 8:23:05 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T13:00:00",
        "dlVdateF": "1/4/2023 1:00:00 PM",
        "delivery_Slip": "23011000341200",
        "parts_No": "672313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:23:09",
        "reCdateF": "1/4/2023 8:23:09 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000342600",
        "parts_No": "672713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 4,
        "order_Qty": 4,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:50",
        "reCdateF": "1/4/2023 8:22:50 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000342700",
        "parts_No": "672713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 26,
        "order_Qty": 26,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:53",
        "reCdateF": "1/4/2023 8:22:53 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T13:00:00",
        "dlVdateF": "1/4/2023 1:00:00 PM",
        "delivery_Slip": "23011000342800",
        "parts_No": "672713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:56",
        "reCdateF": "1/4/2023 8:22:56 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000344200",
        "parts_No": "677313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 4,
        "order_Qty": 4,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:41",
        "reCdateF": "1/4/2023 8:22:41 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000344300",
        "parts_No": "677313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 26,
        "order_Qty": 26,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:43",
        "reCdateF": "1/4/2023 8:22:43 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T13:00:00",
        "dlVdateF": "1/4/2023 1:00:00 PM",
        "delivery_Slip": "23011000344400",
        "parts_No": "677313M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:46",
        "reCdateF": "1/4/2023 8:22:46 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000345800",
        "parts_No": "677713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 4,
        "order_Qty": 4,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:32",
        "reCdateF": "1/4/2023 8:22:32 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T11:00:00",
        "dlVdateF": "1/4/2023 11:00:00 AM",
        "delivery_Slip": "23011000345900",
        "parts_No": "677713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 26,
        "order_Qty": 26,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:34",
        "reCdateF": "1/4/2023 8:22:34 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T13:00:00",
        "dlVdateF": "1/4/2023 1:00:00 PM",
        "delivery_Slip": "23011000346000",
        "parts_No": "677713M1 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45256,
        "supplier_Tag": "CCI",
        "supplier_name": "CHEOW CHAN IND.(1989) CO.,LTD",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T08:22:35",
        "reCdateF": "1/4/2023 8:22:35 AM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-04T14:00:00",
        "dlVdateF": "1/4/2023 2:00:00 PM",
        "delivery_Slip": "23011000388300",
        "parts_No": "67231T00 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45264,
        "supplier_Tag": "SAB",
        "supplier_name": "SUMMIT AUTO BODY IND. CO.,LTD.",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T12:56:14",
        "reCdateF": "1/4/2023 12:56:14 PM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    },
    {
        "production_Month": "202301",
        "delivery_Datetime": "2023-01-05T08:20:00",
        "dlVdateF": "1/5/2023 8:20:00 AM",
        "delivery_Slip": "23011000388400",
        "parts_No": "67231T00 T000H1",
        "parts_Colour": "",
        "supplier_Code": 45264,
        "supplier_Tag": "SAB",
        "supplier_name": "SUMMIT AUTO BODY IND. CO.,LTD.",
        "received_Qty": 30,
        "order_Qty": 30,
        "diff": 0,
        "received_Datetime": "2023-01-04T12:56:15",
        "reCdateF": "1/4/2023 12:56:15 PM",
        "delivery_DockNo": null,
        "received_DockNo": null,
        "received_User": null,
        "isCompleted": true,
        "isCompletedDesc": "Received"
    }
]