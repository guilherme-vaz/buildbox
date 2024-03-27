import styled from "styled-components";
import imgPlaceholder from '../../assets/imgPlaceholder.svg';

export const Form = styled.form<{ imgPreview: string }>`
    width: 516px;
    margin: 40px 425px 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    
    & > input[type="file"] {
        display: ${props => (props.imgPreview ? 'none' : "block")};
        cursor: pointer;
        font-size: 0;
        width: 88px;
        height: 88px;
        border: 1px solid rgba(75, 75, 75, 1);
        border-radius: 50%;
        margin-bottom: 8px;
        background-color: transparent;
        background-image: url(${imgPlaceholder});
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
    }

    @media screen and (max-width: 600px) {
        width: 50%;
        
    }
`;

export const DivImgPreview = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;

`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: end;
    align-self: end;
    margin-top: 32px;
    margin-right: 24px;
}
`;

export const ImgPreview = styled.img`
    width: 88px;
    height: 88px;
    borderRadius: 50%;
    marginBottom: 8px;
`;

export const NameInput = styled.input`
    border: none;
    width: 468px;
    padding: 12px 0px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    

    @media screen and (max-width: 600px) {
        width: fit-content;
        
    }
}
`;

export const MessageInput = styled.input`
    border: none;
    width: 468px;
    padding: 12px 0px 80px 16px;
    border-radius: 8px;
    background-color: #494949;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    line-height: 0;
    

    @media screen and (max-width: 600px) {
        width: fit-content;
        
    }
}
`;

export const SubmitButton = styled.button<{ isValid: boolean }>`
    width: 98px;
    height: 41px;
    object-fit: contain;
    border: none;
    border-radius: 8px;
    background-color:  ${props => (props.isValid ? "#71bb00" : "#5f5f5f")};
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    color:  ${props => (props.isValid ? "white" : "#313131")} ;
`;

export const DiscardButton = styled.button`
    width: 98px;
    height: 41px;
    object-fit: contain;
    border: none;
    background-color: transparent;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    color: #5f5f5f;
    text-decoration: underline;
    cursor: pointer;
`;