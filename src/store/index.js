import { readonly } from 'vue'
import GlobalModule from '@/store/global'
import UserModule from '@/store/user'

export default readonly({
  Global: GlobalModule,
  User: UserModule,
})
