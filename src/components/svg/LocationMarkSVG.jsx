const LocationMarkSVG = ({width, height, color}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.288"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z"
                    stroke={color}
                    stroke-width="0.36"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path
                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                    stroke={color}
                    stroke-width="0.36"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
        </svg>
    )
}

export default LocationMarkSVG