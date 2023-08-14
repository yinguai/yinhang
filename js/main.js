//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '右键被小小萌吃了'
    });
    return false;
}

//控制台输出
//console.clear();
let styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
let styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
let styleContent = `
color: rgb(30,152,255);
`
let title1 = 'XueMengの导航页'
let title2 = `
                                                
`
let content = `
版 本 号：1.4
更新日期：2023-08-14

主页:  https://www.yinguai.club
Github:  https://github.com/yinguai
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)