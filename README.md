📜 Anime API
Bem-vindo ao projeto da Anime API! Esta é uma API REST simples, construída para gerenciar uma lista de animes. Ela foi projetada para demonstrar as operações de um CRUD (Criar, Ler, Atualizar, Deletar) de forma prática.

Esta API é perfeita para ser utilizada como back-end para um aplicativo front-end, como um projeto React Native com Expo.

🚀 Tecnologias Utilizadas
Node.js: O ambiente de execução JavaScript que hospeda a API.

Express.js: O framework web que facilita a criação de rotas e manipulação de requisições HTTP.

TypeScript: Uma camada de tipagem para JavaScript que torna o código mais robusto e fácil de manter.

nodemon: Uma ferramenta de desenvolvimento que reinicia o servidor automaticamente a cada alteração no código.

dotenv: Módulo para carregar variáveis de ambiente (como a porta do servidor) de um arquivo .env.

📁 Estrutura do Projeto
A estrutura de pastas foi organizada para manter o código limpo e modular:

anime-api/
├── src/
│   ├── database.ts         # Contém a base de dados de animes (em memória).
│   ├── routes.ts           # Define todos os endpoints e a lógica da API.
│   └── server.ts           # O arquivo principal que inicializa e configura o servidor Express.
├── .env                    # Variáveis de ambiente.
├── package.json            # Dependências e scripts do projeto.
└── tsconfig.json           # Configurações do compilador TypeScript.

⚙️ Como Rodar a API
Siga os passos abaixo para ter a API rodando na sua máquina:

Instale as dependências do projeto usando o npm:

npm install

Inicie o servidor em modo de desenvolvimento com o comando:

npm run dev

O servidor estará disponível em http://localhost:3000/api/animes. Mantenha este terminal aberto enquanto estiver trabalhando no front-end.

🗺️ Endpoints da API
A API oferece os seguintes endpoints para manipulação dos dados de animes:

Método HTTP

Endpoint

Descrição

GET

/api/animes

Retorna uma lista com todos os animes.

GET

/api/animes/:id

Retorna um anime específico pelo ID.

POST

/api/animes

Cria um novo anime. Requer um corpo JSON com title, genre, episodes e imageUrl.

PUT

/api/animes/:id

Atualiza um anime existente. Requer o ID na URL e um corpo JSON.

DELETE

/api/animes/:id

Remove um anime da lista pelo ID.

Exemplo de Requisição POST para Adicionar um Anime
URL: http://localhost:3000/api/animes

Corpo (JSON):

{
  "title": "Jujutsu Kaisen",
  "genre": "Fantasia Sombria",
  "episodes": 47,
  "imageUrl": "[https://cdn.myanimelist.net/images/anime/10/83431.jpg](https://cdn.myanimelist.net/images/anime/10/83431.jpg)"
}

📱 Como Usar com um App Mobile
Para que seu aplicativo em React Native ou Expo se conecte a esta API, você precisa usar o endereço IP da sua máquina em vez de localhost.

Encontre seu endereço IPv4 local (ex: 192.168.10.4).

No seu código, use a URL da API da seguinte forma:
const API_URL = 'http://192.168.10.4:3000/api/animes';

Garanta que tanto o seu computador quanto o seu dispositivo móvel estejam conectados na mesma rede Wi-Fi.