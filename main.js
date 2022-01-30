let grade = {
  AA: 4,
  BA: 3.5,
  BB: 3,
  CB: 2.5,
  CC: 2,
  DC: 1.5,
  DD: 1,
  FF: 0,
}

let btn = document.querySelector('.btn')
let ortalama = document.querySelector('.ortalama')

let subjectKredi = document.querySelectorAll('.subject-kredi')
let subjectGrade = document.querySelectorAll('.subject-grade')
let subjectResult = document.querySelectorAll('.subject-result')

btn.addEventListener("click", () => {
  let krediSum = 0
  let gradeSum = 0


  for (let i = 0; i < subjectKredi.length; i++) {
    if (!subjectGrade[i].value) {
      alert('выберите оценку!')
      return
    }
  }
  for (let i = 0; i < subjectKredi.length; i++) {

    subjectResult[i].innerHTML = subjectKredi[i].value * grade[subjectGrade[i].value]

    krediSum += Number(subjectKredi[i].value)
    gradeSum += Number(subjectResult[i].innerHTML)
  }
  ortalama.innerHTML = Math.round((gradeSum / krediSum) * 100) / 100

});
