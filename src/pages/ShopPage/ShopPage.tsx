import React from 'react'
import './ShopPage.scss'
import { Link } from 'react-router-dom'

type Props = {}

type ShopArrType = {
    name: string
    price: number
    color: string
    isAvalible: boolean
}

const ShopPage = (props: Props) => {
    const ShopItemsArr: ShopArrType[] = [
        {
            name: 'Iphone 14',
            price: 1100,
            color: 'red',
            isAvalible: true,
        },
        {
            name: 'Iphone 14 Plus',
            price: 1200,
            color: 'white',
            isAvalible: true,
        },
        {
            name: 'Iphone 14 Pro',
            price: 1400,
            color: 'gold',
            isAvalible: true,
        },
        {
            name: 'Iphone 14 Pro Max',
            price: 1800,
            color: 'black',
            isAvalible: true,
        },
        {
            name: 'Iphone 14 Pro Max',
            price: 1700,
            color: 'purple',
            isAvalible: false,
        },
        {
            name: 'Iphone 14 Pro Max',
            price: 2000,
            color: 'black',
            isAvalible: true,
        },
        {
            name: 'Iphone 14 Pro Max',
            price: 1850,
            color: 'white',
            isAvalible: false,
        },
        {
            name: 'Iphone 14 Pro Max',
            price: 2000,
            color: 'gold',
            isAvalible: true,
        },
    ]

    return (
        <div className="shop-page">
            <div className="container">
                <p className="shop-page-title">Сторінка магазину</p>
                <div className="shop-wrapper">
                    {ShopItemsArr.map((element, i) => (
                        <div className="shop-item" key={i}>
                            <p>Назва товару: {element.name}</p>
                            <p>Колір: {element.color}</p>
                            <p>Ціна: {element.price}$</p>
                            <p>
                                Наявність в магазині:
                                {element.isAvalible ? ' Так' : ' Ні'}
                            </p>
                            <Link to={'/'}>
                                <button>Купити</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopPage
