const calc = document.querySelector('.btn');
  const result = document.querySelector('.result');
  const clr = document.querySelector('.clr')

  const amt = document.getElementById('billAmount');
  const tip = document.getElementById('tipPercentage');
  const people = document.getElementById('numPeople');

  calc.addEventListener('click', function (e) {
    e.preventDefault();

    const amt = parseFloat(document.getElementById('billAmount').value);
    const tip = parseFloat(document.getElementById('tipPercentage').value);
    const people = parseInt(document.getElementById('numPeople').value);


    if (!amt || amt <= 0) {
      result.style.display = "block";
      result.innerHTML = `Please enter a valid bill amount.`;
      return;
    }

    if (!tip || tip <= 0) {
      result.style.display = "block";
      result.innerHTML = `Please enter a valid tip percentage.`;
      return;
    }

    if (!people || people <= 0) {
      result.style.display = "block";
      result.innerHTML = `Please enter a valid number of people.`;
      return;
    }

    const tipAmount = (amt * (tip / 100)) / people;
    const totalAmount = (amt / people) + tipAmount;

    result.style.display = "block";
    result.innerHTML = `
      Tip per person: $${tipAmount.toFixed(2)} <br>
      Total per person: $${totalAmount.toFixed(2)}
    `;
  });

  clr.addEventListener('click', function (e) {
    e.preventDefault()
    amt.value = '' 
    tip.value = ''
    people.value = '' 
    result.style.display = "none"
    result.innerHTML = '' 
  })