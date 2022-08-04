import React from 'react';

import * as S from './styled'

//children vem das propiedades do componente Layout
// criando um Layout que não muda, o conteudo dentro dele que vai ser dinamico

function Layout({children}) {
    return(
        <S.WrapperLayout>
            <header>header</header>
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;