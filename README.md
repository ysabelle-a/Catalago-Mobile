# Catálogo Mobile

## 1. Descrição

O Catálogo Mobile é uma aplicação desenvolvida em React Native utilizando Expo e TypeScript.

A aplicação permite realizar login, visualizar produtos separados por categorias masculina e feminina, acessar os detalhes de um produto e realizar logout.

Os produtos são obtidos através de uma API REST.

## 2. Funcionalidades

1. Login com validação de e-mail e senha.
2. Armazenamento temporário do e-mail do usuário.
3. Listagem de produtos através de API REST.
4. Separação entre produtos masculinos e femininos.
5. Visualização dos detalhes dos produtos.
6. Navegação entre as telas.
7. Logout e remoção dos dados armazenados.

## 3. Tecnologias Utilizadas

1. React Native
2. Expo
3. TypeScript
4. Expo Router
5. AsyncStorage
6. DummyJSON
7. Git
8. GitHub

## 4. Estrutura do Projeto

catalogo-mobile/

 app/
    index.tsx
    _layout.tsx
    first-page.tsx

    product/
        [id].tsx
        styles.ts

 src/
    components/
        button-custom/
        product-card/

    screens/
        first-page/
        home-screen/

    services/
        auth.ts
        products.ts
 package.json
 app.json
 tsconfig.json
 README.md

A pasta app contém as rotas da aplicação.

A pasta src/components contém os componentes reutilizáveis.

A pasta src/screens contém as telas.

A pasta src/services contém os serviços de autenticação e consumo da API.

## 5. Como Executar

## 5.1 Pré-requisitos

É necessário possuir:

- Node.js
- npm
- Git
- Expo

## 5.2 Clonar o Repositório
git clone https://github.com/ysabelle-a/Catalago-Mobile.git

Acessar a pasta:

cd Catalago-Mobile

## 5.3 Instalar as Dependências
npm install

## 5.4 Executar a Aplicação
npx expo start

Para executar no navegador:

npx expo start --web

## 6. Tela de Login

A tela inicial permite que o usuário informe seu e-mail e senha.

Os dados são validados antes do acesso ao catálogo.

Após um login válido, o e-mail informado é armazenado temporariamente utilizando AsyncStorage.

## 7. Catálogo de Produtos

Após o login, o usuário pode visualizar os produtos obtidos através da API REST.

Os produtos são separados entre as categorias masculina e feminina.

Cada produto é apresentado em um card contendo informações como imagem, nome e preço.

## 8. Detalhes do Produto

Ao selecionar um produto, o usuário é direcionado para uma tela com informações detalhadas.

São apresentadas informações como:

- Imagem do produto
- Nome
- Preço
- Marca
- Descrição
- Avaliação
- Estoque

## 9. Consumo da API REST

Os produtos são obtidos através da API DummyJSON.

Endpoint utilizado para listar os produtos:

https://dummyjson.com/products?limit=0

Endpoint utilizado para consultar um produto específico:

https://dummyjson.com/products/{id}

O consumo da API está implementado no arquivo:

src/services/products.ts

A aplicação utiliza funções assíncronas para realizar as requisições e obter os dados dos produtos.

## 10. Armazenamento Local

O AsyncStorage é utilizado para armazenar temporariamente o e-mail informado pelo usuário durante o login.

No logout, o e-mail armazenado é removido.

## 11. Logout

A aplicação possui uma opção de logout na tela de catálogo.

Ao realizar o logout, os dados armazenados são removidos e o usuário retorna para a tela de login.

## 12. Navegação

A navegação da aplicação é realizada utilizando Expo Router.

O fluxo principal possui:

- Tela de Login
- Catálogo de Produtos
- Detalhes do Produto
- Retorno ao Catálogo
- Logout
- Retorno ao Login

## 13. Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos de:

- Desenvolvimento mobile
- Componentização
- TypeScript
- Gerenciamento de estado
- Requisições assíncronas
- Consumo de API REST
- Armazenamento local
- Navegação entre telas
- Organização de código
- Controle de versão com Git

## 14. Repositório

O código-fonte do projeto está disponível no GitHub:

https://github.com/ysabelle-a/Catalago-Mobile.git