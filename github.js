class Github {
    constructor() {
        this.clientId     = 'Iv1.102e937d92b064d0';
        this.clientSecret = '81218ca0f89e3a978ac7748559fdf7b90f44dafb';
        this.repos_count  = 5;
        this.repos_sort   = 'çreated: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch (`http://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const reposResponse = await fetch (`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos   = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}