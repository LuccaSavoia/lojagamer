import GameCard from "../components/GameCard"
import ImageJogo from "../assets/Image.jpg"

const Home = () => {

  const games=[
    {id:1,titulo:"Jogo-01", preco:"R$200,00", imagem:ImageJogo},
    {id:2, titulo: "Jogo-02", preco: "R$250,00", imagem: ImageJogo },
    {id:3, titulo: "Jogo-03", preco: "R$300,00", imagem: ImageJogo },
    {id:4, titulo: "Jogo-04", preco: "R$350,00", imagem: ImageJogo },
    {id:5, titulo: "Jogo-05", preco: "R$400,00", imagem: ImageJogo },
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">JOGOS EM DESTAQUE</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((jogo)=> (

          <GameCard 
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
