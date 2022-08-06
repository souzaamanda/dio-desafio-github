import React from 'react';
import Header from '../header';

import * as S from './styled'

//children vem das propiedades do componente Layout
// criando um Layout que não muda, o conteudo dentro dele que vai ser dinamico

function Layout({children}) {
    return(
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;