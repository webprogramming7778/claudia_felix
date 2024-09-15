document.addEventListener("DOMContentLoaded", function () {
  // showing password
  const passwordWrappers = document.querySelectorAll(".password-wrapper");

  if (passwordWrappers.length > 0) {
    passwordWrappers.forEach((passwordWrapper) => {
      const passwordInput = passwordWrapper.querySelector(
        "input[type='password']"
      );
      const passBtn = passwordWrapper.querySelector('button[type="button"]');
      passBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      });
    });
  }

  const resetButton = document.getElementById("reset-password-btn");
  const exampleModal2 = document.getElementById("exampleModal2");

  // Check if the modal exists in the DOM
  if (resetButton && exampleModal2) {
    resetButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      const newPassword = document.getElementById("new-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (newPassword === "" || confirmPassword === "") {
        alert("Please fill out both fields.");
        resetButton.setAttribute("data-bs-target", "#exampleModal22"); // Set to incorrect modal
      } else if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        resetButton.setAttribute("data-bs-target", "#exampleModal22"); // Set to incorrect modal
      } else {
        // If both fields are filled and passwords match
        resetButton.setAttribute("data-bs-target", "#exampleModal2"); // Set to correct modal

        // Trigger the modal manually
        const successModal = new bootstrap.Modal(exampleModal2);
        successModal.show();
      }
    });
  }

  // Owl Carousel
  const signOwlCarousel = $(".sign-owl-carousel");

  if (signOwlCarousel) {
    $(".sign-owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  // easepick for table range date picker
  const dateInput = document.querySelector(".date-input")
  if(dateInput && easepick){
    const today = new Date();
  
    const tenDaysLater = new Date(today);
    tenDaysLater.setDate(today.getDate() + 10);
    
    function formatDate(date) {
      return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
    }
    
    const picker = new easepick.create({
      element: dateInput,
      css: ["./assets/css/plugins/easepick1.2.1.css"],
      plugins: ["RangePlugin"],
      format: "MMM DD",
    });

    dateInput.value = `${formatDate(today)} - ${formatDate(tenDaysLater)}`;
  }

  const bookingDate = document.getElementById("booking-date")
  if(bookingDate && easepick){
    const picker = new easepick.create({
      element: bookingDate,
      css: ["./assets/css/plugins/easepick1.2.1.css"],
      plugins: [],
      inline: true,
      setup(picker) {
        picker.on('select', (e) => {
          console.log(e.detail.date);
        });
      },
    });
  }

  // table select
  const tables = document.querySelectorAll("table.table");

  if (tables) {
    tables.forEach((table) => {
      const headerCheckbox = table.querySelector(
        "label.table-header-checkbox input[type='checkbox']"
      );

      if (headerCheckbox) {
        const rowCheckboxs = table.querySelectorAll(
          "tbody label.table-checkbox-container input[type='checkbox']"
        );

        headerCheckbox.addEventListener("change", function () {
          rowCheckboxs.forEach((ele) => {
            if (ele.checked) {
              ele.checked = false;
            } else {
              ele.checked = true;
            }
          });
        });
      }
    });
  }

  $(".select").niceSelect();
});
