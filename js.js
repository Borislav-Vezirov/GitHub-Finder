const github = new Github; 
const ui     = new UI;

const input  = document.getElementById('searchInput');

input.addEventListener('keyup', (e) => {

    const inputValue = e.target.value;

    if(inputValue !== '') {
        github.getUser(inputValue) 
            .then(user => {
                if(user.profile.message === 'Not Found') {
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    ui.showProfile(user.profile);
                    ui.showRepos(user.repos);
                }
            });
    } else {
        ui.clearProfile();
    }
});

