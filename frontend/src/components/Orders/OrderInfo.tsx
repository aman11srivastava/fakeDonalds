import React from 'react'

interface OrderInfoProps {
    title?: string
    boldText: string
    value: string
}

const OrderInfo = (props: OrderInfoProps) => {
    const { title = "" , boldText, value } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>
                <b>{boldText}</b>
                {value}
            </p>
        </div>
    )
}

export default OrderInfo
