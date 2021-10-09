import styled from 'styled-components';

export const Container=styled.div`
    width:225px;
    height:120px;
    background-color:#000000;
    margin-right:5px;
    overflow:hidden;
    cursor:pointer;
    color:white;

    

    &:hover
    {
        
        width:325px;
        height:350px;
        position:absolute;
        top:-140px;
        -webkit-box-shadow: 0px 2px 13px 5px rgba(255,255,255,0.22); 
        box-shadow: 0px 2px 13px 5px rgba(255,255,255,0.22);
        background-color:black;


        img
        {
            display:none;
        }



    } 

`

export const CardPicture=styled.img`
    width:100%;
    height:100%
    object-fit:cover; 


`

export const Info=styled.div`
  
    &:hover
    {
  display:flex; 
  flex-direction:column;
  padding:5px;
}
`

export const Icons=styled.div`
 color:white; 
 display:flex; 
 margin-bottom:10px;
`

export const Description=styled.div`
  font-size:13px;
  margin-bottom:10px;
`

export const ItemInfoTop=styled.div`
 display:flex; 
 align-items:center;
 margin-bottom:10px;
 font-size:14px;
 font-weight:600;
 color:gray;

 #limit {
    border:1px solid gray;
    padding:1px 3px;
    margin:0 10px;   
 }
`

export const Genre=styled.div`
  font-size:14 px;
  color:lightgray;
`
export const Preview=styled.div`
    width:100%
    height:100%;
    object-fit:cover;
    position:absolute;
    top:0;
    left:0;
    



`

export const PlayArrowSymbol=styled.div`
   
   #playButton
   {

   }
`