import { useQuery, gql } from '@apollo/client'

const GET_USER_NAME_BY_ID = gql`
  query GetUserRoleByName($id: Int) {
    users_003(where: { id: { _eq: $id } }) {
      name
    }
  }
`

export const GetUserNameById = (id: number) => {
  const { data, loading, error } = useQuery(GET_USER_NAME_BY_ID, {
    variables: { id: id },
  })
  if (loading) {
    return '...loading'
  }
  if (error) {
    console.log(`GetUserNameById query error:`, error.message)
  }
  return (
    `Current user name: ${data?.users_003[0]?.name}` || 'роль не определена'
  )
}
