var Grub = function(age) {
  if (age === undefined) {
    this.age = 0;
  } else {
    this.age = age;
  }
    this.color = 'pink';
    this.food = 'jelly';
};

Grub.prototype.eat = function() {
    console.log('yummmmm');
};

