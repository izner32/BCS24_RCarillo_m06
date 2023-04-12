function gradeEvaluator(grade) {
    switch (true) {
      case grade >= 90:
        return "A";
      case grade >= 80:
        return "B";
      case grade >= 71:
        return "C";
      case grade <= 70:
        return "F";
      default:
        return "Invalid";
    }
}
  
let letterDistinction = gradeEvaluator(85);
console.log(letterDistinction);