import fetch from 'utils/fetch';

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return fetch({
    url: 'http://192.168.1.121:8080/xukun-manage/login',
    method: 'get',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

