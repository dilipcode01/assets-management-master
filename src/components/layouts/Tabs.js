import React from 'react';
import { Tabs, Tab, IconImage } from './styled';

const CustomTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          active={activeTab === tab.name}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon && <IconImage src={tab.icon} alt={tab.name} />}
          {tab.name}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
