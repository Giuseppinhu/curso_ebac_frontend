document.addEventListener('DOMContentLoaded', function() {
    const imageElement = this.querySelector('#img-user');
    const nameElement = this.querySelector('#username');
    const profileNameElement = this.querySelector('#profile-username');
    const bioElement = this.querySelector('#bio');
    const numberRepository = this.querySelector('#repository');
    const numberFollowers = this.querySelector('#followers');
    const numberFollowing = this.querySelector('#following');
    const linkProfile = this.querySelector('#profile-link');

    fetch('https://api.github.com/users/Giuseppinhu') 
        .then(function(response) {
            return response.json()
        })    
        .then(function(json) {
            imageElement.src = json.avatar_url;
            nameElement.innerHTML = json.name;
            profileNameElement.innerHTML = `@${json.login}`;
            numberRepository.innerHTML = json.public_repos;
            numberFollowers.innerHTML = json.followers;
            numberFollowing.innerHTML = json.following;
            linkProfile.href = json.html_url;  
        })
        .catch(error => console.error('Erro na requisição:', error));
});