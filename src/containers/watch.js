import {Watch} from '../components'
import {ArrowBackOutlined} from '@material-ui/icons';
import * as ROUTES from '../constants/routes';



export function WatchContainer() 
 {
	return(
		<Watch>
			<Watch.Back to={ROUTES.BROWSE}>
				<ArrowBackOutlined/>
				Home
			</Watch.Back>
			<Watch.Video/>
		</Watch>
        
    )
}