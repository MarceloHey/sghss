# SGHSS - API de Gestão Hospitalar

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e Docker Compose
- (Opcional) Node.js v16+ para teste local

### Execução com Docker

```bash
# Clone o projeto
git clone https://github.com/MarceloHey/sghss.git
cd sghss-api

# Inicie os containers
docker-compose up --build

# Para rodar localmente
npm install
npm run dev
```

A API estará disponível em:

```bash
http://localhost:3000
```

### Testando os Endpoints

Dentro do projeto existe um arquivo chamado tests.json, nele possuem configurações dos endpoints à serem chamados através do Insomnia, importe esse arquivo para que todas as requisiçôes apareçam, para rotas que precisam de token de autenticação, copie o token da resposta do endpoint `/login`, vá na configuração do seu ambiente do insomnia e altere o valor da variável jwt_token

Endpoints Principais
| Método | Endpoint | Body |
| ------ | -------- | ------------ |
| POST | /api/auth/register | {"email":"...","password":"..."} |
| POST | /api/auth/login | {"email":"...","password":"..."} |
| POST | /api/pacientes | {"name":"...","birthDate":"..."} |
| GET | /api/pacientes | - |

### Para parar todos os serviços

```bash
docker-compose down
```
