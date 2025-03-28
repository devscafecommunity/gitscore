/*
{
  "id": "7fbdcbf1-de6c-472b-b35a-e4c3dbbe22ab",
  "name": "Pedro Kaleb de Jesus",
  "bio": "Test",
  "avatar": "https://i.imgur.com/SL6jvOr.png",
  "banner": "https://i.imgur.com/UxNDPFP.png",
  "social": {
    "github": "https://github.com/LyeZinho",
    "instagram": "https://instagram/pedrokj",
    "website": "https://pedrokalebdev.pt",
    "linkedin": "linkedin.com/pedrojesus",
    "twitter": "https://x.com/PeJesus"
  },
  "posts": [
    {
      "id": "e3b7d032-44bd-4a77-8fef-6472617d5c21",
      "title": "Titulo do post",
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa tortor \ndignissim auctor libero risus adipiscing facilisis. Quisque praesent \nhimenaeos; urna nam vivamus ultrices laoreet magnis malesuada. Conubia \ndonec turpis class arcu egestas pretium, lobortis luctus. Dictumst \nnascetur nostra donec dui fames fusce. Interdum euismod est massa turpis\n himenaeos diam mauris. Accumsan vivamus eget nibh montes auctor nisi \nconubia.\n            ",
      "cover": "https://i.imgur.com/SL6jvOr.png",
      "slug": "test",
      "tags": [
        "test"
      ],
      "created_time": "2024-09-07T19:02:00.000Z",
      "last_edited_time": "2024-09-10T10:00:00.000Z",
      "author": {
        "id": "2439e043-c4de-4dac-8bca-225299af2a76",
        "name": "Pedro Kaleb De Je1",
        "avatar": "",
        "banner": "",
        "email": "pedrokalebdej1@gmail.com"
      },
      "content": [],
      "contentstring": ""
    }
  ]
}
*/

import PostData from "@/utils/interfaces/PostData";

export default interface Data {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  banner: string;
  social: {
    github: string;
    instagram: string;
    website: string;
    linkedin: string;
    twitter: string;
  };
  posts: PostData[];
}
