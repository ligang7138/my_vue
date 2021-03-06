
/***
 * localStorage 公共类
 * */
export default class LocalStorageUtils {

  constructor(){}

  /**
   * 存储localStorage
   */
  setStore(name,content){
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  }

  /**
   * 获取localStorage
   */
  getStore(name){
    if (!name) return;
    return window.localStorage.getItem(name);
  }

  /**
   * 删除localStorage
   */
  removeStore(name){
    if (!name) return;
    window.localStorage.removeItem(name);
  }

  clear(){
    window.localStorage.clear();
  }
}


