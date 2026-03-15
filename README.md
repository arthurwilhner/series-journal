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

## 📸 Demonstração do Projeto

Após executar o projeto, as telas ficarão assim:

![Demonstração das páginas](src\Show.gif) 
![Funcionamento do Cadastro](src\Cadastro.gif)



## 🚀 Tecnologias e Ferramentas Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **Vite:** Ferramenta de build otimizada para um ambiente de desenvolvimento rápido.
* **React Router DOM:** Gerenciamento de rotas para a navegação SPA.
* **CSS Flexbox:** Estilização global focada em alinhamento centralizado e responsividade básica.

## 🧩 Descrição dos Componentes e Estrutura

A aplicação foi dividida em componentes modulares para facilitar a manutenção e o reaproveitamento de código:

* **`App.jsx`**: Atua como a "Fonte da Verdade" do projeto. Gerencia as rotas da aplicação e mantém o estado global da lista de séries, passando os dados e funções via *props* para os componentes filhos.
* **`NavBar`**: Componente de navegação superior fixo. Utiliza os links do React Router DOM para permitir a transição entre as páginas sem recarregar o navegador.
* **`SerieForm`**: Componente responsável por renderizar o formulário de cadastro. Gerencia seu próprio estado local para os inputs e realiza a validação dos dados antes de enviar a nova série para o estado global.
* **`SerieList`**: Recebe a lista de séries e o termo de busca para renderizar a tabela ou grade de séries. 
* **`SerieItem`**: Representa uma linha/item individual dentro da lista. Ele encapsula a lógica de exibição dos dados da série e também os inputs para a **edição in-line**, além de emitir as ações de exclusão e salvamento.
* **Pages (`Home`, `About`, `Cadastro`, `List`)**: Componentes de contêiner que agrupam a lógica e os componentes específicos de cada rota da aplicação.

## 🧠 Decisões de Desenvolvimento

* **Estado Centralizado no App.jsx:** Como o escopo da Fase 1 é focado em fundamentos, optei por centralizar o estado das séries no componente raiz (`App.jsx`) e passá-lo via *props* (Prop Drilling). Isso evitou a complexidade prematura de ferramentas como Redux ou Context API.
* **Edição In-line:** Para melhorar a experiência do usuário (UX), a edição das séries foi implementada diretamente no componente `SerieItem`. Isso elimina a necessidade de criar uma página separada apenas para edição, tornando o fluxo mais rápido e moderno.
* **CSS e Flexbox:** A estilização foi feita com CSS puro focado em Flexbox, garantindo um layout limpo, alinhamento consistente e uma base sólida para futuras implementações de responsividade avançada.

## ⚙️ Pré-requisitos e Execução

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. 

Para executar o projeto localmente:

1. **Abra o terminal** e navegue até a pasta raiz do projeto.
2. **Instale as dependências** executando o comando:
   ```bash
   npm install

3. **Rode o comando:**
```
    npm run dev
```

4. **Acesse no navegador:** O terminal exibirá um link local. Segure Ctrl (ou Cmd no Mac) e clique no link para abrir o sistema.

5. **Estrutura principal da pasta:**
```
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
```