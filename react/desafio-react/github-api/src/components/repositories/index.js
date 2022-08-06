import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks"
import RepositoryItem from "../repository-item";
import * as S from "./styled"

//propriedades para indicar se é a tab selecionada ou não

function Repositories () {

    const {githubState, getUserRepos, getUserStarred} = useGithub ();

    //por default o componente não retorna nada
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

    // useEffect ouve githubState, dupla negação (!!) transforma a informação em boolean
    //se githubState.user.login existir então busca o getUserRepos quando terminar será mostrado as Tabs
    useEffect(() => {

        if(!!githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(!!githubState.repositories);
    }, [getUserRepos, getUserStarred, githubState.repositories, githubState.user.login]);

    //se o hasUserForSearchRepos for 'true' vai ser mostrado os repositorios, senão vai ser mostrado um fragmento vazio.
    return(
        <>

            {hasUserForSearchRepos ? (

                <S.WrapperTabs 
                    selectedTabClassName="is-selected"
                    selectedTabPanelName="is-selected"
                    >
                        <S.WrapperTabList>
                            <S.WrapperTab>Repositories</S.WrapperTab>
                            <S.WrapperTab>Starred</S.WrapperTab>
                        </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList> 

                            {githubState.repositories.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}    
                                /> 
                            ))}

                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList> 

                            {githubState.starred.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}    
                                /> 
                            ))}

                        </S.WrapperList>
                    </S.WrapperTabPanel>

                </S.WrapperTabs>
            ) : 
            (<></>)}
        </>
    )
}

export default Repositories