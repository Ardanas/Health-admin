import { param2Obj } from 'utils';

const userMap = {
  sujj: {
    role: ['sujj'],
    token: 'sujj',
    introduction: '我是sujj',
    name: 'sujj',
    uid: '004'
  }
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    const { password } = JSON.parse(config.body);
    let a = email.split('@')[0];//获取邮箱前缀
    if(password === 'Sjj19910511&' && userMap[a] !== undefined){
      return userMap[email.split('@')[0]];
    }else{
      return null
    }
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};
