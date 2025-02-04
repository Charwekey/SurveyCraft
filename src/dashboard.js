

            document.addEventListener("DOMContentLoaded", function () {
              let storedName = localStorage.getItem("username");

              if (storedName) {
                document.getElementById(
                  "welcomeMessage"
                ).innerText = `🎉 Welcome, ${storedName}! Your account has been created successfully. Start creating surveys now!🚀`;
              } else {
                document.getElementById("welcomeMessage").innerText =
                  "🎉 Welcome to your dashboard!";
              }
            });

            document.querySelectorAll(".faq-question").forEach((button) => {
              button.addEventListener("click", () => {
                const answer = button.nextElementSibling;
                answer.style.display =
                  answer.style.display === "block" ? "none" : "block";
              });
            });