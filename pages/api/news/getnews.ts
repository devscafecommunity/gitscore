/*
Api que retorna as notícias de feeds RSS em formato JSON

https://playdevhub.vercel.app/rss.xml -> 
<rss version="2.0">
<channel>
<title>Play Dev</title>
<description>Hub de estudos para programação</description>
<link>https://playdevhub.vercel.app/</link>
<item>
<title>Progressive Web Apps (PWA)</title>
<link>https://playdevhub.vercel.app/posts/pwa/</link>
<guid isPermaLink="true">https://playdevhub.vercel.app/posts/pwa/</guid>
<description>Você conhece as aplicações progressivas?</description>
<pubDate>Thu, 22 Aug 2024 21:00:00 GMT</pubDate>
</item>
</channel>
</rss>


https://www.tabnews.com.br/recentes/rss -> 
<rss version="2.0">
<channel>
<title>TabNews</title>
<link>https://www.tabnews.com.br/recentes/rss</link>
<description>
Conteúdos para quem trabalha com Programação e Tecnologia
</description>
<lastBuildDate>Thu, 12 Sep 2024 13:27:36 GMT</lastBuildDate>
<docs>https://validator.w3.org/feed/docs/rss2.html</docs>
<generator>https://github.com/jpmonette/feed</generator>
<language>pt</language>
<image>
<title>TabNews</title>
<url>https://www.tabnews.com.br/favicon-mobile.png</url>
<link>https://www.tabnews.com.br/recentes/rss</link>
</image>
<item>
<title>
Pitch: Criamos um Quiz para Ajudar a Escolher o Candidato Ideal com a Ajuda do ChatGPT!
</title>
<link>
https://www.tabnews.com.br/thhg/pitch-criamos-um-quiz-para-ajudar-a-escolher-o-candidato-ideal-com-a-ajuda-do-chatgpt
</link>
<guid>
https://www.tabnews.com.br/thhg/pitch-criamos-um-quiz-para-ajudar-a-escolher-o-candidato-ideal-com-a-ajuda-do-chatgpt
</guid>
<pubDate>Thu, 12 Sep 2024 13:27:36 GMT</pubDate>
<description>
Olá, comunidade Tabnews! Nos últimos dias, criamos um quiz interativo para ajudar as pessoas a escolherem o candidato ideal com base em propostas específicas. O objetivo é tornar o proces...
</description>
<content:encoded>
<div class="markdown-body"><p>Olá, comunidade Tabnews!</p><p>Nos últimos dias, criamos um <strong>quiz interativo</strong> para ajudar as pessoas a escolherem o candidato ideal com base em propostas específicas. O objetivo é tornar o processo de escolha mais divertido e informativo, e adivinhem: tudo isso foi feito <strong>100% com a ajuda do ChatGPT</strong>! 🚀</p><h2 id="thhg-content-como-fizemos">Como fizemos?</h2><p>Aqui está um breve resumo:</p><ul><li><strong>Tempo estimado</strong>: Levamos aproximadamente <strong>2 a 3 horas</strong>.</li><li><strong>Iterações com o ChatGPT</strong>: Foram cerca de <strong>10 a 15 interações</strong>.</li><li>Cada etapa do desenvolvimento foi feita em colaboração com o ChatGPT, desde a estrutura do código em React até o layout e a funcionalidade mobile-friendly.</li><li>Além disso, recebemos sugestões para integração de funcionalidades como <strong>compartilhamento em redes sociais</strong> e <strong>tagueamento de eventos no GA4</strong>.</li></ul><h2 id="thhg-content-o-que-construímos">O que construímos?</h2><ul><li><strong>Quiz interativo</strong>: O quiz ajuda o usuário a identificar qual candidato melhor representa suas preferências com base em propostas específicas.</li><li><strong>Layout responsivo</strong>: Com um design otimizado para mobile, o quiz oferece uma experiência agradável em qualquer dispositivo.</li><li><strong>Integração com redes sociais</strong>: Ao final, o usuário pode compartilhar o resultado no <strong>WhatsApp</strong> e <strong>Facebook</strong>.</li></ul><p>👉 <strong>Link para o quiz</strong>: <a href="https://quiz-candidato-ideal.web.app/" rel="nofollow">https://quiz-candidato-ideal.web.app/</a></p><h2 id="thhg-content-o-que-achamos-incrível">O que achamos incrível?</h2><p>Esse projeto foi uma verdadeira colaboração com o ChatGPT, que nos ajudou a estruturar, refinar e solucionar desafios durante o desenvolvimento. A flexibilidade e agilidade desse processo foi algo que realmente nos surpreendeu.</p><h2 id="thhg-content-e-agora">E agora?</h2><p>Estamos muito animados para compartilhar isso com vocês e adoraríamos ouvir o feedback da comunidade Tabnews! 😄</p><ul><li><strong>Dicas</strong>: Se tiverem sugestões de melhorias para o quiz, ou novas ideias para torná-lo ainda mais interativo, por favor, compartilhem! Qualquer dica de performance, UX/UI, ou até mesmo ferramentas que poderiam enriquecer o projeto são muito bem-vindas.</li><li><strong>Curiosidade</strong>: Alguém mais aqui já utilizou o ChatGPT para criar algo semelhante? Como foi a experiência de vocês?</li></ul><p>Vamos trocar conhecimento e continuar crescendo juntos!</p></div>
</content:encoded>
</item>
</channel>
</rss>
*/ 

import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/utils/news/makedata";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const feedsData = await fetchData();
    res.status(200).json(feedsData);
}