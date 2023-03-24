import { shallowMount } from '@vue/test-utils'
import Home from '.'
import router from '../../router'


describe('', () => {
  it('Home', async () => {
    router.push('/')
    await router.isReady()
    // Info: Poderia ser o Mount, porem esse renderizaria os outros componentes de Home (ex: header)
    const wrapper = shallowMount(Home, { global: { plugins: [router] } })

    //  Info: Para gerar novamente o snapshot utilizar test:unit -- -u
    //  O primeiro -- escapa o comando npm e passa para o comando do jest acionado
    expect(wrapper.html()).toMatchSnapshot()
  })
})
