export default function Hero() {
    return(
        <div className="flex border">
            <div className="w-full flex flex-col gap-2 mt-[35vh] border">
                <h1 className="text-5xl font-bold text-white leading-[64px]">
                    Seus projetos e redes sociais em um único link
                </h1>
                <h2>Crie sua própria pagina de projetos e compartilhe eles com o mundo!
                    <br />
                    acompanhe o engajamento com Analytcs de cliques
                </h2>
                <div className="flex items-center gap-2 w-full -mt-[10vh]">
                    <span className="text-white text-xl">projectinbio.com</span>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}