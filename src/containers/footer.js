
import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Audio and Subtitles</Footer.Link>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link href="#">Audio Description</Footer.Link>
                    <Footer.Link href="#">Gift Cards</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                </Footer.Column>
                
                {/*<Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>*/}
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>© 1997-2021 Netflix, Inc.</Footer.Text>
        </Footer>
    )
}
