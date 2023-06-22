import React from 'react'
import './CellsPage.scss'
import { Link } from 'react-router-dom'

type Props = {}

const CellsPage = (props: Props) => {
    return (
        <div className="cells-page">
            <div className="container">
                <p className="cells-page-title">Оберіть розмір посилки</p>
                <div className="row cells-wrapper">
                    <div className="small-cells-wrapper">
                        <div className="cell-item xxs-cell row">
                            <img
                                className="cell-item-img"
                                src="images/xxs-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXS</p>
                                <p className="cell-item-size-2">20x11 см</p>
                            </div>
                        </div>
                        <div className="cell-item m-cell row">
                            <img
                                className="cell-item-img"
                                src="images/m-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">M</p>
                                <p className="cell-item-size-2">20x21 см</p>
                            </div>
                        </div>
                        <div className="cell-item xs-cell row">
                            <img
                                className="cell-item-img"
                                src="images/xs-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XS</p>
                                <p className="cell-item-size-2">20x16 см</p>
                            </div>
                        </div>
                        <div className="cell-item l-cell row">
                            <img
                                className="cell-item-img"
                                src="images/l-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">L</p>
                                <p className="cell-item-size-2">38x16 см</p>
                            </div>
                        </div>
                        <div className="cell-item s-cell row">
                            <img
                                className="cell-item-img"
                                src="images/s-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">S</p>
                                <p className="cell-item-size-2">38x11 см</p>
                            </div>
                        </div>
                        <div className="cell-item xl-cell row">
                            <img
                                className="cell-item-img"
                                src="images/xl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XL</p>
                                <p className="cell-item-size-2">38x21 см</p>
                            </div>
                        </div>
                    </div>
                    <div className="big-cells-wrapper">
                        <div className="cell-item xxl-cell row">
                            <img
                                className="cell-item-img"
                                src="images/xxl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXL</p>
                                <p className="cell-item-size-2">64x21 см</p>
                            </div>
                        </div>
                        <div className="cell-item xxxl-cell row">
                            <img
                                className="cell-item-img"
                                src="images/xxxl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXXL</p>
                                <p className="cell-item-size-2">64x36 см</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cells-btns-wrapper">
                    <Link to={'/package'}>
                        <button className="cells-not-confirm-btn">НАЗАД</button>
                    </Link>
                    <button className="cells-confirm-btn">ПІДТВЕРДИТИ</button>
                </div>
            </div>
        </div>
    )
}

export default CellsPage
