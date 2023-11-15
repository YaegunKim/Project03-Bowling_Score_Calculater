function createScoreSelects() {
  const selectOptions = [
      { value: "NA", text: "" },
      { value: "0", text: "-" },
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" },
      { value: "4", text: "4" },
      { value: "5", text: "5" },
      { value: "6", text: "6" },
      { value: "7", text: "7" },
      { value: "8", text: "8" },      
      { value: "9", text: "9" },
      { value: "X", text: "X" },
      { value: "/", text: "/" }
  ];

  for (let i = 1; i <= 21; i++) {
      let select = document.createElement("select");
      select.id = `Score${i}`;
      select.className = i % 2 === 0 ? "Even_Score" : "Odd_Score"; // Change class based on odd/even

      selectOptions.forEach(opt => {
          let option = document.createElement("option");
          option.value = opt.value;
          option.textContent = opt.text;
          if (select.className === "Even_Score" && opt.value === "X") {
            return; // Skip 'X' for F_Score selects
          }
          if (select.className === "Odd_Score" && opt.value === "/") {
            return; // Skip 'X' for F_Score selects
          }
          select.appendChild(option);
      });

      document.body.appendChild(select); // Append to a specific element as needed
  }
}

// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", createScoreSelects);
