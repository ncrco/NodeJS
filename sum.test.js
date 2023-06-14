// Importe a função ou o código que você deseja testar
const { idadeMenorQue18 } = require('./sum.js');

// Descreva o teste
describe('Teste de idade menor que 18', () => {
  // Caso de teste: idade menor que 18
  it('Deve retornar true para idade menor que 18', () => {
    const idade = 16;
    const resultado = idadeMenorQue18(idade);
    expect(resultado).toBe(true);
  });

  // Caso de teste: idade igual a 18
  it('Deve retornar false para idade igual a 18', () => {
    const idade = 18;
    const resultado = idadeMenorQue18(idade);
    expect(resultado).toBe(false);
  });

  // Caso de teste: idade maior que 18
  it('Deve retornar false para idade maior que 18', () => {
    const idade = 21;
    const resultado = idadeMenorQue18(idade);
    expect(resultado).toBe(false);
  });
});
