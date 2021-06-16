let enterNumberN = null;
do { enterNumberN = +prompt('Введіть число N', 1);
     console.log('enterNumberN',enterNumberN);
}
while (!Number.isInteger(enterNumberN) || isNaN(enterNumberN));

let enterNumberM = null;
do { enterNumberM = +prompt('Введіть число M', 10)
     console.log('enterNumberM',enterNumberM)
}
while (!Number.isInteger(enterNumberM) || isNaN(enterNumberM));

  const result = confirm('Чи потрібно пропускати парні числа?');

  let sumNumbersNAndM = 0;
  for(let i = enterNumberN; i <= enterNumberM; i++){
    if (result && i % 2 === 0){
      continue
    }
    sumNumbersNAndM += i;
  }
  document.writeln(`Сума від N до M: ${sumNumbersNAndM}`);

