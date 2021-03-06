import React from 'react'

const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border text-status' role='status'
                style={{ width: "50px", height: "50px" }}>
                <span className='sr-only'>loading...</span>
            </div>
        </div>
    )
}

export default Loading