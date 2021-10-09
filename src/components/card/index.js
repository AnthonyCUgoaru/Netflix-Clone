import {ArrowBackIosOutlined,ArrowForwardIosOutlined} from "@material-ui/icons";
import React, { useState, useContext, createContext,useRef,useEffect } from 'react';

import {
    Container,
    List,
    ListTitle,
    Wrapper,
    ArrowSliderLeft,
    ArrowSliderRight 

} from './styles/card';

// export const Scroller = createContext();
 

export default function Card({ children, ...restProps }) {


    
       return <Container {...restProps}>{children}</Container>

    
}


Card.ListTitle=function CardListTitle({children,...restProps})
{


    return <ListTitle{...restProps}> {children} </ListTitle>
}

Card.Wrapper=function CardWrapper({children,...restProps})
{
   
return <Wrapper{...restProps} > {children} </Wrapper>

}

Card.List=function CardList({useEffect,scroll,children,...restProps})
{
     //const ref= useRef;

//  useEffect(() => 
//     {
//          const defaultValue =  0 ;
//   const distance =scroll.current ? scroll.current.getBoundingClientRect().x-50 : defaultValue; 

// },[scroll.current]);
  
    return <List{...restProps} active={scroll} useEffect={useEffect}>
   {children}</List>
 

}

Card.ArrowSliderLeft = function HeaderArrowBackIosOutlinedSymbol({  setScroll,...restProps })
 {
    
   
const handleClick =e=>{
        setScroll(e)
     }


    return <ArrowSliderLeft  {...restProps } >
          <ArrowBackIosOutlined id="sliderLeft" onClick={()=>handleClick('left')}/>
          
            </ArrowSliderLeft>
}

    // const handleClick =e=>{
    //     setScroll(scroll)
    //  }

// scroll={scroll}  onClick={()=>handleClick}

Card.ArrowSliderRight = function HeaderArrowForwardIosOutlinedSymbol({setScroll,...restProps}) {
  const handleClick = (e) => {
    setScroll(e);
  };
  
  return (
    <ArrowSliderRight {...restProps}>
      <ArrowForwardIosOutlined 
        id="sliderRight" 
        onClick={() => handleClick("right")}
                               />
    </ArrowSliderRight>
  );
};
