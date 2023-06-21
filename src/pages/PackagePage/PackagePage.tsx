import React from 'react'
import './PackagePage.scss'
import { Link } from 'react-router-dom'

type Props = {}

const PackagePage = (props: Props) => {
    return (
        <div className="package-page">
            <div className="container">
                <p className="package-title">
                    Відправлення має бути надійно упаковане
                </p>
                <div className="row package-text-wrapper">
                    <img src="images/package.png" alt="" />
                    <ol className="package-test-list">
                        <li>
                            Упакуйте товар у коробку чи пакет. На упаковці не
                            повинно бути сторонніх наклейок та етикеток;
                        </li>
                        <li>
                            Заклейте упаковку скотчем, щоб не було доступу до
                            вкладених предметів;
                        </li>
                    </ol>
                </div>
                <div className="row package-btns-wrapper">
                    <Link to={'/'}>
                        <button className="package-not-confirm-btn">
                            НАЗАД
                        </button>
                    </Link>
                    <Link to={'/available_cells'}>
                        <button className="package-confirm-btn">
                            Я ДОБРЕ УПАКОВАВ
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PackagePage
