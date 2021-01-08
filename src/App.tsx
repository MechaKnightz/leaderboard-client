import Pages from './containers/index'
import { IdToken, useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  createHttpLink,
  ApolloLink
} from '@apollo/client';
import { cache } from './cache';
import { setContext } from '@apollo/client/link/context';
import 'fontsource-roboto';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

function App() {

  const { getIdTokenClaims } = useAuth0();

  // let token: string
  // const contextLink = setContext(async () => {
  //   if (!token) {
  //     //token = (await getIdTokenClaims()).__raw
  //     token = (await getIdTokenClaims()).__raw;
  //   }

  //   return { token }
  // });

  const contextLink = setContext(
    request =>
      new Promise((success, fail) => {
        
        getIdTokenClaims().then((res) => {
          if(res) {
            success({headers: {
              authorization: res.__raw
            }});
          }
          success(null);
        })
        setTimeout(() => {
          fail("timeout");
        }, 10);
      })
  );

  // Initialize ApolloClient
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: ApolloLink.from([
      contextLink,
      httpLink
    ]),
    //remove in production
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <Pages></Pages>
    </ApolloProvider>

  );
}

export default App;
