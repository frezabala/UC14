//import React from "react";
import CardJogador from "../src/components/CardJogador"
import Titulo from "../src/components/Titulo"
import leoHospicio from "./assets/Leosenac.jpg"
import lucasHospicio from "./assets/lucashospicio.jpg"
import talita from "./assets/talita.jpeg"
import henrique from "./assets/henrique.jpeg"
import luut from "./assets/luutComCabelo.png"
import vitor from "./assets/vitorCabeludo.png"
import Dalvana from "./assets/dalvanaCalva.png"
import Daniel from "./assets/daniel.jpeg"
import Arthur from "./assets/arthur.jpeg"
import Nat from "./assets/nat.jpeg"
import Leandra from "./assets/teletubbies.jpeg"




export default function App(){
  //array de  objeto  reprecentado dos jogadores
  //da objeto tem um id e as props nome, posiçao , time, img e avaliçao

  const jogadores = [
    {
    id:1,
   nome: "LeoSenac",
   posicao: "Atacante",
   time: "Hospicio Senac",
   avalidacao: 9.5,
   imagem: leoHospicio
},
   {
    id:2,
   nome: "Lucas Hospicio",
   posicao: "Lateral",
   time: "Hospicio Senac",
   avalidacao: 9.7,
   imagem: lucasHospicio
},
   {
    id:3,
   nome: "Talita",
   posicao: "goleiro",
   time: "Hospicio Senac",
   avalidacao: 9.1,
   imagem: talita
},
   {
    id:4,
   nome: "Henrique",
   posicao: "meia-central",
   time: "Hospicio Senac",
   avalidacao: 9,
   imagem: henrique
},
   {
    id:5,
   nome: "Luut Com Cabelo",
   posicao: "Lateral-direito",
   time: "Hospicio Senac",
   avalidacao: 8.3,
   imagem: luut
},
   {
    id:6,
   nome: "vitor Cabeludo",
   posicao: "volante",
   time: "Hospicio Senac",
   avalidacao: 8.2,
   imagem: vitor
},
   {
    id:7,
   nome: "Dalvana Calva",
   posicao: "zagueiro",
   time: "Hospicio Senac",
   avalidacao: 8.1,
   imagem: Dalvana
},
   {
    id:8,
   nome: "Daniel",
   posicao: "líbero",
   time: "Hospicio Senac",
   avalidacao: 8.8,
   imagem: Daniel
},
   {
    id:9,
   nome: "Arthur",
   posicao: "Lateral-esquerdo",
   time: "Hospicio Senac",
   avalidacao: 8.9,
   imagem: Arthur

   },
   {
    id:11,
   nome: "Nat",
   posicao: "Volante",
   time: "Hospicio Senac",
   avalidacao: 9.1,
   imagem: Nat

   },
   {
    id:12,
   nome: "Leandra",
   posicao: "Pontas",
   time: "Hospicio Senac",
   avalidacao: 9,
   imagem: Leandra

   }
  ]

  return(
   <main
     style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "50px",
      flexWrap: "wrap",  //permite a quebra de linhas se a tela for pequena
      backgroundColor: "#333333ff"
     }}
     >
      {/**Componente de titulo */}
      <div style={{width: "100%"}}>
         <Titulo texto="Lista Jogadores"/>
      </div>
      {jogadores.map((j) => (
         <CardJogador key={j.id}{...j}/>

      ))
      }
   </main>
  )
}
