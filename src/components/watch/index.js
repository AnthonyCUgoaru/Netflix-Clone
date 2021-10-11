import React ,{useState} from 'react';
import ReactPlayer from 'react-player'
import { Link as ReachRouterLink } from 'react-router-dom';
import {Container,Back,Video} from './styles/watch';

export default function Watch({ children, ...restProps }) {
    return  <Container{...restProps}>{children}</Container>

}

Watch.Back=function WatchBack({to,children,...restProps})
{
	 
	return(
		<ReachRouterLink to={to}> 
	<Back{...restProps}>{children}</Back>
	</ReachRouterLink>
	)
}

Watch.Video=function WatchVideo({...restProps})
{
	// const [play, setPlay] = useState(false);

	return <Video{...restProps}>
	<ReactPlayer 
        id="player" 
        width="100%"
        autoPlay
        // playing={play}
       
        pip
        controls="false"
        config={{ file: { forceHLS: true } }} url="https://www.youtube.com/watch?v=IG71ouWSceU&t=32s&ab_channel=EstongOnse" />
        </Video>
}