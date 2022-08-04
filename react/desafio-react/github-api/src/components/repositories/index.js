import React from "react";
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

        </S.WrapperTabs>

    )
}

export default Repositories