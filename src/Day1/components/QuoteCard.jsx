import React from 'react'

const QuoteCard = ({ className, onclick }) => {
    return (
        <div
            className={`${className} flex justify-center items-center italic font-medium`} onClick={onclick}>
            
            " Create what you wish existed... "
        </div>
    )
}

export default QuoteCard

