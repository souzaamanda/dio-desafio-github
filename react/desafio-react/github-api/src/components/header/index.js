import React, { useState } from "react";
import * as S from './styled';
import useGithub from '../../hooks/github-hooks'

function Header () {
    // renderizando os dados do usuário que esta sendo pesquisado
    const { getUser} = useGithub();

    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if(!usernameForSearch){
            return
        }else {
            return getUser(usernameForSearch)
        }
    }

    return (
        <header>
            <S.Wrapper>
                <input type='text' placeholder="digite aqui" onChange={(event) => setUsernameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>Buscar</button>
            </S.Wrapper>

        </header>
    )
}

export default Header