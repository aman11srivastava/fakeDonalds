import React from 'react'
import { RUPEE_SYMBOL } from '../../utils/utils';

interface ArticleProps {
    text: string
    value: number | string
}

const Article = (props: ArticleProps) => {
    const { text, value } = props;
    return (
        <div>
            <h4>{text}</h4>
            <p>{RUPEE_SYMBOL} {value}</p>
          </div>
    )
}

export default Article
