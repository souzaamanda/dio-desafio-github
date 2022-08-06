import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
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
        <NoSearch />       
      }     
    </Layout>
  );
}

export default App;
