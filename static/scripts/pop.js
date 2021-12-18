

document.addEventListener('click', (e) => {
  const element = document.getElementById('myBtn');
  
      function Zoom(img, zoom) {
  var img, loupe, width, height, back;
  img = document.getElementById("dinant");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom)) {x = img.width - (width / zoom);}
    if (x < width / zoom) {x = width / zoom;}
    if (y > img.height - (height / zoom)) {y = img.height - (height / zoom);}
    if (y < height / zoom) {y = height / zoom;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom) - width + back) + "px -" + ((y * zoom) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom("dinant", 2);
  console.log(element)

  console.log(e.target.tagName)

  if (e.target && e.target.tagName === 'BUTTON') {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
});