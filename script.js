document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");

    // Add CSS via JS without changing layout
    const style = document.createElement("style");
    style.innerHTML = `
        .h1-effect {
            animation: fadeIn 1s ease-out;
            transition: 0.3s ease;
        }
        .h1-effect:hover {
            transform: scale(1.05);
            text-shadow: 0 0 12px rgba(0, 150, 255, 0.6);
        }

        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Apply effect class
    h1.classList.add("h1-effect");
});
