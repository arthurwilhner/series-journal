# 📺 Series Journal (Gerenciador de Séries)

Este é um projeto de gerenciamento de séries desenvolvido como parte da Fase 01 da disciplina de Desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas da PUCRS.

O sistema consiste em um CRUD (Create, Read, Update, Delete) que permite ao usuário cadastrar, visualizar, editar e excluir suas séries assistidas de forma rápida e intuitiva, operando como uma Single Page Application (SPA).

## ✨ Funcionalidades

* **Cadastro de Séries:** Inserção de novas séries com validação de campos obrigatórios.
* **Listagem:** Visualização de todas as séries cadastradas com seus respectivos detalhes (Título, Temporadas, Lançamento, Diretor, Produtora, Categoria e Data Assistido).
* **Edição In-line:** Edição rápida e prática diretamente na linha da série, sem a necessidade de navegar para outra tela.
* **Exclusão:** Remoção de séries da lista com atualização instantânea.
* **Busca em Tempo Real:** Filtro textual que atualiza a lista de séries exibidas conforme o usuário digita o título.
* **Navegação SPA:** Transição fluida entre as páginas de Cadastro, Lista, Sobre e Home, sem recarregamento do navegador.

## 🚀 Tecnologias e Ferramentas Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **Vite:** Ferramenta de build otimizada para um ambiente de desenvolvimento rápido.
* **React Router DOM:** Gerenciamento de rotas para a navegação SPA.
* **CSS Flexbox:** Estilização global focada em alinhamento centralizado e responsividade básica.

## ⚙️ Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina para gerenciar os pacotes e rodar o servidor local.

## 🛠️ Como executar o projeto localmente

Quando você baixa este repositório, os arquivos de dependência do React não vêm inclusos. Siga os passos abaixo para baixar as dependências e iniciar a aplicação:

1. **Abra o terminal** e navegue até a pasta raiz do projeto (`series-journal`).
2. **Instale as dependências** executando o comando:
```
   npm install
```

3. **Rode o comando:**
```
    npm run dev
```

4. **Acesse no navegador:** O terminal exibirá um link local (geralmente http://localhost:5173/). Segure Ctrl (ou Cmd no Mac) e clique no link para abrir o sistema.

5. **Estrutura principal da pasta:**
src/
├── components/
│   ├── NavBar/         # Componente de navegação superior
│   ├── SerieForm/      # Formulário de cadastro com validação
│   └── SerieList/      # Componentes da lista (incluindo o SerieItem para edição in-line)
├── pages/
│   ├── Home.jsx        # Página inicial
│   ├── About.jsx       # Informações sobre o projeto (Sobre)
│   ├── Cadastro.jsx    # Página que abriga o formulário
│   └── List.jsx        # Página que exibe a lista e o campo de busca
├── App.jsx             # Gerenciamento de rotas e estado global (Fonte da Verdade)
└── index.css           # Estilização global
