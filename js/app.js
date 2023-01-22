const sections = Array.from(document.querySelectorAll("section"));

const itemsGroup = document.getElementById("navbar__list");

function createListItems(){
    for(let sec of sections)
    {
        let secName = sec.getAttribute("data-nav");
        let link = sec.getAttribute("id");
        let itemLinks = document.createElement("li");
        let sources = document.createElement("a");
        sources.classList.add("menu__link");
        sources.setAttribute("href", `#${link}`);
        sources.textContent = `${secName}`;
        itemLinks.appendChild(sources);
        itemsGroup.appendChild(itemLinks);
        sources.addEventListener("click", function () {
            sources.classList.add("activeLinks");
        });
        sources.onblur = function () {
            sources.classList.remove("activeLinks");
        };
    }
}
createListItems();

const scrollTop = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "Back To Top";
    scrollBtn.setAttribute("class", "scrolltotop");
    let main = document.getElementsByTagName("main");
    main[0].appendChild(scrollBtn);
    const scrollBtnDisplay = function () {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("scrolltotopshow")
        : scrollBtn.classList.remove("scrolltotopshow");
    };
    window.addEventListener("scroll", scrollBtnDisplay);
    const scrollWindow = function () {
      if (window.scrollY !== 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 30);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();

  let secHeaders = document.getElementsByTagName("h2");
  let i;
  for (i = 0; i < secHeaders.length; i++) {
    let secHeader = secHeaders[i];
    secHeader.addEventListener("click", function () {
      this.classList.toggle("active");
      let collapse = this.nextElementSibling;
      if (collapse.style.display === "block") {
        collapse.style.display = "none";
      } else {
        collapse.style.display = "block";
      }
    });
  }
  
  
  window.onscroll = () => {
    document.querySelectorAll("section").forEach((element) => {
      if (
        element.getBoundingClientRect().top >= -400 &&
        element.getBoundingClientRect().top <= 150
      ) {
        element.classList.add("your-active-class");
      } else {
        element.classList.remove("your-active-class");
      }
    });
  };

  const links = document.querySelectorAll(".menu__link");
  links.forEach((ele) => {
    ele.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const anch = this.getAttribute("href");
    const offsetTop = document.querySelector(anch).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  