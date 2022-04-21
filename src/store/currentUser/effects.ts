import { domain } from '../domain'
import { GET_CURRENT_USER_BY_NICKNAME } from '../../gql/queries'
import { useQuery } from '@apollo/client'
import { currentUser } from './interfaces'
import { setUserIsLoadingEvent } from './events'

const fetchCurrentUserByNickname = async (
  nickname: string,
): Promise<currentUser> => {
  const { data, loading, error } = await useQuery(
    GET_CURRENT_USER_BY_NICKNAME,
    {
      query: GET_CURRENT_USER_BY_NICKNAME,
      variables: { nickname: nickname },
    },
  )
  if (loading) {
    setUserIsLoadingEvent(true)
  }
  if (!error) {
    return data?.users_003[0]
  }
  throw error
}

export const setCurrentUserFx = domain.createEffect(fetchCurrentUserByNickname)
