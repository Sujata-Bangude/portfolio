function openTab(tabId, btn) {
 
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

   
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

   
    document.getElementById(tabId).classList.add('active');

  
    btn.classList.add('active');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = window.innerWidth <= 768 ? 80 : 0; // Adjust for mobile
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert('Form Submitted Successfully!');
  });