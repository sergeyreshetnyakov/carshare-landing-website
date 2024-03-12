import './Button.sass'

const Button = ({text, isOutline}) => {
    return ( < > {
        isOutline
            ?
            //Outline button
            (
                <div className='button button-outline'>
                    <a href="#">{text}</a>
                </div>
            )
            :
            //Default button
            (
                <div className="button button-default">
                    <a href="#">{text}</a>
                </div>
            )
    } </ >
    )
}

export default Button