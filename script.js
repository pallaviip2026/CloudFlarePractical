function showSection(section) {
    const title = document.getElementById("title");
    const content = document.getElementById("sectionContent");
  
    if (section === "home") {
      title.textContent = "Home";
      content.textContent = "Welcome to the dashboard 👋";
    }
  
    if (section === "orders") {
      title.textContent = "Orders";
      content.textContent = "Here you can manage orders.";
    }
  
    if (section === "products") {
      title.textContent = "Products";
      content.textContent = "Manage your product list here.";
    }
  
    if (section === "users") {
      title.textContent = "Users";
      content.textContent = "User management section.";
    }
  
    if (section === "settings") {
      title.textContent = "Settings";
      content.textContent = "Dashboard settings.";
    }
  }
  