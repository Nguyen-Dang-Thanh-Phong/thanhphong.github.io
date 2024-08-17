document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    console.log(`Tên đầy đủ: ${fullName}`);
    console.log(`Số điện thoại: ${phoneNumber}`);
    console.log(`Tin nhắn: ${message}`);
    
    alert('Cảm ơn bạn đã gửi tin nhắn!');
    
    document.getElementById('contactForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function setActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});
