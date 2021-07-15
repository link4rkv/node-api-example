const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/str-structure/', (req, res) => {
  const { str } = req.query;

  if (!str) return res.send("No string found");
  
  const str_array = str.toString().split('');

  let result = {
    'vowels': 0,
    'consonants': 0,
    'spaces': 0,
    'numbers': 0
  } 

  const vowels = ['a', 'e', 'i', 'o', 'u']
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  for (const i in str_array) {
    if (str_array[i] === ' ') {
      result.spaces++;
    } else if (parseInt(str_array[i])) {
      result.numbers++;
    } else if (vowels.includes(str_array[i])) {
      result.vowels++;
    } else if (consonants.includes(str_array[i])) {
      result.consonants++;
    }
  }

  res.send(result)
})

app.get('/reverse-string', (req, res) => {
  const { str } = req.query;
  
  if (!str) return res.send("No string found");

  const result = {
    'actual string': str.toString(),
    'reversed string': str.toString().split('').reverse().join('')
  }

  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})