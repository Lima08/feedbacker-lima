import useStore from '@/hooks/useStore'
import { setCurrentUser } from './user'

describe('UserStore', () => {
  it('Should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'João' })
    expect(store.User.currentUser.name).toBe('João')
  })
})
