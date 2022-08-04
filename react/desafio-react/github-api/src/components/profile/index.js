import React from 'react';
// importando tudo do arquivo styled e passando para S, então tduoo que tiver o S. estará vindo do styled component 
import * as S from './styled'

function Profile() {
    return (
        <S.Wrapper>
            
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/80546584?v=4" alt="avatar of user" />

            <S.WrapperInfo>
                <div>
                    <h1>Amanda Souza</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a href='https://github.com/souzaamanda' target='_blank' rel='noreferrer'>souzaamanda</a>
                    </S.WrapperUsername>
                </div>

                <S.WrapperStatusCount>
                    <div>
                    <h4>Followers</h4>
                    <span>10</span>
                    </div>
                    <div>
                    <h4>Starreds</h4>
                    <span>10</span>
                    </div>
                    <div>
                    <h4>Following</h4>
                    <span>10</span>
                    </div>  
                </S.WrapperStatusCount>

            </S.WrapperInfo>
            
        </S.Wrapper>
    );
}

export default Profile;