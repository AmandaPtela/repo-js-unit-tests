/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
// Feito com ajuda do colega Tassio Henrique da turma 19B e de colegas da turma 21A
describe('4 - Implemente os casos de teste para a função `circle`', () => {

  it("4.1 - Verifica se a função retorne 'undefined' caso o parâmetro não seja um número", () => {
    expect(circle('2')).toBeUndefined();
    expect(typeof circle(4)).toEqual('object');
    expect(Object.keys(circle(6)).length).toBe(3);
    expect(circle('')).toBeUndefined();
    expect((circle(2).circumference)).toBe(circle(2).circumference);
    expect((circle(3).area)).toBe(circle(3).area);
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
  })
});
