import React, { useState } from "react";
import styled from "styled-components";

import {
  Container,
  Tag,
  AskAIButton,
  HeadingText,
  AiSuggestionsButton,
  IconImage,
  CardGross,
  CustomHead,
	CustomHeadGroup,
	CustomDates,
} from "./layouts/styled";
import GlobIcon from "../assets/svg/globe.svg";
import AustraliaFlag from "../assets/svg/australia.svg";
import USAFlag from "../assets/svg/usaFlag.svg";
import EuropeFlag from "../assets/svg/europeFlag.svg";
import threeDots from "../assets/svg/threeDots.svg";
import MagicWand from "../assets/svg/magicWand.svg";
import MagicWandDark from "../assets/svg/magicWandDark.svg";
import RightArrow from "../assets/svg/rightArrow.svg";
import GrowTrading from "../assets/svg/growtrading.svg";

import CustomTabs from "./layouts/Tabs";
import { FixedIncome, ListedShares, ManagedFunds, PrivateEquity, PrivateProperty, UnListedShares, banks } from "./data";
import { AccountsCard, Bank } from "./layouts/ListCards";

// Styled components
const BankListContainer = styled.div`
  padding: 0 0 25px;
  min-height: 100%;
`;

const AssetsBalance = () => {
  const [activeTab, setActiveTab] = useState("FY 2024");
  const [activeCountryTab, setCountryActiveTab] = useState("All");
  const [groupByTab, setGroupByTab] = useState("Assets class");

  return (
    <Container>
      <h2 className="text-2xl text-[#1E293B] font-bold mb-2 pb-4">Asset balances</h2>
      <AskAIButton>
        <IconImage src={MagicWand} alt="Magic Wand" />
        Ask AI assistant
        <IconImage src={RightArrow} alt="Right Arrow" />
      </AskAIButton>
      <CustomHead>
        <CustomTabs
          tabs={[
            { name: "All", icon: GlobIcon },
            { name: "Australia", icon: AustraliaFlag },
            { name: "USA", icon: USAFlag },
            { name: "Europe", icon: EuropeFlag },
          ]}
          activeTab={activeCountryTab}
          setActiveTab={setCountryActiveTab}
        />
      </CustomHead>
      <CardGross>
        <div className="flex items-center justify-between gap-2 mb-4">
          <h2 className="text-lg text-[#475569] font-semibold">Net asset</h2>
          <button>
            <IconImage src={threeDots} alt="dots" />
          </button>
        </div>
        <p className="text-4xl text-[#1E293B] font-bold">$74,769,618</p>
				<div className="flex items-center gap-2 py-3">
					<p>Returns:  <span>+$3,285,372</span></p>
					<Tag className="inline-flex items-center gap-1 font-medium !bg-[#22C55E] text-sm !text-white">
						<img src={GrowTrading} alt="Grow Trading" className="h-3 w-3"/>
						+4.6%
					</Tag>
				</div>
        <p className="text-black text-sm font-normal my-2">
					Realised gains:  
          <span className="text-[#15803D] font-semibold ml-2">+$1,219,000</span>
        </p>
        <p className="text-black text-sm font-normal">
					Unrealised gains: <span className="text-[#15803D] font-semibold ml-2">+$2,066,372</span>
        </p>
				<CustomDates>
					<CustomTabs
						className="mb-0"
						tabs={["Day", "Month", "Quarter", "FY 2024"].map((name) => ({
							name,
						}))}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</CustomDates>
      </CardGross>
      <CustomHeadGroup>
        <p className="text-[#64748B] text-sm font-medium">Group By:</p>
        <CustomTabs
          tabs={[
            { name: "Assets class" },
            { name: "Entity" },
            { name: "Broker" },
          ]}
          activeTab={groupByTab}
          setActiveTab={setGroupByTab}
        />
      </CustomHeadGroup>
      <AccountsCard name="Bank accounts" amount={"$8,903,000"} color="#06B6D4" />
      <BankListContainer>
        {banks.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Managed funds" amount={"$12,427,264"} color="#F97316" />
      <BankListContainer>
        {ManagedFunds.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Listed shares" amount={"$13,967,505"} color="#FCD34D" />
      <BankListContainer>
        {ListedShares.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Unlisted shares" amount={"$3,521,073"} color="#64748B" />
      <BankListContainer>
        {UnListedShares.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Private equity" amount={"$5,791,299"} color="#FDBA74" />
      <BankListContainer>
        {PrivateEquity.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Fixed income" amount={"$9,472,889"} color="#94A3B8" />
      <BankListContainer>
        {FixedIncome.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <AccountsCard name="Private property" amount={"$23,731,276"} color="#14B8A6" />
      <BankListContainer>
        {PrivateProperty.map((bank, index) => (
          <Bank key={index} bank={bank} />
        ))}
      </BankListContainer>
      <HeadingText>AI suggested queries</HeadingText>
      <div className="flex items-center flex-col gap-4 py-3">
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand" />
          Listed shares balances per month?
        </AiSuggestionsButton>
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand" />
          Liquid assets per account?
        </AiSuggestionsButton>
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand" />
          What are current portfolio risks?
        </AiSuggestionsButton>
      </div>
    </Container>
  );
};

export default AssetsBalance;
