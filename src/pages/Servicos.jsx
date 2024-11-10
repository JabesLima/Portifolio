import "../styles/Servicos.css"

export default function Servicos() {
    return(
        <div className="Servicos">
            
            <h1>Serviços que Ofereço</h1>

            <div className="Boxs">
                <div className="Criacao_site">
                    <h1>Criação de Sites</h1>
                    <p>Desenvolvo sites modernos e personalizados para destacar sua marca online. Com design responsivo e funcional, entrego soluções que atendem às suas necessidades. Fale comigo e traga sua ideia para a web!</p>
                </div>

                <div className="API">
                    <h1>Criação de API</h1>
                    <p> Desenvolvimento de APIs que atendam às necessidades específicas de projetos, permitindo a integração com diferentes plataformas e facilitando a comunicação entre frontend e backend.</p>
                </div>

                <div className="Manutencoes_Web">
                    <h1>Manutenção e Suporte para Aplicações Web</h1>
                    <p>Oferecer suporte técnico e manutenção para aplicações já desenvolvidas, garantindo que tudo funcione corretamente e realizando atualizações quando necessário.</p>
                </div>

                <div className="Manutencao_API">
                    <h1>Manutenção e Suporte para API</h1>
                    <p>Ofereço serviços básicos de manutenção e suporte para APIs. Estou aqui para ajudar a corrigir problemas e garantir que tudo funcione corretamente. Caso tenha dúvidas ou precise de orientação sobre o uso da sua API, ficarei feliz em ajudar.</p>
                </div>
            </div>
        </div>
    )
}