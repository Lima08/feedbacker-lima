import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators'
// TODO: Fazer testes de todos os validators
describe('Validators utils', () => {
  it('Should return message error when a empty values was given', () => {
    expect(validateEmptyAndLength3()).toBe('* Este campo é obrigatório')
  })

  it('Should return message error when a empty values was given', () => {
    expect(validateEmptyAndEmail()).toBe('* Este campo é obrigatório')
  })
})
