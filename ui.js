class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3 mx-auto">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile
                        </a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos:   ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers:      ${user.followers}</span>
                        <span class="badge badge-info">Following:         ${user.following}</span>                   
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company:          ${user.company}</li>
                            <li class="list-group-item">Web Site:         ${user.blog}</li>
                            <li class="list-group-item">Location:         ${user.location}</li>
                            <li class="list-group-item">Member Since:     ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3 text-white">Latest Repos</h3>
            <div id="repos"></div>            
        `;
    }

    showAlert(message, className) {

        this.clearAlert();

        const div       = document.createElement('div');

        div.className   = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.search');

        const search    = document.querySelector('#searchInput');

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        },3000)
    }

    showRepos(repos) {

        let output = '';

        repos.forEach(repo => {
            output += `
            
            <div class= "card card-body mb-2 mx-auto">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars:    ${repo.stargasers_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks:    ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }

    clearAlert() {
        const clear = document.querySelector('.alert');

        if(clear) {
            clear.remove();
        }
    }    

    clearProfile() {
        this.profile.innerHTML = '';
    }
}

