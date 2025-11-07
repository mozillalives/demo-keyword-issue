When('I add {int} and {int} I should see {int}', (op1, op2, res) => {
  if (op1 + op2 != res) {
    throw new Error('no!');
  }
});

When('I add {int} and {int} I should not see {int}', (op1, op2, res) => {
  if (op1 + op2 == res) {
    throw new Error('no!');
  }
});
