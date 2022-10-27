function add(a, b) {
  return a + b;
}

function multiply(c, b) {
  let multiplicacao = c;
  for (let i = 1; i < b; i++) {
    multiplicacao = add(multiplicacao, c);
  }
  return multiplicacao;
}

function power(x, n) {
  let potencia = x;
  for (let i = 1; i < n; i++) {
    potencia = multiply(potencia, n);
  }
  return potencia;
}

function factorial(v) {
  let fatorial = 1;
  for (let i = v; i >= 1; i--) {
    fatorial = multiply(fatorial, i);
  }
  return fatorial;
}
