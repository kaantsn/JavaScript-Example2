var Student = {
  init: function(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  },
  introduce: function() {
    console.log("Merhaba, ben " + this.name + ". " + this.age + " yaşındayım ve " + this.grade + ". sınıfa gidiyorum.");
  },
  study: function() {
    console.log(this.name + " ders çalışıyor...");
  }
};

var student1 = Object.create(Student);
student1.init("Ahmet", 15, 9);

var student2 = Object.create(Student);
student2.init("Ayşe", 14, 8);

student1.introduce();
student1.study();

student2.introduce();
student2.study();
