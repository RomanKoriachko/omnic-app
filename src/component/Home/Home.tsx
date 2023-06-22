import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="home">
            <div className="container">
                <p className="home-title">Вітаємо вас!</p>
                <p className="home-subtitle">Що відправлятимемо сьогодні?</p>
                <div className="row home-items-wrapper">
                    <Link to={'/package'}>
                        <div className="home-item">
                            <img src="images/post-machine.png" alt="" />
                            <div className="home-btn">
                                <p className="home-btn-text">
                                    Надіслати посилку через поштомат
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/shop'}>
                        <div className="home-item">
                            <img src="images/shop.png" alt="" />
                            <div className="home-btn">
                                <p className="home-btn-text">
                                    Повернення до інтернет магазину
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
