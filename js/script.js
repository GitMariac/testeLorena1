document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    
    document.querySelectorAll("footer ul li a").forEach(contactLink => {
        contactLink.addEventListener("click", function () {
            alert("Redirecionando para contato...");
        });
    });
});
