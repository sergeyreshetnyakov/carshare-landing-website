import LocationMarkSVG from './svg/LocationMarkSVG'
import PhoneSVG from './svg/PhoneSVG'
import InputForm from './forms/InputForm'
import Button from './Button'
import FacebookSVG from './svg/FacebookSVG'
import YoutubeSVG from  './svg/YoutubeSVG'
import WhatsappSVG from './svg/WhatsappSVG'
import InstagramSVG from './svg/InstagramSVG'
import './ContactInfo.sass'

const ContactInfo = () => {
    return (
        <div className='contact'>
            <div>
                <h1 className="contact-header">
                    Наши контакты
                </h1>
            </div>

            <div className="contact-container">
                <div className="contact-info-container">
                    <div className="contact-info">
                        <div className="contact-info-icon">
                            <LocationMarkSVG width="48px" height="48px" color="#000"/>
                        </div>
                        <span className="contact-info-text">
                            г.Москва, ул.Ленина - 8
                        </span>
                    </div>
                    <div className="contact-info">
                        <PhoneSVG width="48px" height="48px" color="#000" />
                        <span className="contact-info-text">
                            +7 (999) - 999 - 99 - 99
                        </span>
                    </div>
                    <div className="contact-info-social">
                        <FacebookSVG width={"64px"} height={"64px"} color={"#fff"}/>
                        <InstagramSVG width={"64px"} height={"64px"} color={"#fff"}/>
                        <WhatsappSVG width={"64px"} height={"64px"} color={"#fff"}/>
                        <YoutubeSVG width={"64px"} height={"64px"} color={"#fff"} color2={"#000"}/>
                    </div>
                </div>

                <div className="contact-form">
                    <div>
                        <h3 className="contact-form-header">
                            Остались вопросы?
                        </h3>
                        <p className="contact-form-subheader">
                            Оставьте заявку и наш менеджер <br /> вам перезвонит
                        </p>
                    </div>
                    <div>
                        <div className='contact-form-input'>
                            <InputForm placeholder={'+7(___)-___-__-__'}/>
                        </div>
                        <div className='contact-form-input'>
                            <InputForm placeholder={'Ваше имя'}/>
                        </div>
                        <div className='contact-form-button'>
                            <Button text={"Заказать звонок"} isOutline={ false } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo