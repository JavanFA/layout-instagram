import "./postagem.css";

interface PostagemProps {
    nome: string;
    lugar: string;
    curtido:boolean;
}

export function Postagem (props: PostagemProps) {
    return (
        <div className="container-postagem">
            <div className="postagem-header">
                
                <div className="avatar-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/5148/5148585.png"
                    width="100%"/>
                </div>

                <div className="postagem-info">
                    <span>{props.nome}</span>
                    <span>{props.lugar}</span>
                </div>
            </div>

            <div className="container-img">
                <img src="https://visit.recife.br/wp-content/themes/visitrecife2021/img/rua-do-bom-jesus.jpg" width="100%"/>
            </div>

            <div className="postagem-footer">
                {props.curtido == false ? (
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                ): (
                    <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}}></i>
                )}
            <i className="fa fa-comment" aria-hidden="true"></i>
            <i className="fa fa-share" aria-hidden="true"></i>
            </div>
        </div>
    )
}