/*
[
  {
    "id": "1933ad47-35a0-4a43-bd07-8c5f04254c2d",
    "name": "Test event",
    "description": "Lorem ipsun is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n text ever since the 1500s, when an unknown printer took a galley of \ntype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, \nremaining essentially unchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
    "date": "2024-09-30",
    "location": "Virtual",
    "tags": [
      "Test",
      "Test2",
      "Test3",
      "Test4"
    ],
    "public": true,
    "organizer": "Pedro Kaleb De Je1",
    "equip": [
      "Pedro Jesus"
    ],
    "created_time": "2024-09-09T14:34:00.000Z",
    "last_edited_time": "2024-09-10T09:12:00.000Z",
    "status": "In progress",
    "banner": "https://i.imgur.com/UxNDPFP.png",
    "url": "https://www.notion.so/Test-event-1933ad4735a04a43bd078c5f04254c2d"
  }
]
*/

export default interface EventData {
    id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    tags: string[];
    public: boolean;
    organizer: string;
    equip: string[];
    created_time: string;
    last_edited_time: string;
    total_cost: number;
    total_open: number;
    status: string;
    banner: string;
    progress: string[];
    url: string;
  }
