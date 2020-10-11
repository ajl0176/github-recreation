const BASE_URL = "https://api.github.com/users/ajl0176";
const REP_URL = "https://api.github.com/users/ajl0176/repos";
const ORG_URL = "https://api.github.com/users/ajl0176/orgs";
const CLIENT_ID = "d98fece13c0c52a19401";
const CLIENT_SECRET = "740095539624e466717a552879b7e4b8b90e94fc";

function requestUserData(data){
  fetch(`${BASE_URL}`).then(
    response => response.json()
  ).then(data => {
    buildprofiledata(data);
  })
  .catch(error => console.log(error));
}

function buildprofiledata(data){
  //console.log(data);
  const source = document.getElementById('profile-template').innerHTML;
  const template = Handlebars.compile(source);
  const content = {profile:data};
  //console.log(content)
  const html = template(content);
  document.querySelector('#profile').innerHTML=html;
}

requestUserData();


function requestUserRepo(data){
  fetch(REP_URL).then(
    response => response.json()
  ).then(data => {
    buildprofileRepos (data);
  })
  .catch(error => console.log(error));
}

function buildprofileRepos(data){
  console.log(data);
  const source = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(source);
  const content = {repos:data};
  //console.log(content)
  const html = template(content);
  document.querySelector('.repositories').innerHTML = html;
}

requestUserRepo();


function requestUserOrg(data){
  fetch(ORG_URL).then(
    response => response.json()
  ).then(data => {
    buildprofileRepos (data);
  })
  .catch(error => console.log(error));
}

function buildprofileOrgs(data){
  console.log(data);
  const source = document.getElementById('org-template').innerHTML;
  const template = Handlebars.compile(source);
  const content = {repos:data};
  //console.log(content)
  const html = template(content);
  document.querySelector('.organizations').innerHTML = html;
}

requestUserOrg();
