import { styled } from "styled-components";
import MinusIcon from "../../assets/svg/minusIcon.svg";
import RightDirectionIcon from "../../assets/svg/rightDirectionIcon.svg";
import { IconImage } from "./styled";


const BankCard = styled.div`
  background-color: transparent;
  border-radius: 8px;
  padding: 0;
  margin: 0;
`;

const BankHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 14px 8px;
  background: #F8FAFC;
  border-bottom: 1px solid #CBD5E1;
`;

const BankIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const BankName = styled.h2`
  font-size: 14px;
  font-weight: bold;
`;

const TotalAmount = styled.p`
  color: #6366F1;
`;

const FundListContainer = styled.div`
  margin-top: 0;
`;

const FundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 8px;
  border-bottom: 1px solid #e5e7eb;
  img {
    height: 15px;
    width: 15px;
  }
`;

const FundName = styled.span`
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
`;

const FundAmount = styled.span`
  font-size: 14px;
  color: #404040;
  font-weight: 700;
`;

const BankAccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.007em;
  background: ${(props) => props.color};
  width: 100%;
  height: 36px;
  border-radius: 30px;
  padding: 6px;
  p {
    background-color: #fff;
    padding: 4px 12px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 20px;
    color: ${(props) => props.color};
  }
`;

const IncrementBox = styled.p`
  color: ${(props) => (props.incremented ? "#16A34A" : "#E11D48")};
  background: ${(props) => (props.incremented ? "#DCFCE7" : "#FFE4E6")};
  border-radius: 30px;
  padding: 4px 8px;
  font-size: 12px;
`;

const FundSubName = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const IncrementValue = styled.p`
  color: ${(props) => (props.incremented ? "#16A34A" : "#E11D48")};
  font-size: 12px;
  font-weight: 700;
`;


export const AccountsCard = ({ name, amount, color }) => {
    return (
      <BankAccountButton color={color}>
        <div className="flex items-center gap-2 text-sm">
            <IconImage src={MinusIcon} alt="Minus icon" />
            {name}
        </div>
        <p>{amount}</p>
      </BankAccountButton>
    );
  };
  
export const Fund = ({ fund }) => {
    return (
      <FundContainer>
        <div className="flex items-start gap-1 flex-col">
          <FundName>{fund.fundName}</FundName>
          {fund.sub && <FundSubName>{fund.sub}</FundSubName>}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-end justify-end gap-1 flex-col">
            <FundAmount>{fund.amount}</FundAmount>
            {fund.increment && (
              <IncrementValue incremented={fund.incremented}>{fund.increment}</IncrementValue>
            )}
          </div>
          <IconImage src={RightDirectionIcon} alt="right direction" />
        </div>
      </FundContainer>
    );
  };
  
export const FundList = ({ funds }) => {
    return (
      <FundListContainer>
        {funds.map((fund, index) => (
          <Fund key={index} fund={fund} />
        ))}
      </FundListContainer>
    );
  };
  
export const Bank = ({ bank }) => {
    return (
      <BankCard>
        <BankHeader>
          <div className="flex items-center gap-2">
            {bank.bankIcon && <BankIcon src={bank.bankIcon} alt={bank.bankName} />}
            <BankName className="text-[#475569] text-sm">{bank.bankName}</BankName>
          </div>
          <div className="flex items-center gap-2">
            <TotalAmount className="font-semibold text-sm">{bank.totalAmount}</TotalAmount>
            {bank.increment && <IncrementBox incremented={bank.incremented}>{bank.increment}</IncrementBox>}
          </div>
        </BankHeader>
        <FundList funds={bank.funds} />
      </BankCard>
    );
  };
  