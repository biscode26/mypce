function openTab(event, tabId) {

    // Get all tab content sections
    const tabContents = document.querySelectorAll(".tab-content");

    // Hide all tab contents
    tabContents.forEach(function(content) {
        content.classList.remove("active-content");
    });


    // Get all tab buttons
    const tabButtons = document.querySelectorAll(".tab-button");

    // Remove active class from all buttons
    tabButtons.forEach(function(button) {
        button.classList.remove("active");
    });


    // Show selected content
    document.getElementById(tabId).classList.add("active-content");


    // Make clicked button active
    event.currentTarget.classList.add("active");
}