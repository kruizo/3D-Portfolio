window.onload = function () {
  const checkbox = document.querySelectorAll('.switch input[type="checkbox"]');
  console.log("Checkbox:", checkbox);

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const checked = checkbox.forEach((check) => check.checked);
  const themeCheck = () => {
    // checkbox.checked = true;
    if (userTheme === "dark" || (!userTheme && systemTheme) || checked) {
      document.documentElement.classList.add("dark");
      checkbox.forEach((check) => (check.checked = true));
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

      checkbox.forEach((check) => (check.checked = false));
      localStorage.setItem("theme", "light");
      console.log("manual" + localStorage.getItem("theme"));
      return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    checkbox.forEach((check) => (check.checked = true));

    console.log(localStorage.getItem("theme"));
  };

  if (checkbox) {
    checkbox.forEach((check) => check.addEventListener("change", themeSwitch));
  }

  themeCheck();
};
