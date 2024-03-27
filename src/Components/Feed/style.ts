import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343434;
`;

export const Header = styled.div`
    text-align: center;
    background-color: #2b2b2b;
    width: 100%;
`;

export const Logo = styled.img`
    width: 103px;
    height: 45px;
    padding: 24px 0px;
`;

export const List = styled.ul`
    margin-top: 56px;
    p {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
        margin-bottom: 8px;
    }
    
`

export const ListItem = styled.li`
    width: 516px;
    height: fit-content;
    display: flex;
    gap: 32px;
    margin-bottom: 12px;
    padding: 56px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: fit-content;
        padding: 24px 24px;
        
    }

`;

export const ListContent = styled.div`
    width: 348px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & > p:first-of-type {
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.25;
        text-align: justify;
        color: #9f9f9f;
    }

    p {
        font-family: Roboto;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.33;
        letter-spacing: 0.29px;
        text-align: left;
        color: #5f5f5f;
    }

    h3 {
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
    }

    @media screen and (max-width: 600px) {
        width: 250px;
        
    }
`;

export const ListImg = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 50%;
`;

export const CloseImg = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    object-fit: contain;
`;

