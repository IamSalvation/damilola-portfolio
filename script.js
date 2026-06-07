document.addEventListener("DOMContentLoaded", function () {
    // 1. Collect selection cards, workspace views, and the OS window title element
    const cards = document.querySelectorAll(".pillar-card");
    const views = document.querySelectorAll(".dashboard-view");
    const windowTitle = document.querySelector(".os-window-title");

    // 2. Define custom system filenames matching each target view ID
    const systemTitles = {
        "view-community": "lola_ecosystem_metrics.sys",
        "view-academy": "lola_academy_framework.sys",
        "view-automation": "lola_operations_engine.sys",
        "view-admin": "lola_lead_matrix.sys"
    };

    // 3. Attach operational event listeners to each selection card
    cards.forEach(card => {
        card.addEventListener("click", function () {

            // Terminate active styling from all selection cards
            cards.forEach(c => c.classList.remove("active-card"));

            // Shut off visibility for all workspace view panels
            views.forEach(v => v.classList.remove("active"));

            // Apply active border and accent styling to clicked card
            this.classList.add("active-card");

            // Capture target panel designation attribute from the clicked card
            const targetViewId = this.getAttribute("data-target");

            // Query and switch on the targeted matching system panel container
            const targetedPanel = document.getElementById(targetViewId);
            if (targetedPanel) {
                targetedPanel.classList.add("active");
            }

            // Dynamically update the operating system window text contextually
            if (windowTitle && systemTitles[targetViewId]) {
                windowTitle.textContent = systemTitles[targetViewId];
            }
        });
    });
});