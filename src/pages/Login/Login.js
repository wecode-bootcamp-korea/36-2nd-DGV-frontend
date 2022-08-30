import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import kakaoImage from '../../assets/Login/kakao_login_medium_wide.png';
import { API } from '../../components/config/config.js';

function Login() {
  const [isTokenPresent, setIsTokenPresent] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const kakaoLogin = () => {
    const { Kakao } = window;

    Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email',
      success: function (response) {
        if (response) {
          fetch(`${API.login}`, {
            method: 'POST',
            headers: { Authorization: response.access_token },
          })
            .then(res => {
              if (res.ok === true) {
                return res.json();
              } else {
                alert('로그인에 실패하였습니다.');
              }
            })
            .then(res => {
              localStorage.setItem('token', res.authorization);
              navigate('/');
              alert('로그인 되었습니다');
            });
        }
      },
    });
  };

  const websiteLogOut = () => {
    const { Kakao } = window;
    Kakao.Auth.logout(() => {
      localStorage.clear();
      setIsTokenPresent(false);
      alert('로그아웃 되었습니다');
    });
  };

  useEffect(() => {
    if (token !== null) {
      setIsTokenPresent(true);
    } else {
      setIsTokenPresent(false);
    }
    navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTokenPresent]);

  return (
    <div className="Login">
      <LoginWrapper>
        <LoginContents>
          <LoginSection>
            <TopMenu>
              <LoginTab>로그인</LoginTab>
            </TopMenu>
            <LoginBox>
              <Logo src="/images/Login/DGV-RED.png" alt="logo" />
              {isTokenPresent ? (
                <>
                  <LoginBoxTextTop>이미 로그인 중 입니다.</LoginBoxTextTop>
                  <LoginBoxText>
                    로그아웃을 하려면 아래 버튼을 클릭하세요!
                  </LoginBoxText>
                  <LogOut onClick={websiteLogOut}>로그아웃</LogOut>
                </>
              ) : (
                <>
                  <LoginBoxTextTop>간편하게 로그인하고</LoginBoxTextTop>
                  <LoginBoxText>다앙한 서비스를 이용해보세요!</LoginBoxText>

                  <KakaoButton src={kakaoImage} onClick={kakaoLogin} />
                </>
              )}
            </LoginBox>
          </LoginSection>
        </LoginContents>
      </LoginWrapper>
    </div>
  );
}

export default Login;
const LoginWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const LoginContents = styled.div`
  margin: 0 30px;
  padding-bottom: 50px;
  text-align: center;
`;

const LoginSection = styled.div`
  margin-top: 15px;
  text-align: center;
  padding: 30px 30px 0 30px;
`;

const TopMenu = styled.div`
  border-bottom: 2px solid #898987;
`;

const LoginTab = styled.div`
  width: 100px;
  background-color: ${({ theme }) => theme.logoColor};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  line-height: 37px;
`;

const LoginBox = styled.div`
  padding: 45px 0;
  border-bottom: 2px solid #898987;
`;

const Logo = styled.img`
  width: 200px;
`;

const LoginBoxText = styled.div`
  text-align: center;
  margin-bottom: 15px;
  line-height: 1.2;
  color: #666;
  font-weight: 400;
  font-size: 15px;
`;

const LoginBoxTextTop = styled(LoginBoxText)`
  margin-top: 15px;
`;

const KakaoButton = styled.img`
  width: 300px;
  height: 45px;
  background-size: 100% 100%;

  &:hover {
    cursor: pointer;
    opacity: 80%;
  }
`;

const LogOut = styled.button`
  background-color: ${theme => theme.logoColor};
  width: 300px;
  height: 45px;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 80%;
  }
`;
