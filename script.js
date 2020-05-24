function readDb() {
    fetch('db.txt')
    .then(response => response.text())
    .then(text => document.getElementById("dbOutput").innerHTML = text)
  }
  function fetchGoolgeTranslate() {
      fetch('https://translate.google.com/#view=home&op=translate&sl=en&tl=sm&text=hello', {mode: 'cors'})
      .then(response => response.text())
      .then(text => {
              document.getElementById("samoan").innerHTML = text;
              console.log(text);
          })
          .catch(function(error) {
              console.log('Request failed ', error);
          });	
  }