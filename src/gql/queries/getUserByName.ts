import { useQuery, gql } from '@apollo/client'

const GET_USER_ROLE_BY_NAME = gql`
  query GetUserRoleByName($name: String) {
    users(where: { name: { _eq: $name } }) {
      role
    }
  }
`

export const GetUserRoleByName = (name: string) => {
  const { data } = useQuery(GET_USER_ROLE_BY_NAME, {
    variables: { name: name },
  })
  return data?.users[0]?.role || 'роль не определена'
}
