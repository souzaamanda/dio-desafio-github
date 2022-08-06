import React from 'react';
import useGithub from '../../hooks/github-hooks';
// importando tudo do arquivo styled e passando para S, então tduoo que tiver o S. estará vindo do styled component 
import * as S from './styled'

function Profile() {

    const { githubState} = useGithub();

    //useEffect para ouvir o githubState, toda vez que atualizar o user ele vai mostrar no console o que esta acontecendo.
    /* useEffect(() =>{
        console.log(githubState.user);
    }, [githubState.user]); */

    return (
        <S.Wrapper>
            
            <S.WrapperImg src={githubState.user.avatar} alt="avatar of user" />

            <S.WrapperInfo>
                <div>
                    <h1>{githubState.user.name} </h1>

                    <S.WrapperUserGeneric>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>{githubState.user.login}</a>
                    </S.WrapperUserGeneric>

                    <S.WrapperUserGeneric>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperUserGeneric>

                    <S.WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} target='_blank' rel='noreferrer'>{githubState.user.blog}</a>
                    </S.WrapperUserGeneric>
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
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>  
                </S.WrapperStatusCount>

            </S.WrapperInfo>
            
        </S.Wrapper>
    );
}

export default Profile;