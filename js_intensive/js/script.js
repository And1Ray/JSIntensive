function myApp(name, age) {
  alert(`Привет, меня зовут ${name} и это не первая моя программа!`);

  function showSlills() {
    let skills = [];
    document.write(`Я владею: <br>`);
    for (let i = 0; i < 5; i++) {
      skills[i] = prompt('Введите свои навыки(до 5ти)');
      document.write(`${skills[i]} <br>`);
    }
  }
  showSlills();

  function checkAge() {
    if (age > 18) {
      alert('Вы можете быть разработчиком после 18ти');
    } else {
      alert('Вы можете быть разработчиком до 18ти');
    }
  }
  checkAge();

}

myApp(prompt('Ваше имя?'), prompt('Ваш возраст?'));