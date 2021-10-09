import React,{useRef,useState,useEffect} from 'react';
import { Card } from '../components';
import { CardItemContainer } from './card-item';

export function CardContainer() 
 {
// const ref=useRef();

    

    const [scroll,setScroll]=useState('left')


//     useEffect(() => 
//     {
//          const defaultValue =  0 ;
//   const distance =scroll.current ? scroll.current.getBoundingClientRect().x-50 : defaultValue; 

// },[scroll.current]);


    return(
        <Card>
        
            <Card.ListTitle> Continue to watch</Card.ListTitle>
            <Card.Wrapper >
                <Card.ArrowSliderLeft setScroll={setScroll}  />
                <Card.List scroll={scroll}  > {/*useEffect={useEffect(scroll)}*/}
                  <CardItemContainer index={0}/>
                  <CardItemContainer index={1}/>
                  <CardItemContainer index={2}/>
                  <CardItemContainer index={3}/>
                  <CardItemContainer index={4}/>
                  <CardItemContainer index={5}/>
                  <CardItemContainer index={6}/>
                  
                </Card.List>
                <Card.ArrowSliderRight setScroll={setScroll} />
            </Card.Wrapper>
        </Card>
    )
}