/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle_Id = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle_Id.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle_Id.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
