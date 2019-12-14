
async function delay(delayInms) {
      return new Promise(resolve  => {
        setTimeout(() => {
          resolve(2);
        }, delayInms);
      });
    }

async function modalClose(modal){
  modal.style.opacity = "0";
  modal.style.transition = "opacity 0.3s ease-in-out";
  let delayres = await delay(300);
  modal.style.display = "none";
}

async function modalOpen(target){
  // var target = document.getElementById(id)
  target.style.display = "flex";
  target.style.opacity = "1";
  target.firstElementChild.style.animation = "bounceIn 0.4s";
  target.style.transition = "opacity 0.3s ease-in-in";
  let delayres = await delay(300);
}
