const pow = require('..');

describe('Funkcja pow', () => {
  it('powinna zwracać liczbę', async () => {
    const result = pow(1, 1);

    expect(typeof result).toBe('number');
  });

  it('powinna zwracać prawidłowy wynik', async () => {
    expect(pow(2, 2)).toBe(4);
    expect(pow(3, 3)).toBe(27);
    expect(pow(1, 0.5)).toBe(1);
    expect(pow(10, -2)).toBe(0.01);
    expect(pow(999, 9)).toBe(9.91035916125874e+26);
  });
});
