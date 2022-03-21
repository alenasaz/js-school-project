import { useQuery, gql } from '@apollo/client'

const GET_USER_ROLE_BY_NAME = gql`
  query GetUserRoleByName($name: String) {
    users(where: { name: { _eq: $name } }) {
      role
    }
  }
`

export const GetUserRoleByName = (name: string) => {
  const { data, loading, error } = useQuery(GET_USER_ROLE_BY_NAME, {
    variables: { name: name },
  })
  if (loading) {
    return '...loading'
  }
  if (error) {
    console.log(`GetUserRoleByName query error:`, error.message)
  }
  return `Current role: ${data?.users[0]?.role}` || 'роль не определена'
}
