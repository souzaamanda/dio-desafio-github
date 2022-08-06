import React from 'react';
import useGithub from '../../hooks/github-hooks';
// importando tudo do arquivo styled e passando para S, então tduoo que tiver o S. estará vindo do styled component 
import * as S from './styled'

function Profile() {

    const { githubState} = useGithub()
    return (
        <S.Wrapper>
            
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/80546584?v=4" alt="avatar of user" />

            <S.WrapperInfo>
                <div>
                    <h1>{githubState.user.name} </h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>{githubState.user.login}</a>
                    </S.WrapperUsername>
                </div>

                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>  
                </S.WrapperStatusCount>

            </S.WrapperInfo>
            
        </S.Wrapper>
    );
}

export default Profile;