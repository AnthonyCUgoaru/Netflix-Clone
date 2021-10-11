import React,{useState, useContext, useEffect} from 'react';
import { Card,Loading, Header,Player,Browse } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { CardContainer } from './card';
import Fuse from 'fuse.js';





export function BrowseContainer({slides}) 
{
    const [profile,setProfile]=useState({})
    const [category, setCategory] = useState('series');
    const [loading, setLoading] = useState(true);
    const [searchTerm,setSearchTerm]=useState("")
    const [slideRows, setSlideRows] = useState([]);
   
    const { firebase } = useContext(FirebaseContext);
     
     const user = {
        displayName: "Anthony",
        photoURL: "1"
    };
    //since the setProfile in the BrowseContainer is set equal to 
// SelectProfileContainer's prop, setUser  (setUser={setProfile}), 
//profile in the BrowseContainer now represents the user in  SelectProfileContainer usage on setUser
//so when the profile is clicked profile.displayName is no longer falsy(undefined)
//making it true so it goes to the FooterContainer.
 
 //timer for loading effect
 useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [user])

//allows you to get slides by catergory
 useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);//watches for change in slides and catergory

//Live Searching
 useEffect(() => {
      const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
      const results = fuse.search(searchTerm).map(({ item }) => item);
      
      if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
      } else {
          setSlideRows(slides[category]);
      }
    }, [searchTerm])

 

   return profile.displayName ? (
        <Browse>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
                 <Header.Navigation >
                    
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Noti/>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                  <Header.Link> Account</Header.Link>  
                                </Header.Group>
                                <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out of Netflix</Header.Link>
                            </Header.Dropdown>
                            <Header.ArrowDropDownSymbol/>
                        </Header.Profile>
                    </Header.Group>
                </Header.Navigation>
               
                <Header.Feature> 
                    <Header.CoverImage src="/images/misc/hxh.jpg" alt="Feature Picture"/>
                        {/* will be used later <Header.Catergory type="movie"> </Header.Catergory>*/}
                    <Header.Info>
                        <Header.FeatureTitle src="/images/misc/hxh-title.png" alt="Feature Picture"/>
                        <Header.FeatureDescription>
                            To fulfill his dreams of becoming a legendary Hunter like his dad, a young boy must pass a rigorous examination and find his missing father.
                        </Header.FeatureDescription>
                        <Header.ButtonsContainer>
                        <Header.PlayButton>▶ Play</Header.PlayButton>
                        <Header.InfoButton>
                            <Header.Span>More Info</Header.Span>
                        </Header.InfoButton>
                   </Header.ButtonsContainer>
                    </Header.Info>
                   
                </Header.Feature>

                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
              
                
            <FooterContainer />
        </Browse>)
        : (<SelectProfileContainer user={user} setUser={setProfile} />);
}     

//SelectProfileContainer is passing their props (user and setUser) to BrowseContainer
//essentially making it so where BrowseContainer is passing data making it equal to the props (almost like a SelectProfileContainer is a template for BrowseContainer)
//which SelectProfileContainer uses to crate the profile  
//ex:so the "user" from BrowserContainer will replace any usage of "user" in the SelectProfileContainer 
//hence displaying the profile in the web browser  
//"(<SelectProfileContainer user={user} setUser={setProfile} />);" would not work anywhere else unless you have ideal data to give the props that matches their template

  
       
               
               

            {/*<Header src="/images/misc/hxh-cover.jpg" alt="Cover Show">
                <Header.Feature> 
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>▶ Play</Header.PlayButton>
                </Header.Feature>
            </Header>*/}

            {/*<Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>*/}