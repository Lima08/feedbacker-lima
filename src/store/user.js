import { reactive } from 'vue'

const state = reactive({
  currentUser: {},
})

export default state

export function clearCurrentUser() {
  state.currentUser = {}
}

export function setCurrentUser(currentUser) {
  state.currentUser = currentUser
}

export function setApiKey(apiKey) {
  state.currentUser = { ...currentUser, apiKey }
}
