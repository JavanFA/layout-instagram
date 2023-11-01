import { Postagem } from "./components/postagem"

export default function Home() {
  return (
    <main>
      <Postagem 
      nome="Maria" 
      lugar="Recife, PE" 
      curtido={true}/>
      <Postagem 
      nome="Neymar" 
      lugar="Tóquio, Japão" 
      curtido={true}/>
      <Postagem 
      nome="Borabill" 
      lugar="Flor preta, RN" 
      curtido={true}/>
      <Postagem 
      nome="Leo" 
      lugar="Fortaleza, CE" 
      curtido={false}/>
      <Postagem 
      nome="Luva de Pedreiro" 
      lugar="Xique-xique, BA" 
      curtido={false}/>
    </main>
  )
}