import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

const CodeBlock = ({ language, value }) => {

    const blockStyle = {
        borderRadius: "20px",
        padding: '1em',
        fontSize: "1.2em",
        marginBottom: '1em',
      }

    return (
        <div>
            <SyntaxHighlighter language={language} style={theme} customStyle={blockStyle}>
                {value}
            </SyntaxHighlighter>
        </div>

    )
}

export default CodeBlock