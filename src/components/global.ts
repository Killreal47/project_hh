import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: black;
    }

    html, 
    body {
        height: 100%;
    }


    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Links */

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    /* Common */

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;

    }

    /* Form */

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 15px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const MainBlock = styled.div`
    flex: 1 0 auto;
`