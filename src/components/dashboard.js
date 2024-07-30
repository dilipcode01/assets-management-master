import React, { useState } from 'react';
import {
  Container,
  Card,
  Button,
  Tag,
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
  CustomDates
} from './layouts/styled';
import SearchIcon from '../assets/svg/searchIcon.svg';
import slidesHorizontal from '../assets/svg/sliderHorizontal.svg';
import BuildingIcon from '../assets/svg/buildings.svg';
import CloudUpIcon from '../assets/svg/cloudArrouwUp.svg';
import GlobIcon from '../assets/svg/globe.svg';
import AustraliaFlag from '../assets/svg/australia.svg';
import USAFlag from '../assets/svg/usaFlag.svg';
import EuropeFlag from '../assets/svg/europeFlag.svg';
import handCoin from '../assets/svg/handCoin.svg';
import threeDots from '../assets/svg/threeDots.svg';
import MagicWand from '../assets/svg/magicWand.svg';
import MagicWandDark from '../assets/svg/magicWandDark.svg';
import RightArrow from '../assets/svg/rightArrow.svg';

import CustomTabs from './layouts/Tabs';

const PortfolioDashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [portFolioTab, setPortfolioTab] = useState('All');
  const [grossTab, setGrossTab] = useState('FY 2024');

  return (
    <Container>
      <PortfolioSearch>
        <h2 className='text-2xl text-[#1E293B] font-bold'>Portfolio Dashboard</h2>
        <img src={SearchIcon} alt="search" />
      </PortfolioSearch>
      <AskAIButton>
        <IconImage src={MagicWand} alt="Magic Wand"/>
          Ask AI assistant
          <IconImage src={RightArrow} alt="Right Arrow"/>
      </AskAIButton>
      <CustomHead>
        <CustomTabs
          tabs={[
            { name: 'All', icon: GlobIcon },
            { name: 'Australia', icon: AustraliaFlag },
            { name: 'USA', icon: USAFlag },
            { name: 'Europe', icon: EuropeFlag },
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </CustomHead>
      <Card>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <h2 className='text-base font-medium'>Net assets</h2>
          <button><IconImage src={threeDots} alt='dots'/></button>
        </div>
        <p className='text-3xl font-bold'>$74,769,618</p>
        <div className='flex items-center gap-2 my-3'>
          <Tag>+0.1% last day</Tag>
          <Tag className="!text-[#475569]">Last day</Tag>
        </div>
        <p className='text-base font-extralight'>Gross assets: <span className='font-bold'>$78,789,618</span></p>
        <p className='text-base font-extralight'>Liabilities: <span className='font-semibold text-[#FDA4AF] drop-shadow-[0px_1px_4px_0px_#00000040]'>$4,020,000</span></p>
      </Card>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <Button>
          <IconImage src={handCoin} alt="handCoin" /> Add new asset
        </Button>
        <ButtonEntity>
          <IconImage src={BuildingIcon} alt="building" /> Add new entity
        </ButtonEntity>
      </div>
      <CardPerform>
        <h2 className='text-lg text-[#475569] font-semibold mb-3'>
          Portfolio performance
        </h2>
        <CustomTabs
          tabs={[
            { name: 'All' },
            { name: 'Realised gains' },
            { name: 'Unrealised gains' },
          ]}
          activeTab={portFolioTab}
          setActiveTab={setPortfolioTab}
        />
        <div
          className='flex items-center justify-between py-4 border-b border-[#E2E8F0]'
        >
          <span className='font-medium text-sm'>Month</span>
          <span className='text-[#334155] text-sm font-semibold'>
            +401,321 <Tag className='!bg-[#22C55E] !text-white font-medium ml-2'>+0.5%</Tag>
          </span>
        </div>
        <div
          className='flex items-center justify-between py-4 border-b border-[#E2E8F0]'
        >
          <span className='font-medium text-sm'>Quarter</span>
          <span className='text-[#334155] text-sm font-semibold'>
            +814,603 <Tag className='!bg-[#22C55E] !text-white font-medium ml-2'>+1.1%</Tag>
          </span>
        </div>
        <div 
          className='flex items-center justify-between py-4 border-b border-[#E2E8F0]'
        >
          <span className='font-medium text-sm'>FY 2024</span>
          <span className='text-[#334155] text-sm font-semibold'>
            +3,285,372 <Tag className='!bg-[#22C55E] !text-white font-medium ml-2'>+4.6%</Tag>
          </span>
        </div>
      </CardPerform>
      <CardGross>
      <div className='flex items-center justify-between gap-2 mb-4'>
          <h2 className='text-lg text-[#475569] font-semibold'>Gross income</h2>
          <button><IconImage src={threeDots} alt='dots'/></button>
        </div>
        <p className='text-4xl text-[#1E293B] font-bold'>
          $1,210,000
        </p>
        <Tag className='!bg-transparent text-sm '>+4.4% <span className='text-[#475569]'>vs last year</span></Tag>
        <p className='text-black text-sm font-normal my-2'>
          Less expenses: <span className='text-[#881337] font-semibold ml-2'>-608,950</span>
        </p>
        <p  className='text-black text-sm font-normal'>
          Net income: <span className='font-semibold ml-2'>$601,050</span>
        </p>
        <CustomDates>
          <CustomTabs className="mb-0"
            tabs={['Day', 'Month', 'Quarter', 'FY 2024'].map((name) => ({
              name,
            }))}
            activeTab={grossTab}
            setActiveTab={setGrossTab}
          />
        </CustomDates>
      </CardGross>
      <HeadingText>AI suggested queries</HeadingText>
      <div className='flex items-center flex-col gap-4 py-3 border-b border-[#E2E8F0]'>
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand"/>
          Listed shares balances per month?</AiSuggestionsButton>
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand"/>
          Liquid assets per account?
        </AiSuggestionsButton>
        <AiSuggestionsButton>
          <IconImage src={MagicWandDark} alt="Magic Wand"/>
          What are current portfolio risks?
        </AiSuggestionsButton>
      </div>
      <div className="flex items-center justify-center gap-3 py-3">
        <CustomButton>
          <IconImage src={slidesHorizontal} alt="slidesHorizontal" /> Customise
        </CustomButton>
        <CustomButton>
          <IconImage src={CloudUpIcon} alt="cloud up icon" /> Add Widgets
        </CustomButton>
      </div>
    </Container>
  );
};

export default PortfolioDashboard;
