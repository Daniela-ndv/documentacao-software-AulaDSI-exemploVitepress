import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'pt-BR',
  title: 'E-commerce Doce Luz',
  description: 'Documentação do sistema.',

  themeConfig: {
    nav: [
      { text: 'Visão geral', link: '/paginas/base' },

      {
        text: 'Menu',
        items: [
          { text: 'Descrição ', link: '/paginas/descricao' },
          { text: 'Requisitos Funcionais', link: '/paginas/requisitos/r-func' },
          {
            text: 'Requisitos Não-Funcionais',
            link: '/paginas/requisitos/r-Nfunc',
          },
          { text: 'Diagrama Casos de Uso', link: '/paginas/diagramas/d-casos' },
          { text: 'Diagrama de Classe', link: '/paginas/diagramas/d-classe' },
          { text: 'Protótipo', link: '/paginas/prototipo' },
          { text: 'Outros detalhes', link: '/paginas/detalhes' },
        ],
      },
    ],

    sidebar: [
      { text: 'Visão geral ', link: '/paginas/base' },
      { text: 'Descrição ', link: '/paginas/descricao' },
      {
        text: 'Funcionalidades',
        collapsed: false,
        items: [
          { text: 'Requisitos Funcionais', link: '/paginas/requisitos/r-func' },
          {
            text: 'Requisitos Não Funcionais ',
            link: '/paginas/requisitos/r-Nfunc',
          },
        ],
      },
      {
        text: 'Diagramas',
        collapsed: false,
        items: [
          { text: 'Casos de Uso ', link: '/paginas/diagramas/d-casos' },
          { text: 'Classes ', link: '/paginas/diagramas/d-classe' },
        ],
      },
      { text: 'Protótipo ', link: '/paginas/prototipo' },
      { text: 'Outros detalhes ', link: '/paginas/detalhes' },
      { text: 'Considerações finais ', link: '/paginas/consid' },
    ],

    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/doceluz.oficial/' },

      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: '...',
      },
    ],
    footer: {
      message: 'Programação Web I — 2023/1.',
      copyright: 'Copyright © 2023/1',
    },
  },
});
