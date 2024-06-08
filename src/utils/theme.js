window.onload = function () {
  const checkbox = document.querySelector('.switch input[type="checkbox"]');
  console.log("Checkbox:", checkbox);

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeCheck = () => {
    // checkbox.checked = true;
    if (
      userTheme === "dark" ||
      (!userTheme && systemTheme) ||
      checkbox.checked
    ) {
      document.documentElement.classList.add("dark");
      checkbox.checked = true;
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    console.log(localStorage.getItem("theme"));
  };

  //manual
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");

      checkbox.checked = false;
      localStorage.setItem("theme", "light");
      console.log("manual" + localStorage.getItem("theme"));
      return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    checkbox.checked = true;

    console.log(localStorage.getItem("theme"));
  };

  if (checkbox) {
    checkbox.addEventListener("change", themeSwitch);
  }

  themeCheck();
};
