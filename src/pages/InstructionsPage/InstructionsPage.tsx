import React from 'react'
import './InstructionsPage.scss'
import { Link } from 'react-router-dom'

type Props = {}

const InstructionsPage = (props: Props) => {
    return (
        <div className="instructions-page">
            <div className="container">
                <p className="instructions-title">
                    Інструкція з користування поштоматом
                </p>
                <p className="instructions-item">
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur eos at, assumenda adipisci explicabo odio nulla aut
                    non quisquam. Nobis perferendis fuga vitae quis id delectus!
                    Delectus, nostrum placeat! Dolorum!
                </p>
                <p className="instructions-item">
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit vero fugiat perspiciatis iusto optio sed corporis
                    recusandae nostrum expedita? Dolores magni repellat pariatur
                    in neque deserunt quaerat ipsum exercitationem voluptates.
                </p>
                <p className="instructions-item">
                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga voluptates rerum, placeat provident molestiae ab quod,
                    nemo doloremque ut voluptatem at harum accusantium
                    repudiandae, neque dicta voluptatum autem quisquam a!
                </p>
                <p className="instructions-item">
                    4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum autem tenetur itaque tempore, voluptates voluptas,
                    dolorem laborum voluptatibus nisi recusandae perspiciatis
                    sed aut. Minus, tenetur laborum exercitationem nihil esse
                    qui.
                </p>
                <p className="instructions-item">
                    5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, asperiores voluptas et vero voluptatibus nesciunt
                    eius voluptates at animi delectus, rerum repellat
                    necessitatibus dignissimos repudiandae nulla quidem aperiam
                    consequatur quasi.
                </p>
                <Link to={'/'}>
                    <button className="instructions-btn">НАЗАД</button>
                </Link>
            </div>
        </div>
    )
}

export default InstructionsPage
