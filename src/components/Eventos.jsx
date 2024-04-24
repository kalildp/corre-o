export default function Evento({titulo,descricao,horario,local}){
    return(
        <div className="sessao">
        <div className="evento">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p>{horario}</p>
            <p>{local}</p>
        </div>
        <img src="" alt=""/>
        <img src="https://s4.static.brasilescola.uol.com.br/be/2024/01/sala-de-cinema-cheia-de-pessoas-um-reflexo-da-popularizacao-do-cinema-parte-importante-de-sua-historia.jpg" alt="" />
        </div>

    )
}

