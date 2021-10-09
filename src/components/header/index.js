import React ,{useState} from 'react';
import {Notifications,ArrowDropDown,InfoOutlined} from '@material-ui/icons';
import { Link as ReachRouterLink } from 'react-router-dom';
import { 
        Background,
        Noti,
        Container,
        Logo,
        ButtonLink,
        Link,
        Group,
        Info,
        Feature,
        FeatureTitle,
        FeatureDescription,
        Span,
        FeatureCallOut,
        ButtonsContainer,
        PlayButton,
        InfoButton,
        Search,
        SearchIcon,
        SearchInput,
        Profile,
        Picture,
        ArrowDropDownSymbol,
        Dropdown,
        CoverImage,
        Catergory

        } 
        from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;

}

Header.Navigation = function HeaderNavigation({ children }) {
    // const [scrolling,setScrolling]=useState(false);
    // console.log(window.pageYOffset)
    // console.log(scrolling)
 
    return <Container>{children}</Container>;

// onScroll={() => setScrolling(window.pageYOffset ===0 ? false:true)}
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.CoverImage = function HeaderCoverImage({  ...restProps }) {
    return (
       
            <CoverImage {...restProps} />
        
    )
}

Header.FeatureTitle = function HeaderFeatureTitle({ ...restProps }) {
    return (
        <FeatureTitle {...restProps} />
        )
}

Header.Info= function HeaderInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>;
}

Header.FeatureDescription= function HeaderFeatureDescription({ children, ...restProps }) {
    return <FeatureDescription {...restProps}>{children}</FeatureDescription>;
}

Header.Span= function HeaderSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>;
}

Header.ButtonsContainer= function HeaderButtonsContainer({ children, ...restProps }) {
    return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps} >{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.InfoButton = function HeaderInfoButton({ children, ...restProps }) {
    return <InfoButton {...restProps}>
    <InfoOutlined/>
    {children}

    </InfoButton>
}


Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
}

Header.Dropdown = function HeaderDRopdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
}

Header.Noti = function HeaderNoti({  ...restProps }) {
    return <Noti {...restProps }>
          <Notifications/>

            </Noti>
}

Header.ArrowDropDownSymbol = function HeaderArrowDropDownSymbol({  ...restProps }) {
    return <ArrowDropDownSymbol {...restProps }>
          <ArrowDropDown/>
          
            </ArrowDropDownSymbol>
}

Header.Catergory = function HeaderProfile({ type, ...restProps }) {
    return (
        <Catergory  {...restProps}>
            <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </Catergory >
    )
}