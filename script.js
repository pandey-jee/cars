let boxes = document.querySelectorAll('.box');

function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 25%)`; 
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        let isExpanded = box.classList.contains('expanded');

        gsap.to('.box', {
            width: "150px",
            duration: 0.5
        });
        gsap.to('.box span', {
            opacity: 0,
            bottom: "-30px",
            duration: 0.3
        });
        gsap.to('.box', {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
            duration: 0.3
        });


        gsap.to('body', {
            backgroundColor: getRandomColor(),
            duration: 0.5
        });


        if (!isExpanded) {
            gsap.to(box, {
                width: "500px",
                duration: 0.5
            });
            gsap.to(box.querySelector("span"), {
                opacity: 1,
                bottom: "100px",
                duration: 0.5
            });
            box.classList.add('glowing');
        }


        boxes.forEach(b => {
            b.classList.remove('expanded');
            b.classList.remove('glowing');
        });
        if (!isExpanded) box.classList.add('expanded');
    });
});
