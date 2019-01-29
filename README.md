# react-ajax
## 拆分组件
    App.jsx
    Search.jsx
    Main.jsx
## 确定组件的state和props
    App
    * state: searchName/string
    Search
    * props: setSearchName/func
    Main
    * props: searchName/string
    * state: firstView/bool, loading/bool, users/array, errMsg/string
## App.jsx
    渲染子组件Search和Main
## Search.jsx
    * button加onClick事件
    * 给input加ref属性
    * 获取input输入的值
        * 如果有输入，将其传给App.jsx
## Main.jsx
    * App应用主组件将searchName传给Main;
    * componentWillReceiveProps(nextProps): 监视接收到新的props
        * 更新状态
        * 使用axios库发送ajax请求
