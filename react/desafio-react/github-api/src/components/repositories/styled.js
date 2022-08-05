import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

//a tabsRole é necessaria quando cria um componente costumizado
//o valor é usado dentro do react-tabs para verificar a função de um componente interno <Tabs />
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid yellowgreen;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    margin: 8px;

    //não funcionou!
    &:focus {
        outline: none;
        
    }

    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-bottom: 1px solid black;        
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
   padding: 16px;
   border: 1px solid gainsboro;
   box-shadow: 0 0 1rem pink;
   margin-top: -5px;
       
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;


