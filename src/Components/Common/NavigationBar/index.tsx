import styled from "styled-components";
import LogoImage from "Assets/Logo.png";
import Search from "Assets/SearchIcon.png";
import Cart from "Assets/CartIcon.png";

export default function NavigationBar() {
  return (
    <Container>
      <Wrapper>
        <Logo src={LogoImage} alt="로고 이미지" />
        <CategoryWrapper>
          <CategoryButton>
            <CategoryImage
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
              alt="카테고리 아이콘"
            />
            카테고리
          </CategoryButton>
          <Button>스토어</Button>
          <Button>컨텐츠</Button>
          <Button>커뮤니티</Button>
        </CategoryWrapper>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="내 스타일 매거진, 상품, 사진 검색"
          />
          <SearchIcon src={Search} alt="검색 아이콘" />
        </SearchWrapper>
        <CartWrapper>
          <CartIcon src={Cart} alt="카트 아이콘" />
        </CartWrapper>
        <ButtonWrapper>
          <LoginButton>로그인/가입</LoginButton>
          <InfoButton>비회원 주문조회</InfoButton>
          <InfoButton>고객센터</InfoButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 99;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 12px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  height: 100%;
`;

const CategoryButton = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  height: 100%;
`;

const CategoryImage = styled.img`
  height: 24px;
  margin: 0 10px 2px 0;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:nth-child(3) {
    padding-top: 1px;
    color: #ed6c6d;
    border-bottom: 4px solid #ed6c6d;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 320px;
  margin-left: 120px;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 0 10px;
  border: none;
  ::placeholder {
    color: #9e9e9e;
    padding-left: 10px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.5px;
  }
  :focus {
    outline: none;
    ::placeholder {
      color: #f5f5f5;
      transition: 0.3s;
    }
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 8px;
  height: 24px;
  width: 24px;
  opacity: 0.6;
  cursor: pointer;
`;

const CartWrapper = styled.div`
  width: 40px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 30px;
`;

const ButtonWrapper = styled.div`
  font-size: 13px;
  font-weight: 700;
  display: flex;
`;

const LoginButton = styled.div`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: #f05658;
  color: white;
  width: 100px;
  padding: 12px 0;
  border-radius: 20px;
  font-size: 14px;
`;

const InfoButton = styled.div`
  color: #333c45;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  text-align: center;
  letter-spacing: 1px;
`;
