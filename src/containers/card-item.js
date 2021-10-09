import React, {useState} from 'react';
import { CardItem } from '../components';
import {PlayArrow,Add,ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons';

export function CardItemContainer({index}) {
     const [hovered,setHovered]=useState(false);
     // const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      const wrapper = {
     border:'2px solid white',
     padding:'5px',
     borderRadius:`${50}% `,
     marginRight:'10px',
     fontSize:`16px`

 }

 

    return(
            <CardItem 
                style={{left:hovered && index * 225 - 50 + index * 2.5}}
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}>
                <CardItem.CardPicture src="/images/misc/hxh.jpg" alt="Feature Picture" />
               

                {hovered &&(
                <>
                 <CardItem.Preview 
             >
                <CardItem.Info>
                    <CardItem.Icons>
                        <PlayArrow style={wrapper}/>
                        <Add style={wrapper}/>
                        <ThumbUpAltOutlined style={wrapper}/>
                        <ThumbDownAltOutlined style={wrapper}/>
                    </CardItem.Icons>
                    <CardItem.ItemInfoTop/>
                    <CardItem.Description>
                    To fulfill his dreams of becoming a legendary Hunter like his dad, 
                    a young boy must pass a rigorous examination and find his missing father.
                    </CardItem.Description>
                    <CardItem.Genre>Action</CardItem.Genre>
                </CardItem.Info>
                </CardItem.Preview>
                </>
                )}
            </CardItem>

    )
}