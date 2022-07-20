// ----> Use marked library
marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()
// ----> Use marked library

function App() {
    const [text, setText] = React.useState(defaultMarkdown)

    return (
        <div className="text-center px-4">
            <h2 className="m-4">Editor<i class="fa-solid fa-pen-to-square"></i></h2>
            <textarea
                name="text"
                id="editor"
                value={text}
                placeholder={"Get typing fellow programmer!"}
                onChange={(e) => setText(e.target.value)}
                className="text-area">
            </textarea>
            <h2 className="m-4">Preview<i class="fa-solid fa-magnifying-glass"></i></h2>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer })
            }}
            id="preview"
        ></div>
    );
}

const defaultMarkdown = `# H1 Heading Element

## I'm a heading two!

Here's what a link looks like, check [me](https://github.com/brajpatel) out.

\`I'm a single line of <code></code> between two backticks!\`

\`\`\`
// This is what a multi-line code block looks like

function myExample() {
    return null;
}
\`\`\`

- There are also lists
    -  Some look different than others
        - Depending on their indentation levels

We can make our text **bold**, _italic_, or even _**BOTH!**_

Or ~cross out as much~.. or as ~little~ as you like..

> Blockquote Blockquote Blockquote Blockquote Blockquote
Finally, we can add embedded images:


![sample embedded meme image](./images/sample.jpg)`

ReactDOM.render(<App />, document.getElementById('app'))
