import React from 'react'

function LogosHomeSection5({ logo }) {
    const { id, image } = logo
    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default LogosHomeSection5