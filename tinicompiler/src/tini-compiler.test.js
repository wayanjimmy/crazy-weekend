const { tokenizer, parser } = require('./tini-compiler')

const input = '(add 2 (subtract 4 2))'

const tokens = [
  { type: 'paren', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'paren', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'paren', value: ')' },
  { type: 'paren', value: ')' }
]

const ast = {
  type: 'Program',
  body: [
    {
      type: 'CallExpression',
      name: 'add',
      params: [
        {
          type: 'NumberLiteral',
          value: '2'
        },
        {
          type: 'CallExpression',
          name: 'subtract',
          params: [
            {
              type: 'NumberLiteral',
              value: '4'
            },
            {
              type: 'NumberLiteral',
              value: '2'
            }
          ]
        }
      ]
    }
  ]
}

it('tokenizer', () => {
  expect(tokenizer(input)).toEqual(tokens)
})

it('ast', () => {
  expect(parser(tokenizer(input))).toEqual(ast)
})
