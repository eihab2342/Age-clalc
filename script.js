function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  // التحقق من أن جميع الحقول ممتلئة
  if (day === "" || month === "" || year === "") {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // تحويل القيم إلى أرقام صحيحة
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  if (month < 1 || month > 12) {
    document.getElementById("result").innerHTML =
          "Please enter a valid month (between 1 and 12)";
      return;
  }
  if (day < 1 || day > 31) {
    document.getElementById("result").innerHTML =
          "Please enter a valid day (between 1 and 31)";
      return;
  }

//   // التحقق من صحة القيم المدخلة
//   if (isNaN(day) || isNaN(month) || isNaN(year)) {
//     alert("يرجى إدخال قيم صحيحة");
//     return;
//   }
  // إنشاء كائنات التاريخ
  let today = new Date();
  let birthDate = new Date(year, month - 1, day);

  // التحقق من أن تاريخ الميلاد ليس في المستقبل
  if (birthDate > today) {
    alert("تاريخ الميلاد لا يمكن أن يكون في المستقبل");
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerHTML = "عمرك هو: " + age + " سنة";
}
