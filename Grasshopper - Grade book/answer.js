function getGrade(s1, s2, s3) {
    let grade = '';
    let sum = s1 + s2 + s3;
    let average = sum / 3;
  
    if (average >= 90 && average <= 100) {
      grade = 'A';
    } else if (average >= 80 && average < 90) {
      grade = 'B';
    } else if (average >= 70 && average < 80) {
      grade = 'C';
    } else if (average >= 60 && average < 70) {
      grade = 'D';
    } else if (average >= 0 && average < 60) {
      grade = 'F';
    }
    
    return grade;
  }