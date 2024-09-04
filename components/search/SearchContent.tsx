"use client";
import Fuse from 'fuse.js';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { remove as removeDiacritics } from 'diacritics'; // You can use a package like 'diacritics'
import { ListPostCard, EmptyListPostCard } from '../general/ListPostCard';

/*
Card de post
*/

/*
Card de post vazio
*/ 


// Componente de busca
export default function SearchContent() {
    /*
    pedido para a API: /api/posts/getallposts
    Getposts retorna:
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
        "lastEdited": "2024-08-14T13:29:00.000Z",
        "url": "blog.devscafe.pt/posts/conceitos-solid-cleancode",
        "public": true,
        "slug": {
        "content": "conceitos-solid-cleancode",
        "link": null
        }
    }
    ]
    */
       /*
    Regras de busca:
    - Buscar por título, tags, descrição e autor e slug
    - Ignorar a localização e a normalização de campo
    - Usar busca estendida
    - Retornar os resultados com score e matches
    - Se não tiver nenhuma query, retornar todos os posts carregados
    - Se tiver query, retornar os resultados da busca
    */

    /*
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
        "lastEdited": "2024-08-14T13:29:00.000Z",
        "url": "blog.devscafe.pt/posts/conceitos-solid-cleancode",
        "public": true,
        "slug": {
        "content": "conceitos-solid-cleancode",
        "link": null
        }
    }
    ]
    */ 

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
        fetch('/api/posts/getallposts')
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

        // Regras de busca
        const fuse = new Fuse(data, {
            keys: ['title', 'tags', 'description', 'author', 'slug.content'],
            ignoreLocation: true,
            ignoreFieldNorm: true,
            useExtendedSearch: true,
            includeScore: true,
            includeMatches: true
        });

        // Buscar os resultados
        const results = fuse.search(removeDiacritics(search));

        // Retornar os resultados
        // setResults(results);
        setResults(results.map((result) => result.item));
    }, [search, data]);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-6
        max-w-2xl
        '>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <input
                    type="text"
                    className='w-full rounded-lg shadow-md p-2
                    focus:outline-none focus:ring focus:border-blue-300'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
            </div>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center justify-left w-full h-full gap-6'>
                    {/* Mostrar cards com os resultados porem se não encontrar envia cards vazios com skeleton do tailwind para simular o carregamento*/}
                    {results.length > 0 ? results.map((post, index) => (
                        <>
                            <ListPostCard key={index} post={post} />
                        </>
                    )) : (
                        <>
                            <EmptyListPostCard />
                            <EmptyListPostCard />
                            <EmptyListPostCard />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
