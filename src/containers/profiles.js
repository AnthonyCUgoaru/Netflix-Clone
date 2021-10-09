import React from 'react';
import { Header,Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export function SelectProfileContainer({user,setUser}) {

    return (
        <>
        <Header bg={false}>
            <Header.Navigation>
                <Header.Logo
                    to={ROUTES.HOME} 
                    src="/images/misc/logo.svg"
                    alt="Netflix"
                />
            </Header.Navigation>
        </Header>
        <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => setUser({displayName: user.displayName,
                                                  photoURL: user.photoURL
                        })}
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
            </>
    )
}