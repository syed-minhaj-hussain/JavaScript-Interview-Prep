//  Event Delegation Can Only Possible With the Help of "Event-Bubling"

const categories = document.querySelector("#categories");

categories.addEventListener("click", (e) => {
  //   e.stopPropagation();
  if (e.target.tagName === "LI") {
    window.location.href = `/${e.target.id}`;
  }
  console.log(`"${e.target.id}" Element Clicked`);
});
