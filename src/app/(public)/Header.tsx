import React from "react"

const Header = () => {
    const content = (
        <header>
            <a href="../about/page.tsx">about</a>
            <a href="./blog/page.tsx">blog/</a>
            <a href="./contact/page.tsx">contact</a>
            <a href="./landing/page.tsx">landing</a>
            <a href="./speechs/page.tsx">speechs</a>
            <a href="./training/page.tsx">training</a>
        </header>
    )
    return content
}

export default Header