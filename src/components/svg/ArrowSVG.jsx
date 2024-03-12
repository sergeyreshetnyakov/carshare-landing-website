const ArrowSVG = ({width, height, isLeft}) => {
    return ( < > {
        isLeft
            ? (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 24 24"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="square" strokeLinejoin="square"/>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6 12H18M6 12L11 7M6 12L11 17"
                            stroke="#000"
                            strokeWidth="1"
                            strokeLinecap="square"
                            strokeLinejoin="square"/>
                    </g>
                </svg>
            )
            : (
                <svg
                    className="duration-300 ease-in-out hover:text-[#c12828]"
                    width={width}
                    height={height}
                    viewBox="0 0 24 24"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="square" strokeLinejoin="square"/>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6 12H18M18 12L13 7M18 12L13 17"
                            stroke="#000"
                            strokeWidth="1"
                            strokeLinecap="square"
                            strokeLinejoin="square"/>
                    </g>
                </svg>
            )
        } </>
    )
}

export default ArrowSVG