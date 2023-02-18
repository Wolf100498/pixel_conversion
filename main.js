


function converter() {
  let unit = document.getElementById('unit').value;
  let givenUnit = document.getElementById('given-unit').value;
  let given = document.getElementById('given').value;

  if (givenUnit == 'pixel') {
    if (document.getElementById('result-unit').value == 'pixel') {
      let active2 = document.querySelector('.root-label');
      active2.classList.remove('active');

      let active1 = document.querySelector('.parent-label');
      active1.classList.remove('active');

      let total = given * 1;
      document.getElementById('result').value = total;

    }
    else if (document.getElementById('result-unit').value == 'points'){
      let active2 = document.querySelector('.root-label');
      active2.classList.remove('active');

      let active1 = document.querySelector('.parent-label');
      active1.classList.remove('active');
      

      let total = given * 0.75;
      document.getElementById('result').value = total;
    }
    else if (document.getElementById('result-unit').value == 'ems'){
      let active1 = document.querySelector('.parent-label');
      active1.classList.add('active');
      let active2 = document.querySelector('.root-label');
      active2.classList.remove('active');

      let resultEm = 1 / document.getElementById('parent').value;

      let total = given * resultEm;
      document.getElementById('result').value = total;
    }
    else if (document.getElementById('result-unit').value == 'rems'){
      let active1 = document.querySelector('.parent-label');
      active1.classList.remove('active');
      let active2 = document.querySelector('.root-label');
      active2.classList.add('active');

      let resultRem = 1 / document.getElementById('root').value;


      let total = resultRem * given;
      document.getElementById('result').value = total;
    }
  }
}

