// function createSurvey() {
//   const surveyType = document.getElementById("surveyType").value;
//   let surveyName = "";

//   if (surveyType === "feedback") {
//     surveyName = "Customer Feedback Form";
//   } else if (surveyType === "employee") {
//     surveyName = "Employee Satisfaction Form";
//   } else if (surveyType === "registration") {
//     surveyName = "Event Registration Form";
//   } else if (surveyType === "scratch") {
//     surveyName = "Custom Survey";
//   }

//   const surveyList = document.getElementById("savedSurveys");
//   const listItem = document.createElement("li");
//   listItem.textContent = surveyName;
//   surveyList.appendChild(listItem);
// }

// function addField() {
//   const customFieldsDiv = document.getElementById("customFields");
//   const newField = document.createElement("div");
//   newField.classList.add("field-container");
//   newField.contentEditable = true;
//   newField.textContent = "Your custom question here...";
//   customFieldsDiv.appendChild(newField);
// }
