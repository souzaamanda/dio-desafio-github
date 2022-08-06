import React, { createContext, useCallback, useState } from 'react';
import api from '../service/api';

export const GithubContext = createContext ({
    loading: false,
    user:{},
    repositories: [],
    starred:[],
})

function GithubProvider({children}) {

    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user:{
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company:undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred:[],
    });

    //criando função que vai consumir API
    const getUser = (username) => {

        //quando iniciar a requisição será alterado o valor de loading para 'true'
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        //montando request / $parametro dinâmico que vem através da função/ prevState pega o estado anterior do useState / user: recebe os dados do useState
        api.get(`users/${username}`).then( ({data}) => {

            //console.log(data);

            setGithubState(prevState => ({
                ...prevState,
                hasUser: true,
                user:{
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
            }}))
        }).finally(() =>{ //loading voltando para 'false' quando finalizar
            setGithubState((prevState) =>({
                ...prevState,
                loading: !prevState.loading,
            }))
        })
    };


    //buscando os repositórios do usuario através da API
    const getUserRepos = (username) => {
        
        api.get(`users/${username}/repos`).then(({ data }) => {
          
            console.log("data: " + JSON.stringify(data));
          
          setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
          }));
        });
      };


    //buscando os starred do usuario através da API
    const getUserStarred = (username) => {
        
        api.get(`users/${username}/starred`).then(({ data }) => {
          
            console.log("data: " + JSON.stringify(data));
          
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      };



    //useCallback((username) => getUser(username), []) Não entendi!!
    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    }

    return(
       <GithubContext.Provider value={contextValue}>
            {children}
       </GithubContext.Provider>
    )
}

export default GithubProvider;