import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction:column;
    padding: 70px 56px;
    margin: auto;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Row = styled.div`
   display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;
export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }


`; 

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    
`;


export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 10px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;


 