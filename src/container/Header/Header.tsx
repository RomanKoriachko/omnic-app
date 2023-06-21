import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    const [deviceNumber, setDeviceNumber] = useState<string>('')

    useEffect(() => {
        fetch(
            'https://dev.hub.omnic.solutions/api/2.0.0/public/device/34670a76-6022-4df5-ac1d-68f88589c904/'
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setDeviceNumber(data.data.device)
            })
    }, [])

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link to={'/'}>
                        <img
                            src="images/logo.svg"
                            alt=""
                            className="header-logo-img"
                        />
                    </Link>
                </div>
                <div className="row header-buttons">
                    <Link to={'/instructions'}>
                        <p className="header-instructions-btn">ІНСТРУКЦІЯ</p>
                    </Link>
                    <p className="header-device-number">
                        Поштомат №{deviceNumber}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header
