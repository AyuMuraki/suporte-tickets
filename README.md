# **🎟️ API de Tickets de Suporte com Node.js Puro**

## **🎯 Objetivo do Projeto**
🤓 Este projeto foi desenvolvido com o objetivo de praticar os fundamentos do Node.js puro, criando uma API simples para gerenciamento de tickets de suporte técnico, sem o uso de bibliotecas externas.





## **✨ 📚 O que eu aprendi.**


Durante o desenvolvimento dessa API, você irá te ajudar a entender diversos conceitos fundamentais do back-end com Node.js:

✅ Como lidar com requisições e respostas HTTP

✅ Captura de parâmetros na URL (req.url)

✅ Leitura e manipulação de dados do corpo da requisição

✅ Uso do módulo fs para leitura e escrita em arquivos JSON

✅ Geração automática de UUIDs

✅ Como atualizar, filtrar e excluir registros de um arquivo

✅ Organização de rotas e tratamento manual com if/else

✅ Testes de rotas com o Insomnia para simular requisições reais


## 👩🏻‍💻 Funcionalidades. 


**🚀 A API permite:**

📥 Criar tickets

📄 Listar todos os tickets

🔍 Buscar ticket por ID

📝 Atualizar descrição e equipamento de um ticket

✅ Encerrar tickets (mudança de status)

❌ Excluir tickets


# 🗂️ Estrutura do Projeto 
```

C:.
│   package.json
│
└───src
    │   server.js
    │
    ├───controllers
    │   └───tickets
    │           create.js
    │           index.js
    │           remove.js
    │           update.js
    │           updateStatus.js
    │
    ├───database
    │       database.js
    │       db.json
    │
    ├───middlewares
    │       jsonHandler.js
    │       routeHandler.js
    │
    ├───routes
    │       index.js
    │       tickets.js
    │
    └───utils
            extractQueryParams.js
            parseRoutePath.js

```


## 🗂️ Estrutura do Projeto - API de Tickets
A tabela a seguir detalha a estrutura do projeto, organizada por pastas e arquivos. Essa organização facilita a visualização das responsabilidades de cada parte do sistema, promovendo uma melhor compreensão e manutenção do código.


| Caminho                                | Responsabilidade                                                                 |
|----------------------------------------|----------------------------------------------------------------------------------|
| `package.json`                         | Define informações do projeto, scripts e dependências (mesmo que nenhuma por enquanto). |
| `src/server.js`                        | Ponto de entrada da aplicação. Cria o servidor e gerencia o roteamento inicial. |
| `src/controllers/tickets/create.js`    | Cria um novo ticket com as informações recebidas.                               |
| `src/controllers/tickets/index.js`     | Lista todos os tickets ou filtra por parâmetros (query).                        |
| `src/controllers/tickets/remove.js`    | Remove um ticket pelo ID.                                                       |
| `src/controllers/tickets/update.js`    | Atualiza equipamento e descrição de um ticket.                                  |
| `src/controllers/tickets/updateStatus.js` | Altera o status do ticket (ex: de "aberto" para "encerrado").               |
| `src/database/db.json`                 | Arquivo que simula um banco de dados (formato JSON).                            |
| `src/database/database.js`             | Lida com operações no "banco de dados": criar, ler, atualizar e excluir registros. |
| `src/middlewares/jsonHandler.js`       | Converte o corpo da requisição para JSON (stream → objeto).                     |
| `src/middlewares/routeHandler.js`      | Analisa e encaminha a rota para o controlador correspondente.                   |
| `src/routes/index.js`                  | Arquivo principal de rotas que organiza e conecta os sub-roteadores.            |
| `src/routes/tickets.js`                | Define todas as rotas relacionadas aos tickets (`/tickets`, `/tickets/:id`, etc). |
| `src/utils/extractQueryParams.js`      | Extrai os parâmetros de consulta da URL (ex: `?status=aberto`).                 |
| `src/utils/parseRoutePath.js`          | Analisa rotas dinâmicas como `/tickets/:id` e extrai os valores corretos.       |



# **🧪 Testes com Insomnia.**

Todas as rotas foram testadas utilizando o Insomnia, ferramenta de requisições HTTP que facilita o envio de dados via GET, POST, PUT, DELETE, entre outros


# **📁 Estrutura dos Dados.**

Os tickets são armazenados em um arquivo db.json, com a seguinte estrutura:
* Os tickets são armazenados em um arquivo db.json, com a seguinte estrutura:


```
{
  "id": "uuid-gerado",
  "equipamento": "Nome do equipamento",
  "descricao": "Descrição do problema",
  "nome_usuario": "Nome do usuário",
  "status": "aberto" | "encerrado",
  "created_at": "data ISO",
  "updated_at": "data ISO"
}

```



# **🛠️ Tecnologias Utilizadas.**

* Node.js

* Módulo nativo fs

* Módulo http para criação do servidor

* UUIDs gerados para identificação única

* Ferramenta Insomnia para testes de requisição




## **🚀 Como Executar**

**1️⃣ Pré-requisitos:**

- Node.js instalado na sua máquina.

* NPM (Node Package Manager) instalado (geralmente instalado com o Node.js).

**2️⃣ Clonar o repositório (opcional).**

```
git clone <URL_do_repositório>
cd <nome_do_repositório>

```



**3️⃣ Instalar dependências.**

```
npm init -y
```









✨ Conclusão
Desenvolver essa API sem o uso de bibliotecas externas foi fundamental para compreender, de forma prática e profunda, o funcionamento interno do Node.js. Compartilho este projeto com o objetivo de ajudar outros desenvolvedores a entenderem melhor como lidar com rotas, corpo da requisição, parâmetros dinâmicos e a organização do fluxo de dados. Mesmo sendo um projeto simples, ele serve como uma base sólida para enfrentar desafios mais complexos no futuro.


Feito com 💙 por Ayumi Muraki
