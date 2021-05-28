document.addEventListener('DOMContentLoaded', function (event) {
  const accordionHeader = document.querySelectorAll('.accordion_header');
  console.log(accordionHeader[0]);
  for (let i = 0; i < accordionHeader.length; i++) {
    let accordionItem = [];
    accordionItem[i] = accordionHeader[i].closest('.accordion_item');
    accordionHeader[i].addEventListener('click', function () {
      if (accordionItem[i].classList.contains('active')) {
        accordionItem[i].classList.remove('active');
      } else {
        for (let j = 0; j < accordionHeader.length; j++) {
          accordionItem[j] = accordionHeader[j].closest('.accordion_item');
          accordionItem[j].classList.remove('active');
        }
        accordionItem[i].classList.add('active');
      }
    });
  }
});
