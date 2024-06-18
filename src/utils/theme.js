  
  const checkbox = document.querySelectorAll('.switch input[type="checkbox"]');

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const checked = checkbox.forEach((check) => check.checked);
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme) || checked) {
      document.documentElement.classList.add("dark");
      checkbox.forEach((check) => (check.checked = true));
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  //manual
  const themeSwitch = () => {
    
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");

      checkbox.forEach((check) => (check.checked = false));
      localStorage.setItem("theme", "light");
      const themeChangeEvent = new Event("themeChange");
      window.dispatchEvent(themeChangeEvent);
      return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    checkbox.forEach((check) => (check.checked = true));
    const themeChangeEvent = new Event("themeChange");
    window.dispatchEvent(themeChangeEvent);
  };

  if (checkbox) {
    checkbox.forEach((check) => check.addEventListener("change", themeSwitch));
   

  }

  themeCheck();
