import Button from "./Button"
import './Header.sass'

const Header = () => {
    return (
        <header>
                <h1 className="header-title">
                    Каршеринг в Москве
                </h1>
                <div className="header-content flex">
                    <div>
                        <span className="header-tagline">
                            Почувствуй себя владельцем
                            <br/>
                            премиального авто
                        </span>
                        <p className="header-text">
                            DriveTime - сервис по каршерингу в Москве.
                            <br/>
                            В нашем автопарке более 300 автомобилей
                            <br/>
                            на любой вкус
                        </p>
                        <div className="header-button">
                            <Button text={"Забронировать"}/>
                        </div>
                    </div>
                    <div>
                        <img className="header-image" src="images/heading-car.png" alt=""/>
                    </div>
                </div>
        </header>
    )
}

export default Header