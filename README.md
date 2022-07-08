<h1 align="center">
  <img src="https://github.com/LeoHPC/teste-neo-estech/blob/main/src/assets/favicon.png" width="100">
  <br>
  Teste NEO Estech
</h1>

<p align="center">
  <a href="https://teste-neo-estech.vercel.app">Demonstração</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/leohpc/teste-neo-estech">
  <img src="https://img.shields.io/github/issues/leohpc/teste-neo-estech">
  <img src="https://img.shields.io/github/forks/leohpc/teste-neo-estech">
  <img src="https://img.shields.io/github/stars/leohpc/teste-neo-estech">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44">
</p>

<p align="center">
  <a href="#exclamation-sobre">Sobre</a> | <a href="#camera-funcionalidades">Funcionalidades</a> | <a href="#rocket-tecnologias">Tecnologias</a> | <a href="#mag-como-visualizar">Como visualizar</a> | <a href="#memo-licença">Licença</a>
</p>

<img src="https://github.com/LeoHPC/teste-neo-estech/blob/main/src/demos/login.png">

## :exclamation: Sobre

Este repositório é destinado ao teste da empresa NEO Estech, no qual consistia na criação de uma dashboard com três elementos principais: Chamados abertos, gráfico de temperatura e status da internet. Tudo isso com base em clientes e instalações específicas do usuário.

## :camera: Funcionalidades

Além de possuir autenticação, a plataforma tem três funcionalidades principais: Mostrar os chamados abertos, gráfico de temperatura e status da internet atual.

A parte de gráficos é voltada para criação de gráficos utilizando a biblioteca "Recharts", onde foi possível criar um gráfico moderno, responsivo e personalizável, do qual mostra ao usuário o nível percentual de temperatura atual, como visto abaixo:
<img src="https://github.com/LeoHPC/teste-neo-estech/blob/main/src/demos/graphic.png" />

Além disso, a aba de chamados abertos é responsável por fazer uma chamada à API fornecida pela empresa, através do client-side, e mostrar esses dados ao usuário através de uma tabela feita com Ant Design, por ordem de data mais recente
<img src="https://github.com/LeoHPC/teste-neo-estech/blob/main/src/demos/openCalls.png" />

Há também a parte de status da internet, na qual mostra, obviamente, o status atual da internet da instalação desejada, com design específico caso esteja online ou offline:
<img src="https://github.com/LeoHPC/teste-neo-estech/blob/main/src/demos/internetStatus.png" />

## :rocket: Tecnologias

Este projeto foi criado com as seguintes tecnologias:

- JavaScript
- React
- Recharts
- TailwindCSS
- Ant Design
- Date FNS
- Highlight Words
- Axios
- Vite

## :mag: Como visualizar

Pelo seu terminal, execute os seguintes comandos para executar a aplicação localmente:
```shell
  # Clone o repositório
  git clone github.com/LeoHPC/teste-neo-estech.git
  
  # Acesse a pasta do projeto
  cd teste-neo-estech
  
  # Instale as dependências 
  npm i
  
  # Rode o projeto
  npm run dev
  
  # Acesse http://localhost:3000/
```
Ou, simplesmente, clique <a href="https://teste-neo-estech.vercel.app">aqui</a> para ser redirecionado para o site da aplicação!

Um login de exemplo é:
```
  {
    "login": "testedev",
    "password": "12345678"
  }
```

## :memo: Licença

Este projeto é licenciado sobre a licença MIT. Veja a [LICENÇA](https://opensource.org/licenses/MIT) para mais informações.

---

Feito com ❤ por Leonardo Henrique :kissing: [Contato](https://www.linkedin.com/in/leonardo-henrique-33a3ab210)
