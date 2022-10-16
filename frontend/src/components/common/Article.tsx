import React from 'react'

interface ArticleProps {
    text: string
    value: number | string
}

const Article = (props: ArticleProps) => {
    const { text, value } = props;
    return (
        <div>
            <h4>{text}</h4>
            <p>₹ {value}</p>
          </div>
    )
}

export default Article
