async function GetRecipe(url) {
  let res1 = await fetch(url);
  let res2 = await res1.json();
  console.log("res2:", res2);

  //DisplayRecipe(res2);
  return res2;
}

async function DisplayRecipe(meals, parent) {
  meals = await meals;
  // console.log("meals:", meals);
  if (
    //meals.meals.length == 0 ||
    meals.meals == null ||
    meals.meals == undefined
  ) {
    let img = document.createElement("img");
    img.style.width = "300px";
    parent.style.alignItems = "center";
    img.style.marginTop = "5%";
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    img.src =
      "https://i.pinimg.com/originals/72/9b/17/729b174fb8d50fce2c76e2dcc4aa14e4.gif";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.style.marginTop = "5%";
    p2.style.marginTop = "2%";
    p1.style.color = "white";
    p2.style.color = "white";
    p1.innerHTML = "Uh Oh! We're yet cooking, and tasting the dish.";
    p2.innerHTML = "Please revisit after sometime.";
    parent.append(img, p1, p2);
    return 1;
  }
  meals.meals.forEach((recipe) => {
    let p_name_label = document.createElement("p");
    p_name_label.innerText = "Name of the Dish: ";
    p_name_label.setAttribute("class", "white-text");

    let p_name_value = document.createElement("p");
    p_name_value.innerText = recipe.strMeal;

    let p_name = document.createElement("p");
    p_name.innerHTML = p_name_label.innerHTML + p_name_value.innerHTML;

    let p_category_label = document.createElement("p");
    p_category_label.innerText = "Category of the Dish: ";
    p_category_label.setAttribute("class", "white-text");

    let p_category_value = document.createElement("p");
    p_category_value.innerText = recipe.strCategory;

    let p_category = document.createElement("p");
    p_category.innerHTML =
      p_category_label.innerHTML + p_category_value.innerHTML;

    let p_instructions_label = document.createElement("p");
    p_instructions_label.innerText = "Cooking Instructions:";
    p_instructions_label.setAttribute("class", "white-text");

    let p_instructions = document.createElement("p");
    p_instructions.innerText = recipe.strInstructions;
    p_instructions.style.display = "list-item";
    p_instructions.style.listStyle = "outside";

    let img = document.createElement("img");
    img.src = recipe.strMealThumb;

    let videodiv = document.createElement("div");
    videodiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${recipe.strYoutube
      .split("")
      .slice(-11, recipe.strYoutube.length)
      .join(
        ""
      )}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let div = document.createElement("div");
    div.append(
      img,
      p_name,
      p_category,
      p_instructions_label,
      p_instructions,
      videodiv
    );
    parent.append(div);
  });
}

function ThrottleFunction() {
  let timerId;

  if (timerId) {
    return false;
  }
  console.log("timerId:", timerId);
  let displaydiv = document.createElement("div");
  displaydiv.innerHTML = null;
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 1000);
}

async function main() {
  let input = document.getElementById("inputfood");
  let displaydiv = document.createElement("div");
  // console.log("TEST");
  let result = await GetRecipe(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
  );
  input.addEventListener("keypress", (event) => {
    if (event.code == "Enter") {
      DisplayRecipe(result, displaydiv);
      displaydiv.style.visibility = "visible";
    }

    // input.value = "";
  });
}

export { GetRecipe, DisplayRecipe, ThrottleFunction };
