export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', { email, password })
    let error = null

    console.log('🚀 ~ file: auth.js:11 ~ login: ~ response.data:', response)
    if (!response.data) {
      error = {
        status: response.request.status,
        statusText: response.request.statusText,
      }
    }

    return {
      data: response.data,
      error,
    }
  },
})
