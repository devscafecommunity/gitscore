/*
Lista os posts mais recentes

faz pedido para a API:
/api/posts/recent

api retorna:
já está ordenado por ultima edição
[
  {
    "id": "80fcbc66-99de-4ba5-845f-d1884a50c563",
    "title": "Clean Code com Princípios S.O.L.I.D",
    "tags": [
      "Test"
    ],
    "description": "Text desc",
    "cover": "https://i.imgur.com/3ToN0IJ.png",
    "createdDate": "2024-08-09T19:40:00.000Z",
    "lastEdited": "2024-08-15T20:35:00.000Z",
    "url": "/posts/conceitos-solid-cleancode",
    "public": true,
    "slug": {
      "content": "conceitos-solid-cleancode",
      "link": null
    }
  }
]
*/

"use client";


import React, { useEffect, useState } from 'react';
import { ListPostCard, EmptyListPostCard } from '../general/ListPostCard';

export default function ListPostsNewer() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    // Post list
    const [results, setResults] = useState([
        {
            id: '',
            title: '',
            tags: [],
            description: '',
            cover: '',
            createdDate: '',
            lastEdited: '',
            url: '',
            public: false,
            slug: {
                content: '',
                link: null
            }
        }
    ]);

    useEffect(() => {
        // Buscar os posts
        fetch('/api/posts/recent')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    useEffect(() => {
        // Se não tiver query, retornar todos os posts
        if (!search) {
            setResults(data);
            return;
        }

        // Filtrar os posts
        const filteredPosts = data.filter((post: any) => {
            return post.title.toLowerCase().includes(search.toLowerCase());
        });

        setResults(filteredPosts);
    }, [search, data]);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-6 p-4'>
            {results.length > 0 ? (
                results.map((post, index) => (
                    <ListPostCard key={index} post={post} />
                ))
            ) : (
                <>
                    <EmptyListPostCard />
                    <EmptyListPostCard />
                    <EmptyListPostCard />
                </>
            )}
        </div>
    );
}