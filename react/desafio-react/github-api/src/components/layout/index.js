import React from 'react';

//children vem das propiedades do componente Layout
// criando um Layout que não muda, o conteudo dentro dele que vai ser dinamico

function Layout({children}) {
    return(
        <section>
            <header>header</header>
            {children}
        </section>
    );
}

export default Layout;