
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Login successful!");
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("username", username);
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }

 
    const loginLink = document.getElementById("login-link");
    if (loginLink && localStorage.getItem("loggedIn") === "true") {
        loginLink.textContent = "Logout";
        loginLink.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    
    loginForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
    
    const loginLink = document.getElementById("login-link");
    if (localStorage.getItem("loggedIn") === "true") {
        loginLink.textContent = "Logout";
        loginLink.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html";
        });
    }
});
