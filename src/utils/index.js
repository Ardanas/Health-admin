/**
 */

 export function parseTime(time, cFormat) {
   if (arguments.length === 0) {
     return null;
   }
   const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
   let date;
   if (typeof time == 'object') {
     date = time;
   } else {
     if (('' + time).length === 10) time = parseInt(time) * 1000;
     date = new Date(time);
   }
   const formatObj = {
     y: date.getFullYear(),
     m: date.getMonth() + 1,
     d: date.getDate(),
     h: date.getHours(),
     i: date.getMinutes(),
     s: date.getSeconds(),
     a: date.getDay()
   };
   const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
     let value = formatObj[key];
     if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
     if (result.length > 0 && value < 10) {
       value = '0' + value;
     }
     return value || 0;
   });
   return time_str;
 }

 export function formatTime(time, option) {
   time = +time * 1000;
   const d = new Date(time);
   const now = Date.now();

   const diff = (now - d) / 1000;

   if (diff < 30) {
     return '刚刚'
   } else if (diff < 3600) { // less 1 hour
     return Math.ceil(diff / 60) + '分钟前'
   } else if (diff < 3600 * 24) {
     return Math.ceil(diff / 3600) + '小时前'
   } else if (diff < 3600 * 24 * 2) {
     return '1天前'
   }
   if (option) {
     return parseTime(time, option)
   } else {
     return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
   }
 }

// 格式化时间
 export function getQueryObject(url) {
   url = url == null ? window.location.href : url;
   const search = url.substring(url.lastIndexOf('?') + 1);
   const obj = {};
   const reg = /([^?&=]+)=([^?&=]*)/g;
   search.replace(reg, (rs, $1, $2) => {
     const name = decodeURIComponent($1);
     let val = decodeURIComponent($2);
     val = String(val);
     obj[name] = val;
     return rs;
   });
   return obj;
 }


/**
 *get getByteLen
 * @param {Sting} val input value
 * @returns {number} output value
 */
 export function getByteLen(val) {
   let len = 0;
   for (let i = 0; i < val.length; i++) {
     if (val[i].match(/[^\x00-\xff]/ig) != null) {
       len += 1;
     } else { len += 0.5; }
   }
   return Math.floor(len);
 }

 export function cleanArray(actual) {
   const newArray = [];
   for (let i = 0; i < actual.length; i++) {
     if (actual[i]) {
       newArray.push(actual[i]);
     }
   }
   return newArray;
 }

 export function param(json) {
   if (!json) return '';
   return cleanArray(Object.keys(json).map(key => {
     if (json[key] === undefined) return '';
     return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
   })).join('&');
 }

 export function param2Obj(url) {
   const search = url.split('?')[1];
   if (!search) {
     return {}
   }
   return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
 }

 export function html2Text(val) {
   const div = document.createElement('div');
   div.innerHTML = val;
   return div.textContent || div.innerText;
 }

 export function objectMerge(target, source) {
    /* Merges two  objects,
     giving the last one precedence */

   if (typeof target !== 'object') {
     target = {};
   }
   if (Array.isArray(source)) {
     return source.slice();
   }
   for (const property in source) {
     if (source.hasOwnProperty(property)) {
       const sourceProperty = source[property];
       if (typeof sourceProperty === 'object') {
         target[property] = objectMerge(target[property], sourceProperty);
         continue;
       }
       target[property] = sourceProperty;
     }
   }
   return target;
 }


 export function scrollTo(element, to, duration) {
   if (duration <= 0) return;
   const difference = to - element.scrollTop;
   const perTick = difference / duration * 10;
   setTimeout(() => {
     console.log(new Date())
     element.scrollTop = element.scrollTop + perTick;
     if (element.scrollTop === to) return;
     scrollTo(element, to, duration - 10);
   }, 10);
 }

 export function toggleClass(element, className) {
   if (!element || !className) {
     return;
   }
   let classString = element.className;
   const nameIndex = classString.indexOf(className);
   if (nameIndex === -1) {
     classString += '' + className;
   } else {
     classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
   }
   element.className = classString;
 }

 export const pickerOptions = [
   {
     text: '今天',
     onClick(picker) {
       const end = new Date();
       const start = new Date(new Date().toDateString());
       end.setTime(start.getTime());
       picker.$emit('pick', [start, end]);
     }
   }, {
     text: '最近一周',
     onClick(picker) {
       const end = new Date(new Date().toDateString());
       const start = new Date();
       start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
       picker.$emit('pick', [start, end]);
     }
   }, {
     text: '最近一个月',
     onClick(picker) {
       const end = new Date(new Date().toDateString());
       const start = new Date();
       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
       picker.$emit('pick', [start, end]);
     }
   }, {
     text: '最近三个月',
     onClick(picker) {
       const end = new Date(new Date().toDateString());
       const start = new Date();
       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
       picker.$emit('pick', [start, end]);
     }
   }]

 export function getTime(type) {
   if (type === 'start') {
     return new Date().getTime() - 3600 * 1000 * 24 * 90
   } else {
     return new Date(new Date().toDateString())
   }
 }

 export function debounce(func, wait, immediate) {
   let timeout, args, context, timestamp, result;

   const later = function() {
    // 据上一次触发时间间隔
     const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
     if (last < wait && last > 0) {
       timeout = setTimeout(later, wait - last);
     } else {
       timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
       if (!immediate) {
         result = func.apply(context, args);
         if (!timeout) context = args = null;
       }
     }
   };

   return function(...args) {
     context = this;
     timestamp = +new Date();
     const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
     if (!timeout) timeout = setTimeout(later, wait);
     if (callNow) {
       result = func.apply(context, args);
       context = args = null;
     }

     return result;
   };
 }

export function cutValue (target, name)  {
  let arr = [];
  for (let i = 0; i < target.length; i++) {
    arr.push(target[i][name])
  }
  let len = arr.length;
  return arr.slice(0, len-1)
}
//时间格式化
export function formatUtc (utc_datetime) {
  // 转为正常的时间格式 年-月-日 时:分:秒
    let T_pos = utc_datetime.indexOf('T');
    let Z_pos = utc_datetime.indexOf('Z');
    let year_month_day = utc_datetime.substr(0,T_pos);
    let hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    let new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    let timestamp = timestamp+8*60*60;

    // 时间戳转为时间
    let beijing_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    return beijing_datetime; // 2017-03-31 16:02:06
}



