import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="home">
            <p className="home-title">Вітаємо вас!</p>
            <p className="home-subtitle">Що відправлятимемо сьогодні?</p>
            <div className="row home-items-wrapper">
                <div className="home-item">
                    <img src="images/post-machine.png" alt="" />
                    <Link to={'/package'}>
                        <div className="home-btn">
                            <p className="home-btn-text">
                                Надіслати посилку через поштомат
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="home-item">
                    <img src="images/shop.png" alt="" />
                    <div className="home-btn">
                        <p className="home-btn-text">
                            Повернення до інтернет магазину
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
