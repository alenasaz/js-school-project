import { domain } from '../domain'
import { GET_CURRENT_USER_BY_NICKNAME } from 'src/gql/queries'
import { useQuery } from '@apollo/client'
import { currentUser } from './interfaces'

// const fetchCurrentUserByNickname = async (
//   nickname: string,
// ): Promise<currentUser> => {
//   const { data, loading, error } = await useQuery(
//     GET_CURRENT_USER_BY_NICKNAME,
//     {
//       query: GET_CURRENT_USER_BY_NICKNAME,
//       variables: { nickname: nickname },
//     },
//   )
//   if (loading) {
//     //TODO: Добавить идентификатор загрузки
//     console.log('loading...')
//   }
//   if (error) {
//     console.log(`GetCurrentUserByNickname query error:`, error.message)
//   }
//   return data
// }

export const setCurrentUserFx = domain.createEffect((nickname: string) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER_BY_NICKNAME, {
    variables: { nickname: nickname },
  })
  if (loading) {
    console.log('loading...')
  }
  if (!error) {
    return data?.users_003[0]
  }

  throw error
})
