function openTab(tabId, btn) {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to clicked button
    btn.classList.add('active');
}