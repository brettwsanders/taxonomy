var Bee = function(age) {
  if (age === undefined) {
    age = 5;
  }
  Grub.call(this, age);

  // this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

