import { useState } from 'react'
import './SelectForm.sass'

const SelectForm = ({formList}) => {
    const [isActive, setIsActive] = useState(false)
    const [activeElement, setActiveElement] = useState(formList?.[0].name)

    return(
    < >
        <button 
        onClick={
            () => setIsActive(!isActive)
            }
        >
            <h1 className='form-field'>
                {activeElement}
            </h1>
        </button>
        <ul> 
    {
        isActive ? formList.map((id) => (
                <ol className='form-list'>
                    <button
                        onClick={() => {
                            setActiveElement(id.name)
                            setIsActive(!isActive)
                        }}
                    >
                        <li>{id.name}</li>
                    </button>
                </ol>
            )): < > </>
    }
        </ul>
    </ >)
}

export default SelectForm