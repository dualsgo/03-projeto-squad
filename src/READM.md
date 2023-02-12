# Projeto em grupo do Módulo 3 - Sendo servido

### Integrantes do SQUAD

- Ana - Pessoa Gestora do Conhecimento
- Anna - Pessoa Gestora de Gente e Engajamento
- Filipe - Pessoa Co-Facilitadora
- Maycon - Colaborador I

##

### Proposta

- Criar um site utilizando o json.server O projeto deverá ser construído usando o framework React aprendido em aula, nele iremos desenvolver um site que deverá utilizar um servidor Json construído anteriormente. Este projeto deverá seguir um tema dos utilizados pelos integrantes no projeto individual.

##

### Requisitos

- ✅ Utilize endpoints do Json-server que foi criado no Projeto individual.
- ✅ Utilizar o README do repositório para documentação do projeto;
- ✅ Utilizar a biblioteca react-router-dom para roteamento das páginas;
- O site deve realizar todos os métodos HTTP:
- ✅ GET - Página para listar os cadastros ou produtos com opção de busca;
- ✅ POST - Página para incluir um novo registro ou produto;
- ✅ PUT - Página para editar os cadastros ou produtos;
- ✅ DELETE - Opção de excluir itens cadastrados.

##

### Introdução ao projeto

- Nosso projeto simula o sistema de gerenciamento de um estacionamento (Garagem de veículos) onde é possível cadastrar os veículos em cada vaga, de cada andar do prérdio. Também é possível editar o cadastro dos veículos e excluir o cadastro.

- Escolhemos a API produzida pelo Filipe com o tema "Garagem de carros"

> Disponível no repositório: [/Garagarem-de-Carros--Json-Server](https://github.com/Lype3d/Garagem-de-Carros--Json-Server)

- Para o projeto utilizamos uma versão adaptada da API com o mesmo tema.

> Disponível no repositório: [/individual3](https://github.com/dualsgo/individual-3)<br>
> O deploy no Render:  [/estao-servidos-xvs9](https://estao-servidos-xvs9.onrender.com/)

- A API conta com três rotas/endpoints que simulam andares de um prédio de estacionamento:

 > [/andar1](https://estao-servidos-xvs9.onrender.com/andar1)<br>
> [/andar2](https://estao-servidos-xvs9.onrender.com/andar2)<br>
> [/andar3](https://estao-servidos-xvs9.onrender.com/andar3)

- Cada rota conta com quatro entidades pré definidas e cada uma delas conta com sete atributos.

> {<br>
    "marca": "Renault", <br>
    "modelo": "Logan",<br>
    "cor": "Azul",<br>
    "placa": "HJF3288",<br>
    "dono": "Tiago",<br>
    "telefone": "21 98765-4321",<br>
    "id": 1<br>
    }

##

### Executando o projeto

- O projeto recebeu deploy em Netlify e pode ser executado online acessado através do link <https://squad-3.netlify.app/>

- O projeto também pode ser executado em servidor local, baixando uma cópia dos arquivos no repositório acessando o link <https://github.com/dualsgo/squad-3>

- Após o download e a inicialização, será necessário utilizar os comandos a seguir no terminal.

>npm install<br>
>npm run dev

- O servidor local será iniciado no navegador.

##
