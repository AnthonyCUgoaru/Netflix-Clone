import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    /*the src is a template to add/set up a backround if not use the "home-bg" imagee as backrground */
   display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
 
    @media (max-width: 1100px) 
    {
       padding-top:10px; 
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / contain no-repeat;
     

     }

    /* No greater than 1099px, no less than 400px */
    `

export const Container = styled.div` 
    display: flex;
    margin: 0 56px;
    height: 64px;
    justify-content: space-between;
    align-items: center;
    
    position:fixed; 
    top:0;
    width:100%;
    z-index:999;
    background-color:black;

    /*background-image:linear-gradient(to top ,transparent 0%, rgba(0,0,0,0.3)50%);*/
    margin-left:0;

    a {
        display: flex
    }

    @media (max-width: 1100px) {
       
     margin:0 15px;
       
    
    }

   
    `;

export const Feature = styled.div` /*grabs all the values Container */
   height:90vh;
   position:relative; 
   object-cover:cover;  
`;
    
export const Info = styled.div`
 width:35%;
 position:absolute;
 left:10px;
 bottom:100px;
 display:flex;
 flex-direction:column;
`;

export const CoverImage = styled.img`
   width:100%;
   height:100%;
   
`;

export const FeatureTitle = styled.img` /*grabs all the values Container */
   width:60%
        
    }
`;

export const FeatureDescription=styled.span`
    color:white;
    margin:20px 0;
    font-weight:700;
`

export const Span=styled.span`
    color:white;
    margin-left:5px;
`

export const ButtonsContainer=styled.div`
    
`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;
    
    &:hover {
        background: #cfcccc;
        
    }

    @media (max-width: 1100px) 
    { 
        font-size: 15px;
        padding: 7.5px 15px;
    }
`;

export const InfoButton=styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #4d4d4d;
    color: white;
    border-width: 0;
    padding: 9px 30px;
    border-radius: 5px;
   /* max-width: 130px;*/
    font-weight: bold;
    font-size: 20px;
    margin-left:10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;

    &:hover {
        background: #242424;
        
    }
`

export const Link = styled.p` 
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    
    &:hover {
        text-decoration: underline;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReachRouterLink)` 
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f40612;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }

    @media (max-width: 1100px) 
    {

        height: 22px;
        width: 84px;   
        
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;

@media (max-width: 600px) 
    {
        
    margin-bottom:50px;
           
    }
    
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;

    @media (max-width: 1100px) 
    { 
        font-size: 30px;
    }

    @media (max-width: 600px) 
    {
        
     margin-right:-80px;
        
           
    }
`;


export const Search = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '1' : '0')};
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    
    ${Group} {
        margin-bottom: 10px;
        padding-bottom:10px;

        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        ${Link}, ${Picture} {
            cursor: default;
        }
    }
    
    button {
        margin-right: 10px;
    }
    
    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    
    button {
        cursor: pointer;
    }
    
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
            }
`;

export const Noti = styled.div`
    
    color:white;
    cursor:pointer;
`;

export const ArrowDropDownSymbol= styled.div`
color:white; 


`
export const Catergory= styled.div`
color:white; 
position:absolute;
top:80px;
left:50px;
font-weight:500;
font-size: 25px;
color:white;
display:flex;
align-items:center
cursor:pointer;



#genre {
    font-size:15px;
    cursor:pointer;
    border:1px solid white;
    background-color:black;
    color:white;
    margin-left:20px;
    paddding:5px;
    

    
}



`



