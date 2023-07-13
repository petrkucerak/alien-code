// TODO: specify solution
const solution = "123456789012345678901";

function renderPage() {
  const elements = document.getElementsByTagName("input");
  let string = "";
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].value === "") string += " ";
    else string += elements[i].value.toUpperCase();
  }
  if (solution === string) window.open("/story.html");
}
