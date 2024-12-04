function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
if (this.marks) {
    this.marks.push(...marksToAdd)
}
   return 0
}

Student.prototype.getAverage = function(averageVelue) {
    this.average = averageVelue;

    if (this.marks && this.marks.length !== 0) {
      return this.marks.reduce((acc, velue) => acc + velue, 0) / this.marks.length

    } else {

      return 0
    }
  }

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  
}
