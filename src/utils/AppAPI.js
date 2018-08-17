// =======================================================================================
// for test only
// =======================================================================================
export function getContacts(index, limit){
  return "http://128.199.88.174:8080/api/contact/" + index + "/" + limit+ "?secret=b5ed678f64a4";
}

export function createContact(){
  return "http://128.199.88.174:8080/api/contact?secret=b5ed678f64a4";
}

export function updateContact(id){
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}

export function deleteContact(id){
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}

export function getUsers()
{
  return "http://128.199.88.174:3333/api/v1/user/0/10?access_token=123456789";
}
// =======================================================================================
// end test
// =======================================================================================



const DOMAIN = "http://128.199.88.174:3333";
const PATH = "/api/v1";
const URL = DOMAIN + PATH;
const ACCESS_TOKEN = "?access_token=123456789";

export function authLogin(){
  return URL + "/auth/login" + ACCESS_TOKEN;
}

export function getPermission(userId){
  return URL + "/permission/user/" + userId + ACCESS_TOKEN;
}

export function getRooms() {
  return "http://128.199.88.174:3333/api/v1/room/5b643f110713490c501e44fd?access_token=123";
}
