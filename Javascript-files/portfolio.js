if (window.location.pathname === '/index.html') {
    //addressing footer issue rendering in view during transition on index page//
    let footer = document.getElementById('index-footer');
    
    setTimeout(() => {
        footer.classList.remove('hidden');
    }, 3000);
}
if (window.location.pathname === '/aboutDamani.html'){
    let formIcon = document.getElementById('form-icon');
    let listsBoxes = document.getElementById('lists-boxes');
    let contactForm = document.getElementById('contact-form');
//Stopping form from continuing to populate 

    formIcon.addEventListener('click',() => {
        if(!contactForm){
            contactForm = document.createElement('div');
            contactForm.classList.add('contact-form');

            contactForm.innerHTML = '<form id="contact-form" name="contact-form" action="https://formhandling.great-site.net/submit.php" method="post">' +
            '<div id="text-container">' +
            '<div id="name-container">' +
            '<label for="name" class="form-label"> Please enter your name:</label>' +
            '<input type="text" name="name" id="name" placeholder="Ex: John Smith" class="text-space" pattern="^[A-Za-z\\s]+$" required minlength="7" maxlength="50">' +
            '</div>' +
            '<div id="email-container">' +
            '<label for="email" class="form-label">Please enter your email: </label>' +
            '<input type="email" id="email" name="email" placeholder="Ex: johnsmith@gmail.com" class="text-space">' +
            '</div>' +
            '<div id="message-container">' +
            '<label for="message" class="form-label">Inquiries: </label>' +
            '<textarea rows="5" cols="29" name="message" placeholder="Ex: Hi, I wanted to contact you about your car\'s extended warranty" id="text-area" pattern="[A-Za-z.]"></textarea>' +
            '</div>' +
            '<div class="submit-button-container">' +
            '<input type="submit" name="submitButton" value="Submit" id="submitButton">' +
            '</div>' +
            '</div>' +
            '</form>';

        listsBoxes.appendChild(contactForm);
        }
    });
    
    let form = document.getElementById('contact-form');
    form.addEventListener('submit',(event) => {
        event.preventDefault();
        let formData = new FormData(form);
        let name = decodeURIComponent(formData.get('name'));
        let email = decodeURIComponent(formData.get('email'));
        let message = decodeURIComponent(formData.get('message'));    
        let data = { 
            name: name, 
            email: email,
            message: message
        };
        fetch('submit.php', { 
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

    

