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
        loading: false,
        user:{
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
        //montando request / $parametro dinâmico que vem através da função/ prevState pega o estado anterior do useState / user: recebe os dados do useState
        //({data: {user}}) não entendi!
        api.get(`user/${username}`).then( ({data: {user}}) => {
            setGithubState(prevState => ({
                ...prevState,
                user:{
                    login: user.login,
                    name: user.name,
                    html_url: user.html_url,
                    blog: user.blog,
                    company:user.company,
                    location: user.location,
                    followers: user.followers,
                    following: user.following,
                    public_gists: user.public_gists,
                    public_repos: user.public_repos,
            }}))
        })
    }

    //useCallback((username) => getUser(username), []) Não entendi!!
    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return(
       <GithubContext.Provider value={contextValue}>
            {children}
       </GithubContext.Provider>
    )
}

export default GithubProvider;