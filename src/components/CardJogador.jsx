import "../components/CardJogador.css"
export default function CardJogador({nome, posicao, time, avaliacao,imagem}){
//corpo do componente(tudo que vai ser retornado aqui vai ser renderizado na tela)
    return(
        // elemento raiz do card (ultilizando semantica para agrupar p conteudo dp jogador)
        <article className="CardJogador">
            <div className="cabecalho">
                {/* imagem do jogador 
                SRC: caminho url da imagem 
                ALT: acessibilidade*/}
                <img src={imagem} alt={nome} className="cj-imagem"/>
                {/* bloco de imformaçoes tetuais ao lado da imagem */}
                <div className="cj-info">
                    <h3 className="cj-nome">{nome}</h3>
                    <span className="cj-etiqueta">{posicao}</span>
                 
                </div>
            </div>
            {/*area de imformaçoes resumidas como tipo e avaliacao */}
            <div className="cj-meta">
                <span><strong>Time</strong>{time}</span>
                <span><strong>Avaliaçao</strong>{avaliacao}</span>

            </div>
        </article>
    )
}