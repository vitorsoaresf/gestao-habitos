import { createGlobalStyle } from "styled-components";
import img from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
//----------------------reset css------------------//

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    box-sizing: border-box;
    font-family: 'Lobster Two', cursive;

    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

//------------------------Default Colors--------------//
:root{
    --darkGreen: #126260;
    --green: #65A491;
    --lightGreen: #7FCD77;
    --darkGray: #718093;
    --gray: #dcdde1;
    --purple: #9C5DB3;
    --purple-0: #6c5ce7;
    --white: #fff;
    --red: #c44e4e;
}

`;

export default GlobalStyle;
