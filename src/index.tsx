import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://js-school-statement.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
})

const USERS_NAME = gql`
  query GetUsersName {
    users {
      name
    }
  }
`

function ExchangeUsers() {
  const { loading, error, data } = useQuery(USERS_NAME)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.users.map((item: { name: string }) => (
    <div>
      <p>имя: {item?.name}</p>
    </div>
  ))
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
)
