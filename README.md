# Audio Shop

**Audio Shop** é um projeto fictício de e-commerce criado para fins de aprendizado e para dmostrar meus conhecimentos em desenvolvimento full stack. O objetivo principal desse projeto é testar e demonstrar o uso de tecnologias modernas no desenvolvimento de uma aplicação web com backend e frontend, além de focar em boas práticas como autenticação de usuários, consumo de APIs REST e desenvolvimento responsivo.

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **Crypto**: Para criptografar senhas de usuários.
- **CORS**: Para permitir solicitações de diferentes origens.
- **Passport**: Middleware para autenticação com suporte a estratégias como local.
- **Docker**: Para containerização do backend.
- **Nodemon**: Para reinicialização automática durante o desenvolvimento.

### Frontend

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Build tool para desenvolvimento rápido.
- **Material-UI**: Biblioteca de componentes React para UI.
- **React Router**: Para navegação entre páginas.
- **React Scroll**: Para navegação suave.
- **React Icons**: Conjunto de ícones para uso no React.
- **Emotion**: Para estilos CSS-in-JS.

## Informações Técnicas

### Backend:

O backend do projeto foi desenvolvido utilizando o Node.js com o framework Express e utiliza o MongoDB como banco de dados. A autenticação é realizada com o JWT e as senhas dos usuários são criptografadas utilizando a biblioteca `crypto`.

#### Estrutura de Pastas (Backend):

#### backend

```csharp
├── node_modules                 // Dependências do projeto
├── src
│ ├── auth                       // Arquivo de autenticação e cadastro de usuários
│ │ └── auth.js                  // Conexão com o banco de dados
│ ├── controllers                // Controladores para cada recurso
│ │ ├── orders.js                // Lógica para lidar com pedidos
│ │ ├── products.js              // Lógica para lidar com produtos
│ │ └── users.js                 // Lógica para lidar com usuários
│ ├── data                       // Database
│ │ └── productsData.json        // Database de produtos para testes antes de conectar com o banco de dados MongoDB
│ ├── dataAccess                 // Acesso ao banco de dados
│ │ ├── Order.js                 // Lógica para acesso aos pedidos
│ │ ├── Product.js               // Lógica para acesso aos produtos
│ │ └── User.js                  // Lógica para acesso aos usuários cadastrados
│ ├── database                   // Conexão ao banco de dados MongoDB
│ │ └── mongo.js                 // Lógica para conectar ao banco de dados MongoDB
│ ├── helpers                    // Funções utilitárias
│ │ └── httpResponse.js          // Formatação de respostas HTTP
│ ├── routes                     // Definição das rotas
│ │ ├── orderRoutes.js           // Rotas para pedidos
│ │ ├── productRoutes.js         // Rotas para produtos
│ │ └── userRoutes.js            // Rotas para usuários
│ └── index.js                   // Configuração principal do servidor (Express)
├── .env                         // Variáveis de ambiente
├── Dockerfile                   // Configuração para Docker
├── package-lock.json            // Lock file do npm
└── package.json                 // Dependências e scripts do backend
```

### Frontend:

O frontend é uma aplicação React, que utiliza o Vite como bundler. Ele está estruturado para ter uma navegação fluida, com componentes reutilizáveis como botões personalizados, cards de produtos e modais.

#### Estrutura de Pastas (Frontend):

### frontend

```csharp
├── node_modules              // Dependências do projeto
├── public
│ └──imgs                     // Imagens públicas (logo, ícones, etc.)
│     ├── auth                // Imagens específicas para a página de autenticação
│     ├── icons               // Ícones utilizados no projeto
│     └── products            // Imagens dos produtos
├── src
│ ├── components              // Componentes reutilizáveis
│ │ ├── buttons               // Botões customizados
│ │ ├── confirmOrderPopup     // Modal de confirmação do pedido
│ │ ├── loading               // Componente de loading
│ │ ├── navbar                // Navbar
│ │ ├── productCard           // Cartão de produto
│ │ └── productPopup          // Modal de detalhes do produto
│ ├── contexts                // Gerenciamento de estado (Ex.: Cart)
│ │ └── useCartContext.js     // Contexto do carrinho
│ ├── pages                   // Páginas da aplicação
│ │ ├── auth                  // Páginas de autenticação
│ │ ├── cart                  // Página de carrinho
│ │ ├── home                  // Página inicial
│ │ ├── orders                // Página de pedidos do usuário
│ │ ├── productDetails        // Página de detalhes do produto a ser implementada futuramente
│ │ └── profile               // Página de perfil
│ ├── services                // Funções para consumir API
│ │ ├── authService.js        // Funções relacionadas a autenticação e login
│ │ ├── orderService.js       // Funções para pedidos
│ │ └── productService.js     // Funções para produtos
│ ├── App.jsx                 // Componente raiz da aplicação
│ ├── index.css               // Estilização global da aplicação
│ └── main.jsx                // Ponto de entrada da aplicação
├── vercel.json               // Configurações para deploy na Vercel
├── vite.config.js            // Configurações do Vite
├── package.json              // Dependências e scripts do frontend
└── package-lock.json         // Lock file do npm
```

## Funcionalidades Implementadas

- **Cadastro e Login de Usuários**: Autenticação de usuários com JWT e criptografia de senhas com Crypto.
- **Carrinho de Compras**: Adicionar e remover produtos, ver o total da compra e quantidade de itens.
- **Página de Produtos**: Listagem de produtos com filtros.
- **Detalhes do Produto**: Visualização de informações detalhadas sobre o produto.
- **Página de Pedidos**: Visualização do histórico de pedidos do usuário.

## Usuários de Teste

- **Usuário de Teste**:
  - Email: `test@email.com`
  - Senha: `test123`

## Link do Design de Referência

O design do projeto foi baseado no [E-Commerce UI Kit V1.1](https://www.figma.com/community/file/900960330469075490/e-commerce-ui-kit-v1-1) disponível no Figma Community.

## Como Rodar o Projeto

### Backend:

1. Clone o repositório do backend.
2. Crie um arquivo `.env` e configure as variáveis de ambiente necessárias.
3. Rode o comando:
   ```bash
   npm install
   npm run dev
   ```

````

### Frontend:

1. Clone o repositório do frontend
2. Rode o comando:
   ```bash
   npm install
   npm run dev
````

## Deploy:

- Backend: Deploy realizado no Vercel [Link Aqui](link será adicionado futuramente).
- Frontend: Deploy realizado no Vercel [Link Aqui](link será adicionado futuramente).

## Próximos Passos:

- Desenvolver a versão desktop do projeto.
- Implementar pequenas alterações para melhorar a experiência do usuário.
