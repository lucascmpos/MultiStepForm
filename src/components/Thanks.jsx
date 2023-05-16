import React from 'react'

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './Thanks.css'

const emojiData ={
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}
const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco!</h2>
        <p>Sua opnião é muito importante para nós!<br></br>
            Após o envio do formulário, você receberá um cupom de 10% de desconto
            para sua próxima compra.
        </p>
        <p>Para concluir sua avaliação clique no botão Enviar</p>
        <h3>Aqui está o resumo da sua avaliação: </h3>
        <p className="review-data">
            <span>Satisfação com o produto:</span>
            {emojiData[data.review]}
        </p>
        <div className="p review-data">
            <span>Comentário:</span>
            {data.comment}
        </div>
    </div>
  )
}

export default Thanks