import React,{useState} from 'react';
import ReactPlayer from 'react-player'
import {PlayArrow} from '@material-ui/icons';
import { Link as ReachRouterLink } from 'react-router-dom';
import {Container,CardPicture,Info,Icons,Description,ItemInfoTop,Genre,Preview,PlayArrowSymbol} from './styles/card-item';


export default function CardItem({ children, ...restProps }) {
    
        
       return <Container {...restProps}
                   >
                   {children}
               </Container>  
}

CardItem.CardPicture = function CardItemCardPicture({ ...restProps }) {
    return (
        <CardPicture {...restProps} />
        )
}

CardItem.Info= function CardItemInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>;
}

CardItem.Icons= function CardItemIcons({ children, ...restProps }) {
    return <Icons {...restProps}>{children}</Icons>;
}

CardItem.ItemInfoTop= function CardItemInfoTop({ children, ...restProps }) {
    return <ItemInfoTop {...restProps}>
       <span>22 minutes</span>
       <span id="limit">13+</span>
       <span>2001</span>

    {children}</ItemInfoTop>;
}

CardItem.Description= function CardItemDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>;
}

CardItem.Genre= function CardItemGenre({ children, ...restProps }) {
    return <Genre {...restProps}>{children}</Genre>;
}

CardItem.Preview= function CardItemPreview({  children,...restProps }) {
 // https://www.youtube.com/watch?v=d6kBeJjTGnY&ab_channel=vizmedia
 const [play, setPlay] = useState(false);

  const handleMouseEnter = () => {
    setPlay(true);
  };
  
  const handleMouseLeave = () => {
    setPlay(false);
}
  

    return <Preview {...restProps} 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>

<ReactPlayer 
        id="player" 
        width="100%"
        height="100%"
        playing={play}
        backgroundColor="black"
        pip
        controls="false"
        config={{ file: { forceHLS: true } }} url="https://www.youtube.com/watch?v=d6kBeJjTGnY&ab_channel=vizmedia" />
    {children} </Preview>
}
     



CardItem.PlayArrowSymbol = function HeaderPlayArrowSymbol({to, ...restProps }) {
    return( 
         <ReachRouterLink to={to}>
    <PlayArrowSymbol {...restProps }>
          <PlayArrow id="playButton"/>
          
            </PlayArrowSymbol>
        </ReachRouterLink>
        )
}

