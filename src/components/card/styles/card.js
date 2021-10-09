import styled from 'styled-components';

export const Container=styled.div`
width:100%;
margin-top:10px;
`

export const ListTitle=styled.span`
color:white;
font-size:20px;
font-weight:500;
margin-left:50px;
`

export const List=styled.div`

margin-left:50px;
display:flex;
width:max-content;
margin-top:10px;
transform:${({ active}) => (active==='right'  ? `translateX(${-250}px)` : 'translateX(0px)')}


`

export const Wrapper=styled.div`
	position:relative;

`

export const ArrowSliderLeft=styled.div`

	
#sliderLeft 
	{
	position:absolute;
	left:0;
	z-index:99;
	width:50px;
	top:0;
	bottom:0;
	margin:auto;
	cursor:pointer;
	color:white;
	height:100%;
	background-color:rgba(31,31,31,0.4)

	}	 	

	
`

export const ArrowSliderRight=styled.div`

	#sliderRight 
	{
	position:absolute;
	right:0;
	z-index:99;
	width:50px;
	top:0;
	bottom:0;
	margin:auto;
	cursor:pointer;
	color:white;
	height:100%;
	background-color:rgba(31,31,31,0.4)

	}	 	

`






