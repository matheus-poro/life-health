# Life Health

`CURSO: Sistemas para Internet | FIAP`

`ATIVIDADE: Enterprise Challenge | Health & Life Sciences`

## :page_facing_up: Índice

* [1. Sobre](#1-sobre)
* [2. Planejamento Ágil](#2-planejamento-ágil)
* [3. Prótotipo](#3-prótotipo)
* [4. Tecnologias e Ferramentas externas utilizadas](#4-tecnologias-e-ferramentas-externas-utilizadas)
* [5. Desenvolvedores](#5-desenvolvedores)

## 1. Sobre
A <b>[Life Health](https://life-health.vercel.app/)</b> é uma plataforma  de gerenciamento da saúde e bem estar. Desenvolvido para o curso de graduação de Sistemas para Internet da FIAP. </br></br>
A plataforma tem como objetivo realizar o monitoramento e controle da saúde do usuario por meio dos dados fornecido, ajudando e apontando melhorias, com a opção de habilitar para um médico poder ter acesso e poder tambem realizar o monitoramento e controle de seu paciente com sua previa autorização, auxiliando assim no bem estar. </br></br>
O App possibilita tambem o profissional da saude alem de ver como anda seu paciente, verificar e alertar de possivel risco e orientar ou direcionar para um a tendimento ou pronto atendimento, assim como o paciente pode deixar um alerta sobre poossiveis complicações que possa estar tendo para o médico poder acessar e orienta-lo da melhor forma. </br></br>

<div align="center">
  <a href="https://life-health.vercel.app/">
    <img width="50% alt="tela de login" src="https://github.com/matheus-poro/life-health/assets/37550557/37f4f9cb-30ee-40b1-843f-985241b7e5cf">
    <img width="40% alt="dashboard" src="https://github.com/matheus-poro/life-health/assets/37550557/4f30aa01-991f-425a-879e-894df4a4ad80">
  </a>
</div>

## 2. Planejamento Ágil
:memo:
Utilizamos da ferramenta _Trello_ para planejar as ideais e organizar as tarefas, colocando em nosso backlog os itens prioritarios para realizar o desenvolvimento e divindo entre o grupo para realização da parte funcional do portal. 

## 3. Prótotipo

O projeto foi desenvolvido utilizando protótipo realizado no Figma conforme imagem abaixo. Para ter acesso ao prótipo e todas as informações sobre, acesse [AQUI](https://www.figma.com/file/moXR6GbkBEwn2xmTzrZjJA/Untitled-(Copy)?type=design&node-id=5%3A889&t=GRpwgYo4pvS1rj2B-1)


## 4. Tecnologias e Ferramentas externas utilizadas

### FHI Server 
A ferramenta externa [FHIR Server](https://github.com/microsoft/fhir-server) * foi utilizada, com o bjetivo de padronizar, auxiliar e facilitar o uso dos dados de saude para o monitoramento e gestão da saude e bem estar dos nossos usuarios com sua previa autorização.

### Firebase 
Está ferramento foi utilizada para autenticação de usuários, embora o Firebase não ofereça suporte direto ao FHIR Server, usamos o Firebase como um serviço de backend para o aplicativo e integrá-lo com um FHIR Server para armazenamento e recuperação de dados de saúde.</br></br> 
Utilizamos o token de autenticação do Firebase para realizar chamadas ao FHIR Server a partir da aplicação.


## 5. Desenvolvedores 
:octocat:
Esta aplicação foi desenvolvida por:

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/flavialbraz" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/78583429?v=4" width="100px;" alt="Foto de Flavia no GitHub"/><br>
        <sub>
          <b>Flavia </b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/luciana-pereira" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/37550557?v=4" width="100px;" alt="Foto de Fernanda no GitHub"/><br>
        <sub>
          <b>Luciana Pereira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/matheus-poro" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/111644802?v=4" width="100px;" alt="Foto de Matheus Cavalcante no GitHub"/><br>
        <sub>
          <b>Matheus Cavalcante</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/TobiasGustavo" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/88210620?v=4" width="100px;" alt="Foto de Tobias Soares no GitHub"/><br>
        <sub>
          <b>Tobias Soares</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
