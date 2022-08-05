import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled"

//propriedades para indicar se é atab selecionada ou não

function Repositories () {
    return(
        <S.WrapperTabs 
            selectedTabClassName="is-selected"
            selectedTabPanelName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
            <S.WrapperTabPanel> 
                <RepositoryItem 
                    name='10-exercicios-javascript'
                    linkToRepo='https://github.com/souzaamanda/10-exercicios-javascript'
                    fullname='souzaamanda/10-exercicios-javascript'    
                /> 
            </S.WrapperTabPanel>
            <S.WrapperTabPanel> 
                <RepositoryItem 
                    name='adopet-alura-challenge-frontend'
                    linkToRepo='https://github.com/souzaamanda/adopet-alura-challenge-frontend'
                    fullname='ouzaamanda/adopet-alura-challenge-frontend'    
                />
            </S.WrapperTabPanel>

        </S.WrapperTabs>

    )
}

export default Repositories