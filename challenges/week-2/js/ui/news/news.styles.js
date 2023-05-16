export const animation = `
@keyframes move{
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
 }
 
`;
export const newsBoxStyles = `
position: absolute;
width: 2786px;
height: 103px;
left: -10%;
top: 30%;
background: #75FB8E;
transform: rotate(-8.32deg);
`;
export const newsTextStyles = `
width: 5489px;
height: 63px;
padding:20px 5px;
font-family: 'Impact';
font-style: normal;
font-weight: 400;
font-size: 52px;
line-height: 63px;
text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #05077D;
animation:move 20s linear infinite;
`;
