import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from './hooks/github-hooks';

function App() {

  const { githubState} = useGithub();

  //se githubState.loading for 'true' mostra uma tela, senão mostra o profile e repositories
  return (
    <Layout>
      {githubState.hasUser ? 
        <>
          {githubState.loading ? 
            (<p>LOADING</p>) : 
            (<>
              <Profile />
              <Repositories />       
            </>)
          }
        </> :
        <div>PESQUISA NÃO REALIZADA</div>        
      }     
    </Layout>
  );
}

export default App;
