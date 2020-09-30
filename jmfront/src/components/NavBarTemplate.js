import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import Logo from '../components/Logo.png'

const BtnBlock = styled.div`
    height: 30px;
    display: flex;
    flex-direction: 'column';
    justify-content: flex-end;
    margin-right: 20px;
`;

const LoginBtn = styled.div`
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const LogoutBtn = styled.div`
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const SignupBtn = styled.div`
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const BarBlock = styled.div`
    display: flex;
    flex-direction: 'column';
`;

const Template = styled.div`
    width: 1400px;
    margin: 0 auto;
`;

function NavBarTemplate() {
    const onClick = () => {

    };

    return (
        <div>
            <Template>
                <BtnBlock>
                    <LoginBtn onClick={onClick}>
                        LogIn 
                    </LoginBtn>
                    <LogoutBtn> LogOut </LogoutBtn>
                    <SignupBtn> SignUp </SignupBtn>
                </BtnBlock>
                <BarBlock>
                    <img src={Logo} 
                        width="150px" 
                        height="150px"
                        alt="이미지를 불러올 수 없습니다"
                        />
                    <NavBar />
                </BarBlock>
            </Template>
        </div>
    );
}

export default NavBarTemplate;