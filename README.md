# CEF - A simple Chrome Extension development falsework

CEF是一个简单的Chrome Extension开发脚手架，它有如下功能：
1. 模块化的结构，便于开发维护
2. 支持模板
3. 支持简单的数据绑定
4. 发布工具，可对JS文件进行压缩，并输出干净的扩展文件

## 获取并初始化
1. git@github.com:yuiitsu/CES.git
2. cd CES
3. npm install

## 项目结构
```
- dist // 发布文件夹
- scripts
  - lib // 库文件夹
  - module // 模块
    - your module
        event.js // 事件监听
        module.js // 模块功能
        view.js // 模板
  app.js
  model.js
  run.js
- style
deploy.js // 发布脚本
manifest.json
```

## 使用
### 创建Module
在module文件夹里创建Module文件夹，如：demo。接着在demo文件夹里创建module.js，event.js和view.js，

> 注：这3个文件并不是必须的，根据情况添加。比如，该模块并不需要模板，所以view.js就可以不要

在module.js中添加如下代码：
```javascript
App.module.extend('demo', function() {
    //
    this.init = function() {
        // todo.
    };
});
```
extend的第一个参数为模块名，如果加载了该模块，可以在module, event, view里直接使用`this.module.demo`调用。
init方法为初始化方法，模块加载的时候即会执行。

接着添加一个方法：
```javascript
App.module.extend('demo', function() {
    //
    this.init = function() {
        // todo.
    };
    
    this.hello = function() {
        console.log('Module demo hello.');
    };
});
```
如下调用hello方法：
```javascript
this.module.demo.hello();
```