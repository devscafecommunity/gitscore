import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { postFilePaths, POSTS_PATH } from "../../../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";


// Filter posts by date desc -> asc
// newest -> oldest
// dateformat: dd-mm-yyyy
function filterDate(posts) {
  return posts.sort((a, b) => {
    const dateA = a.data.date.split("-").reverse().join();
    const dateB = b.data.date.split("-").reverse().join();
    return dateB.localeCompare(dateA);
  });
}

// API
export default function GetNewerPosts( req, res ){
  const posts = postFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };

    /*
    {
  "posts": [
      {
        "content": "\r\n# Clean Code com Princípios S.O.L.I.D\r\n\r\nQuando se trata de escrever código de qualidade, existem várias diretrizes e princípios que podem nos ajudar a alcançar esse objetivo. Dois desses princípios amplamente reconhecidos são o \"Clean Code\" e os princípios S.O.L.I.D. Neste artigo, exploraremos como você pode escrever código mais limpo, aderindo aos princípios S.O.L.I.D.\r\n\r\n## **Clean Code: O que é?**\r\n\r\n\"Clean Code\" é um conceito popularizado por Robert C. Martin em seu livro de mesmo nome. Ele enfatiza a importância de escrever código que seja fácil de ler, entender e manter. O código limpo é aquele que comunica suas intenções de maneira clara e não tem complexidades desnecessárias.\r\n\r\n## **Princípios S.O.L.I.D**\r\n\r\nOs princípios S.O.L.I.D são um conjunto de cinco princípios de design de software que visam criar código robusto e de fácil manutenção. Eles são:\r\n\r\n### **1. Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única**\r\n\r\nEste princípio afirma que uma classe deve ter apenas uma razão para mudar. Em outras palavras, uma classe deve ter uma única responsabilidade.\r\n\r\n**Exemplo de aplicação:**\r\n\r\n```python\r\n# Antes\r\nclass Pedido:\r\n    def calcular_total(self, itens):\r\n        # Código para calcular o total\r\n\r\n    def gerar_relatorio(self, itens):\r\n        # Código para gerar um relatório\r\n\r\n# Depois\r\nclass Pedido:\r\n    def calcular_total(self, itens):\r\n        # Código para calcular o total\r\n\r\nclass Relatorio:\r\n    def gerar(self, itens):\r\n        # Código para gerar um relatório\r\n```\r\n\r\n### **2. Open-Closed Principle (OCP) - Princípio Aberto-Fechado**\r\n\r\nO OCP afirma que as entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação.\r\n\r\n**Exemplo de aplicação:**\r\n\r\n```python\r\n# Antes\r\nclass CalculadoraDeImpostos:\r\n    def calcular(self, pedido):\r\n        if pedido.tipo == 'normal':\r\n            # Cálculo de imposto normal\r\n        elif pedido.tipo == 'vip':\r\n            # Cálculo de imposto VIP\r\n\r\n# Depois\r\nclass CalculadoraDeImpostos:\r\n    def calcular(self, pedido):\r\n        # Lógica comum\r\n\r\nclass CalculadoraDeImpostosVIP(CalculadoraDeImpostos):\r\n    def calcular(self, pedido):\r\n        # Lógica específica para VIP\r\n```\r\n\r\n### **3. Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov**\r\n\r\nEsse princípio afirma que objetos de uma classe derivada devem ser capazes de substituir objetos de uma classe base sem que o programa perca a consistência.\r\n\r\n**Exemplo de aplicação:**\r\n\r\n```python\r\n# Antes\r\nclass Ave:\r\n    def voar(self):\r\n        pass\r\n\r\nclass Pinguim(Ave):\r\n    def voar(self):\r\n        # Pinguins não voam, mas precisam implementar o método\r\n\r\n# Depois\r\nclass Ave:\r\n    def voar(self):\r\n        pass\r\n\r\nclass Pinguim(Ave):\r\n    def voar(self):\r\n        raise Exception(\"Pinguins não voam\")\r\n```\r\n\r\n### **4. Interface Segregation Principle (ISP) - Princípio da Segregação de Interfaces**\r\n\r\nO ISP afirma que uma classe não deve ser forçada a implementar métodos que ela não utiliza. Interfaces devem ser segregadas para serem mais específicas.\r\n\r\n**Exemplo de aplicação:**\r\n\r\n```python\r\n# Antes\r\nclass Trabalhador:\r\n    def trabalhar(self):\r\n        pass\r\n\r\n    def comer(self):\r\n        pass\r\n\r\n# Depois\r\nclass Trabalhador:\r\n    def trabalhar(self):\r\n        pass\r\n\r\nclass Comedor:\r\n    def comer(self):\r\n        pass\r\n```\r\n\r\n### **5. Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência**\r\n\r\nEsse princípio afirma que módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes, detalhes devem depender de abstrações.\r\n\r\n**Exemplo de aplicação:**\r\n\r\n```python\r\n# Antes\r\nclass GerenciadorDePedidos:\r\n    def __init__(self):\r\n        self.repositorio = RepositorioDePedidos()\r\n\r\n# Depois\r\nclass GerenciadorDePedidos:\r\n    def __init__(self, repositorio):\r\n        self.repositorio = repositorio\r\n```\r\n\r\n## **Conclusão**\r\n\r\nAo aplicar os princípios S.O.L.I.D juntamente com a filosofia do código limpo, você estará no caminho certo para escrever código mais legível, extensível e de fácil manutenção. Lembre-se de que esses princípios não são regras rígidas, mas diretrizes que podem ajudar a melhorar a qualidade do seu código. Pratique-os continuamente e adapte-os às necessidades específicas do seu projeto para alcançar um código de alta qualidade.",
        "data": {
          "author": "Pedro K. Jesus",
          "title": "Clean Code com Princípios S.O.L.I.D",
          "description": "Como escrever código mais limpo, aderindo aos princípios S.O.L.I.D e a filosofia do clean code.",
          "date": "23-09-2023",
          "image": "/postassets/conceitos-solid-e-cleancode.png",
          "cover": "/postassets/conceitos-solid-e-cleancode.png"
        },
        "filePath": "conceitos-solid-e-cleancode.mdx"
      }
    ]
  }
    */ 
  });

  let filteredPosts = filterDate(posts);

  /*
  Response:
  [
    {
      "title": "Clean Code com Princípios S.O.L.I.D",
      "description": "Como escrever código mais limpo, aderindo aos princípios S.O.L.I.D e a filosofia do clean code.",
      "date": "23-09-2023",
      "image": "/postassets/conceitos-solid-e-cleancode.png",
      "cover": "/postassets/conceitos-solid-e-cleancode.png",
      "slug": "conceitos-solid-e-cleancode"
    }
  ]
  */ 

  let contentresponse = filteredPosts.map((post) => {
    return {
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      image: post.data.image,
      cover: post.data.cover,
      slug: post.filePath.replace(/\.mdx?$/, ""),
    };
  });

  return res.status(200).json(contentresponse );
}