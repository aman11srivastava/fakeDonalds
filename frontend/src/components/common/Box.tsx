import React from 'react'
import { RUPEE_SYMBOL } from '../../utils/utils'

interface BoxProps {
    title: any
    value: any
    showRupeeSymbol?: boolean
}

const Box = (props: BoxProps) => {
    const { title, value, showRupeeSymbol = false } = props;
    return (
        <div>
            <h3> {showRupeeSymbol && RUPEE_SYMBOL}{value}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Box
