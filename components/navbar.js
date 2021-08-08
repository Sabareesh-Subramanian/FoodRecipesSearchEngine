function navbar() {
  return `<div id="navbar">
        <div id="logodetails">
            <a href="./home.html"><img src="https://www.themealdb.com/images/icons/favicon/apple-touch-icon.png" alt="Logo"></a>
            <div>
                <a href="./home.html"><h1>Cook</h1></a>
                <a href="./home.html"><h4>With Chef</h4></a>
            </div>
        </div>
        <input type="text" name="" id="inputfood" placeholder="Search your Favorite Recipe here!">
        <div id="features">
            <a href="./searchByName.html"><p >Search By Recipe</p></a>
            <a href="./random.html"><p>New Day, New Food</p></a>
            <a href="./latest.html"><p>Latest recipes</p></a>
        </div>

        
    </div>
    `;
}

export default navbar;
