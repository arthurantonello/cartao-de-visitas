# CartaoDeVisitas


Este projeto elabora cartão de visitas a partir de um formulário, funciona de forma simples e intuitiva. O usuário preenche um formulário com suas informações, como nome, idade, telefone, e-mail e endereço. Após o envio, o site gera automaticamente um cartão de visitas digital ou imprimível em um design pré elaborado, formatado de maneira profissional.

 ## Para rodar esse projeto localmente será necessário:
 1. Instalar o Node.js e o NPM (no projeto foi utilizada a v22.14.0)
  Baixe e instale o Node.js a partir do site oficial: https://nodejs.org/

> Verifique a instalação:
``` bash
node -v
```
2. Instalar o Angular CLI
  Para instalar globalmente, execute no terminal:
``` bash
npm install -g @angular/cli
```

Verifique a instalação:
``` bash
ng version
``` 
3. Instalar as dependências do projeto
  Com um terminal na pasta do projeto execute:
``` bash
npm install
```

5. Rodar o projeto
  Execute no terminal:
``` bash
ng serve
  > ou
ng run start
```

 ## Estrutura do projeto

```/public```: Possui os arquivos de imagem.<br>

```/src```: Possui as pastas e arquivos principais para funcionamento.<br>

```/src/app```: Aloca os componentes e services, além do componente padrão "app".<br>

```./components/criador-cartao```: Componente responsável pela criação do cartão, utiliza o forms enviado do home para isso.<br>

```./components/home```: Componente responsável pelo formulário que aparece para o usuário e após o preenchimento envia para o criador-cartao.<br>

```./services```:  Responsável em para armazenar e compartilhar os dados do formulário entre diferentes componentes da aplicação.<br>

```index.html```: Arquivo HTML principal para execução.<br>

#

## Como Funciona
   Ao acessar, na tela inicial é mostrado um formulário vazio e um cartão exemplo.

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-tela-inicial.png" alt="Tela inicial" width="500" height="275" />

   Após preenchido, o formulário deverá se parecer com isso.

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-form-preenchido.png" alt="Tela do formulário preenchido" width="500" height="275" />
   
   Caso tudo tenha sido preenchido corretamenet, o botão "Enviar" irá ficar clicável e após de clicado o cartão será modificado com os dados inseridos.

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-form-pronto.png" alt="Tela do formulário pronto" width="500" height="275" />

   Se houver erro ou falta de preenchimento em alguma lacuna, o usuário será avisado disso e o botão "Enviar" se tornará inclicável.

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-validacao.png" alt="Tela com erros" width="500" height="275" />

   Com o cartão pronto, será possível baixá-lo em formato PDF, clicando em "Baixar em PDF"

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-pronto-baixar.png" alt="Tela inicial com busca preenchida" width="500" height="275" />

   Após baixado, o arquivo se parecerá com isso, com o tamanho aumentado para melhorar a qualidade e já no formato correto para cartão de visitas.

   <img src="https://github.com/arthurantonello/cartao-de-visitas/public/img/prints/cartao-pdf.png" alt="Tela inicial com busca preenchida" width="500" height="275" />
   
   
#

## Tecnologias Utilizadas
   Angular - Organização do código em componentes, serviços e módulos.

   TypeScript - Lógica da aplicação.

   CSS3 - Estilo visual.

## Desafios
   Nesse projeto meu maior desafio foi a estruturação correta da orientação a objetos no JS, até descobrir ao certo como iria fazer, mas depois foi fluindo bem, além também da estilização no CSS. Outro desafio também foi na hora que quis fazer uma perfumaria e colocar umas nuvens de fundo, a parte de unir o JS com o CSS deu uma leve confusão depois de várias tentativas. 


