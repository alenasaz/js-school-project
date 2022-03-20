import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdminLoginPage } from './components/AdminLoginPage/AdminLoginPage'
import { AdminPage } from './components/AdminPage/AdminPage'
import StudentPage from './components/StudentPage/StudentPage'
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://js-school-statement.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-access-key': `ep7YkQEoJCY2fYGhIiyZGiJBRr4at9RL8UQdE4KFUSQYWFnYWdZtX2v7UlAOWKQq`,
  },
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

const App = () => {
  return (
    <div className="App">
      <ExchangeUsers />
      <Routes>
        <Route path="/" element={<div>Ведомость школы JS</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route
          path="/admin-login"
          element={
            <div>
              <AdminLoginPage />
            </div>
          }
        />
        <Route path="/student" element={<StudentPage />} />
        <Route
          path="/admin"
          element={
            <div>
              <AdminPage isAdmin />
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
