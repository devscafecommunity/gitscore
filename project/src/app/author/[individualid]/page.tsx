/*
Recebe uma pesquisa:

/author/[individualid]/page.tsx
ex: /author/author

Logo faz um fetch para /api/authors/getauthor/<individualid>
que retorna:

{
  "authorName": "Pedro k. Jesus",
  "authorBio": "Sou um programador apaixonado que adora programar e criar coisas novas. Estou sempre explorando e aprendendo para me manter na vanguarda da inovação. Gosto de colaborar com outras pessoas e me sinto realizado ao ver o impacto do meu trabalho no mundo real. Além de programar, gosto de projetos separados e de descobrir novas tecnologias nas horas vagas.",
  "authorProfilePicture": "https://i.imgur.com/cEY3ysC.png",
  "authorBanner": "https://i.imgur.com/UxNDPFP.png",
  "authorWebsite": "https://pedrokalebdev.pt/",
  "authorGithub": "https://github.com/LyeZinho",
  "authorTwitter": "https://x.com/Je1Pedro",
  "authorInstagram": "https://www.instagram.com/pedrokalebj1/",
  "authorEmail": "pedrokalebdej1@gmail.com",
  "authorPosts": [
    {
      "title": "Clean Code com Princípios S.O.L.I.D",
      "tags": [
        {
          "id": "72c41e6e-088e-47da-b9c3-834e38145508",
          "name": "Test",
          "color": "pink"
        }
      ],
      "description": "Text desc",
      "cover": "https://i.imgur.com/3ToN0IJ.png",
      "createdDate": "2024-08-09T19:40:00.000Z",
      "lastEdited": "2024-08-15T20:35:00.000Z",
      "url": "/posts/conceitos-solid-cleancode",
      "publicpost": true,
      "slug": "conceitos-solid-cleancode"
    }
  ],
  "authorId": "2439e043-c4de-4dac-8bca-225299af2a76",
  "authorIndividualID": "lyeezinho"
}

então retorna a página do autor com todas as informações
*/

"use client";
import { ListPostCard, EmptyListPostCard } from "../../../../components/general/ListPostCard";
import React, { useEffect, useState } from 'react';
import { HeaderAuthor, HeaderAuthorEmpty} from "../../../../components/author/HeaderAuthor";

export default function AuthorPage() {
    const [authorData, setAuthorData] = useState({
        authorName: '',
        authorBio: '',
        authorProfilePicture: '',
        authorBanner: '',
        authorWebsite: '',
        authorGithub: '',
        authorTwitter: '',
        authorInstagram: '',
        authorEmail: '',
        authorPosts: [],
        authorId: '',
        authorIndividualID: '',
    });

    useEffect(() => {
        fetch(`/api/authors/getauthor/${window.location.pathname.split('/')[2]}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(JSON.stringify(data, null, 2));
                setAuthorData(data);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-1/2">
            <div className="">
                {authorData.authorName ? (
                    <HeaderAuthor
                        authorName={authorData.authorName}
                        authorBio={authorData.authorBio}
                        authorProfilePicture={authorData.authorProfilePicture}
                        authorBanner={authorData.authorBanner}
                        authorWebsite={authorData.authorWebsite}
                        authorGithub={authorData.authorGithub}
                        authorTwitter={authorData.authorTwitter}
                        authorInstagram={authorData.authorInstagram}
                        authorEmail={authorData.authorEmail}
                    />
                ) : (
                    <HeaderAuthorEmpty />
                )}
            </div>
            <div className="flex flex-col gap-6 justify-center justify-items-center p-6">
                { authorData.authorPosts.length > 0 ? authorData.authorPosts.map((post: any) => {
                    return (
                        <>
                            <ListPostCard key={post.title} post={post} />
                        </>
                    );
                }) : (
                    <>
                        <EmptyListPostCard />
                        <EmptyListPostCard />
                        <EmptyListPostCard />
                    </>
                )}
            </div>
        </div>
    );
}