A execução do projeto pode ser realizado via docker-compose, para isso é necessário ter o docker e docker-compose instalado no computador.

Para iniciar o projeto, basta executar o seguinte comando:
> docker-compose up --build

Após o primeito build pode ser executado mais rapidamente usando comando:

> docker-compose up

Para parar o projeto, basta executar o seguinte comando:
> docker-compose down

Para acessar o projeto, basta acessar o endereço http://localhost:5173 no navegador.

Na tela inicial é uma tela de login, só contruida a parte visual, o projeto não consta com a funcionalidade de login realizada.

Clique diretamente em login para ser direcionado a dashboard, onde é possível realizar outras operações.

Como solicitado no desafio tecnico de desenvolvimento, a pagina de foco do desenvolvimento foi a de Notícias, onde é possível visualizar as notícias cadastradas no sistema.

O docker é composto por Banco de Dados, API, e Frontend.
