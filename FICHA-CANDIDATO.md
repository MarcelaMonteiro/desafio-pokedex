## Seção 1: Instruções para rodar

- Quais variáveis de ambiente são necessárias?
  Não foi necessário, pois usamos uma API pública para realizar as consultas e popular os valores.

- Como instalar dependências?
  rodar o comando npm install

- Como rodar o projeto?
  rodar com o comando npm run dev

## Seção 2: Decisões de design

- Por que você escolheu essa estrutura de pastas?

  Ao criar o projeto com Vite ele te fornece uma estrutura pré-definida, a organização das pastas foi feita de acordo com a necessidade, se for um componente que posso usar em outras partes, crio a pasta components, a pasta type para tipagem dos dados recebidos e a pasta pages para páginas do projeto, a pasta api para configuração do axios e definindo uma url padrão para ser chamada nas páginas para consumir os dados.

- Qual foi a maior dificuldade que você encontrou e como superou?

  Realizar o filtro, gastei mais tempo para poder voltar a renderização original da listagem dos 151 pokémons ao apagar o texto do input. Já que estamos realizando o filtro pelo client criei um useEffect que tem como dependência o estado que é setado pela função onChange do input, e ao estado ser alterado, se o valor do estado for uma string vazia ele irá chamar a função resetFilter, que irá realizar a chamada para a API e retorna todos os 151 pokemóns, assim retornando ao valor inicial da lista.

- O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?

  Não consegui estilizar da forma desejada.

## Seção 3: Link para Deploy (Bônus)

https://desafio-pokedex-4y93.vercel.app/

## Seção final: Recomendações

- Escreva aqui dicas, melhorias e recomendações sobre este desafio.

  Gostei muito do desafio, achei que consegue mostrar as competências necessárias para um estágio em desenvolvimento.
