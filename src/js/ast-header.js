const headerTemp = document.createElement("template");

headerTemp.innerHTML = `
    <link rel="stylesheet" href="./css/base/reset.css">
    <link rel="stylesheet" href="./css/base/default.css">
    <link rel="stylesheet" href="./css/ast-header.css">
    
    <header>
        <div id="nav_logo">
            <img id="nav_logo_img" src="./img/logo.png" alt="icon">
            <span id="nav_logo_title">智农药源·神农眼</span>
        </div>
        <ul id="nav_list">

            <li class="nav_item">
                <a href="javascript:">首页</a>
            </li>

            <li class="nav_item">
                <a href="javascript:">病虫害监测页</a>
            </li>

            <li class="nav_item">
                <a href="javascript:">土壤情况</a>
            </li>

             <li class="nav_item">
                <a href="javascript:">知识库</a>
            </li>

             <li class="nav_item">
                <a href="javascript:">专家咨询</a>
            </li>


        </ul>
    </header>
`;

(function () {
    class AstHeader extends HTMLElement {
        constructor() {
            super();
            let shadow = this.attachShadow({mode: 'closed'});
            let content = headerTemp.content;

            let navSelected = parseInt(this.getAttribute("nav-selected"));

            // 设置导航栏选中样式
            let navALabels = content.querySelectorAll(".nav_item>a");
            navALabels[navSelected].setAttribute("id", "nav_selected");

            // nav栏首页和图片库添加跳转
            if (navSelected !== 0) {
                navALabels[0].onclick = function () {
                    location.href = "./index.html";
                }
            }
            if (navSelected !== 1) {
                navALabels[1].onclick = function () {
                    location.href = "./nav1-page1.html";
                }
            }
           
            if (navSelected !== 2) {
                navALabels[2].onclick = function () {
                    location.href = "./nav2-page1.html";
                }
            }
            if (navSelected !== 3) {
                navALabels[3].onclick = function () {
                    location.href = "./nav3-page1.html";
                }
            }
            if (navSelected !== 4) {
                navALabels[4].onclick = function () {
                    location.href = "./nav4-page1.html";
                }
            }

            // menu设置跳转
            let menus = content.querySelectorAll(".menu");
            for (let i = 0; i < menus.length; i++) {
                let aLabels = menus[i].getElementsByTagName("a");
                for (let j = 0; j < aLabels.length; j++) {
                    let url = "./nav" + (i + 1) + "-page" + (j + 1) + ".html";
                    aLabels[j].onclick = function () {
                        location.href = url;
                    }
                }
            }

            shadow.appendChild(content);
        }
    }
    window.customElements.define("ast-header", AstHeader);
})();