function calculate(){
  input = prompt("Enter numbers to calculate separated by respective operators:");
  add = function() {
    numbers = input.split('+');
    numbers.map(function(number){
      answer = 0;
      answer += number;
      console.log(answer);
    });
  };


}
