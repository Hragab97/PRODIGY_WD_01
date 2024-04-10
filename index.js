var tablinks = document.getElementsByClassName("tab-links");


var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");

}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    loop: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwls1BeJYIZdGlSUFTXIGMQzXrU7JyC-DLCxP8B_O5c2BKjbzT2-Ls7FLtTOU0STpIV/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })