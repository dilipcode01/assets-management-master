import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 0.75rem 0.75rem 0  0;
`;

const Card = styled.div`
  background-color: #7E22CE;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 16px;
  margin: 16px 0;
`;

const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #4F46E5;
  color: #fff;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 9999px;
  border: 1px solid #4F46E5;
  cursor: pointer;
`;

const ButtonEntity = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  color: #475569;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 9999px;
  border: 1px solid #CBD5E1;
  cursor: pointer;
`;

const Tag = styled.span`
  font-size: 12px;
  line-height: 16px;
  background-color: #d9f99d;
  color: #22C55E;
  padding: 4px 8px;
  border-radius: 9999px;
`;

const MenuButton = styled.button`
  color: #475569;
  border-radius: 9999px;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = styled.nav`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

// const Tabs = styled.div`
//   display: flex;
//   margin-bottom: 16px;
//   gap: 8px;
//   overflow-x: auto;
// `;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => (props.active ? '#4F46E5' : '#475569')};
  font-size: 14px;
  padding: 8px 8px;
  border-radius: 9999px;
  border: ${(props) => (props.active ? '1px solid #4F46E5' : 'none')};
  cursor: pointer;
  white-space: nowrap;
  img {
    height: 18px;
    width: 18px;
  }
`;

const PortfolioSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 16px;
`;

const AskAIButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.007em;
  background: #1E293B;
  width: 100%;
  height: 48px;
  border-radius: 30px;
`;

const HeadingText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.007em;
`;

const AiSuggestionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #CBD5E1;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 700;    
  padding: 10px 16px;
  color: #475569;
  border-radius: 30px;
`;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 50%;
  border: 1px solid #CBD5E1;
  border-radius: 40px;
  color: #475569;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 16px;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const CardPerform = styled.div`
  margin: 20px 0;
  color: #475569;
`

const CardGross = styled.div`
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    padding: 16px;
    margin: 16px 0;
`

const CustomHead = styled.div`
  display : flex;
  @media(min-width: 1024px) {
    > div {
      justify-content: center;
    }
  }
`

const CustomHeadGroup = styled.div`
  display : flex; 
  align-items: center;
  justify-content: space-between;
  gap: 3px; 
  margin-bottom: 24px;
  > div {
    justify-content: space-between;
    button {
      font-size: 14px;
      color: #475569;
      font-weight: 600;
      padding: 8px 12px;
      &:first-child {
        color: #4F46E5;
        border: none;
        background-color: #EEF2FF;  
      }
    }
  }
`

const CustomDates = styled.div`
  margin-top: 15px;
  background-color: #F1F5F9;
  border-radius: 30px;
  padding: 4px;
  > div {
    justify-content: space-between;
    button {
      font-size: 14px;
      color: #475569;
      font-weight: 700;
      &:last-child {
        color: #4F46E5;
        box-shadow: 0px 4px 8px -2px #1717171A;
        border: none;
        background-color: #fff;  
      }
    }
  }
`

export {
  Container,
  Card,
  HeaderCard,
  Button,
  Tag,
  MenuButton,
  Navbar,
  Tabs,
  Tab,
  PortfolioSearch,
  AskAIButton,
  HeadingText,
  AiSuggestionsButton,
  CustomButton,
  IconImage,
  ButtonEntity,
  CardPerform,
  CardGross,
  CustomHead,
  CustomHeadGroup,
  CustomDates
};
