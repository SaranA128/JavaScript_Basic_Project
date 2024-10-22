function getStudentInfo() {
    const rollNumber = document.getElementById("roll-number").value;
    let yearOfStudy, branch;
  
    if (rollNumber.startsWith("ES19")) {
      yearOfStudy = "Final Year";
    } else if (rollNumber.startsWith("ES20")) {
      yearOfStudy = "Third Year";
    } else {
      yearOfStudy = "Invalid Roll Number";
    }
  
    if (rollNumber.endsWith("CS01")) {
      branch = "CSE";
    } else if (rollNumber.endsWith("EC12")) {
      branch = "ECE";
    } else {
      branch = "Invalid Branch";
    }
  
    document.getElementById("result").innerHTML = `Year of Study: ${yearOfStudy}<br>Branch: ${branch}`;
  }