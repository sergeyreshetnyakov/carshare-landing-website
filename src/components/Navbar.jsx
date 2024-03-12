import LogoSVG from './svg/LogoSVG'
import Button from './Button'
import './Navbar.sass'

const Navbar = () => {
    return (
        <div className="nav">
            <div className='nav-logo'>
                <LogoSVG size={36}/>
                <h1 className='nav-logo-header'>
                    <span className='nav-logo-header-highlighted'>Crazy</span>
                    Driver
                </h1>
            </div>
            <div className='nav-links'>
                <a className="nav-links-elem" href="">Автопарк</a>
                <a className="nav-links-elem" href="">Преимущества</a>
                <a className="nav-links-elem" href="">Правила аренды</a>
                <a className="nav-links-elem" href="">Контакты</a>
                <div>
                    <Button text={'Скачать приложение'} isOutline={true}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar