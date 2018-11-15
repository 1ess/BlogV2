import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import '../App.css';
import '../Blog.css';

export default class Blog2018 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    "title": `黄金时代`,
                    "date_time": `Jun 13`,
                    "summary": `那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。`
                },
                {
                    "title": `密码学`,
                    "date_time": `Jun 16`,
                    "summary": `讲到计算机密码学，就不得不从网络的发展说起，网络初期，主要用于科学研究，只在几个大学之间互联网络，使得设计之初并没有考虑到数据传输安全问题。`
                },
                {
                    "title": `HTTP 基础`,
                    "date_time": `Jun 18`,
                    "summary": `对于应用开发工程师，我们无时无刻不在接触HTTP协议。为了更好的完成我们的应用开发任务，对于HTTP的透彻理解就显得必不可少了。`
                },
                {
                    "title": `HTTP 缓存`,
                    "date_time": `Jun 18`,
                    "summary": `计算机科学只有两大难题：命名和缓存失效。Cache的设计是个基础计算机理论，也是程序员的重要基本功之一。`
                },
                {
                    "title": `计算机网络`,
                    "date_time": `Jun 20`,
                    "summary": `对于纯应用层开发工程师，除了应用层协议经常用到，下层协议我们用到的机会并不多，但这不是我们不能全盘了解网络知识的一个借口。`
                },
                {
                    "title": `计算机组成(一)`,
                    "date_time": `Jun 21`,
                    "summary": `在最近的中兴制裁风波中，充分体现了，核心技术落后就要陷于受制于人的窘境。`
                },
                {
                    "title": `计算机组成(二)`,
                    "date_time": `Jun 23`,
                    "summary": `当你的噩梦里再也没有恶龙和沼泽，而全都是生活难题的那一刻，你就知道你长大了。`
                },
                {
                    "title": `计算机组成(三)`,
                    "date_time": `Jun 25`,
                    "summary": `当你少年时，你的压力，生活的烦恼，没有人理解； 当你成人了，你的压力，生活的烦恼，每个人都懂。 但没有人在乎。`
                },
                {
                    "title": `计算机组成(四)`,
                    "date_time": `Jun 26`,
                    "summary": `程序必须首先让人类可以理解, 然后顺便让机器能执行。`
                },
                {
                    "title": `计算机组成(五)`,
                    "date_time": `Jul 1`,
                    "summary": `永远不要忽略一辆载满磁带的在高速公路上飞驰的卡车的带宽。`
                },
                {
                    "title": `自由`,
                    "date_time": `Jul 10`,
                    "summary": `Across the Great Wall we can reach every corner in the world.`
                },
                {
                    "title": `前端-概述`,
                    "date_time": `Jul 10`,
                    "summary": `从这篇开始，打算根据 Github 上面的 developer-roadmap，从0开始学习 Frontend。`
                },
                {
                    "title": `HTML(一)`,
                    "date_time": `Jul 11`,
                    "summary": `从这篇开始，通过几篇 Blog 的介绍，了解常用的 HTML 标记。`
                },
                {
                    "title": `HTML(二)`,
                    "date_time": `Jul 11`,
                    "summary": `上一篇讲了 HTML 中 head 部分重要的子元素，本篇将要讲解 body 元素中所有重要的子元素。`
                },
                {
                    "title": `HTML(三)`,
                    "date_time": `Jul 12`,
                    "summary": `本篇我们将介绍图片，超链接，列表表格以及表单等元素。`
                },
                {
                    "title": `HTML(四)`,
                    "date_time": `Jul 12`,
                    "summary": `前三篇已经讲解完大部分常用的标记，这一篇准备讲解其余的标记。`
                },
                {
                    "title": `CSS(一)`,
                    "date_time": `Jul 12`,
                    "summary": `从这篇开始，我们将要从0开始介绍关于 CSS 的基础知识。`
                },
                {
                    "title": `CSS(二)`,
                    "date_time": `Jul 13`,
                    "summary": `这一篇，我们来讲解一下与字体 font 和文本 text 相关的属性。`
                },
                {
                    "title": `CSS(三)`,
                    "date_time": `Jul 13`,
                    "summary": `本篇将讲解盒模型 Box-model 以及外边距折叠的相关知识。`
                },
                {
                    "title": `CSS(四)`,
                    "date_time": `Jul 14`,
                    "summary": `上一篇我们介绍了，使用 display:block; 和 display:inline; 来改变默认的盒模型。这一篇，我们详细介绍4种常用的 display 属性值，以及与背景相关的属性。`
                },
                {
                    "title": `CSS(五)`,
                    "date_time": `Jul 14`,
                    "summary": `从这一篇开始，将要介绍 CSS 中最重要的两个知识 - 浮动和定位。`
                },
                {
                    "title": `CSS(六)`,
                    "date_time": `Jul 16`,
                    "summary": `这一篇，我们将来介绍一种 CSS 中的高级布局方式 - Flexbox 布局。`
                },
                {
                    "title": `CSS(七)`,
                    "date_time": `Jul 17`,
                    "summary": `Grid 布局是一个二维布局系统，意味着它可以处理列和行，不像 Flexbox 主要是一维布局系统。`
                },
                {
                    "title": `CSS(八)`,
                    "date_time": `Jul 22`,
                    "summary": `这一篇，我们来介绍一下响应式设计及其三大关键技术 - 流式布局，弹性媒体和媒体查询。并会介绍移动优先的响应式设计。`
                },
                {
                    "title": `CSS(九)`,
                    "date_time": `Jul 26`,
                    "summary": `这一篇，我们主要讲解变换 transform 和过渡 transition 的使用。`
                },
                {
                    "title": `Docker 基础`,
                    "date_time": `Jul 27`,
                    "summary": `之前讲了很多前端基础知识，这一篇我们换个口味，讲讲 Docker 的知识。`
                },
                {
                    "title": `JavaScript(一)`,
                    "date_time": `Jul 28`,
                    "summary": `从这篇之后，我们将介绍网页中另一个重要知识 - JavaScript。`
                },
                {
                    "title": `JavaScript(二)`,
                    "date_time": `Jul 29`,
                    "summary": `这一篇，我们来学习一下 JavaScript 基本概念中的基本语法以及数据类型。`
                },
                {
                    "title": `JavaScript(三)`,
                    "date_time": `Aug 2`,
                    "summary": `这一篇，我们来学习一下 JavaScript 基本概念中的操作符，语句以及函数。`
                },
                {
                    "title": `IndexedDB 基础`,
                    "date_time": `Aug 2`,
                    "summary": `这一篇，由于在自己项目中采用的前端存储 - IndexedDB ，所以这一篇就介绍一些关于 IndexedDB 的知识。`
                },
                {
                    "title": `JavaScript(四)`,
                    "date_time": `Aug 12`,
                    "summary": `这一篇，我们来详细看看 JavaScript 中的变量、作用域和内存问题。`
                },
                {
                    "title": `JavaScript(五)`,
                    "date_time": `Aug 13`,
                    "summary": `这一篇，我们讲讲 JavaScript 引用类型中的 Object，Array 和 Date。`
                },
                {
                    "title": `JavaScript(六)`,
                    "date_time": `Aug 22`,
                    "summary": `这一篇，我们讲讲 JavaScript 引用类型中的 Function，基本包装类型和单体内置对象。`
                },
                {
                    "title": `JavaScript(七)`,
                    "date_time": `Aug 27`,
                    "summary": `这一篇，我们说说 ECMAScript 中的面向对象这一重要概念。`
                },
                {
                    "title": `JavaScript(八)`,
                    "date_time": `Aug 29`,
                    "summary": `这一篇，我们介绍一下 JavaScript 中比较特殊的东西 - 函数表达式。`
                },
                {
                    "title": `JavaScript(九)`,
                    "date_time": `Aug 29`,
                    "summary": `ECMAScript 是 JavaScript 的核心，但如果要在 Web 中使用 JavaScript，那么 BOM（浏览器对象模型）则无疑才是真正的核心。`
                },
                {
                    "title": `JavaScript(十)`,
                    "date_time": `Aug 30`,
                    "summary": `DOM（文档对象模型）是针对 HTML 和 XML 文档的一个 API。DOM 描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。`
                },
                {
                    "title": `JavaScript(十一)`,
                    "date_time": `Aug 30`,
                    "summary": `这一篇，我们讲讲 DOM 扩展。对 DOM 的两个主要的扩展是 Selectors API 和 HTML5。`
                },
                {
                    "title": `JavaScript(十二)`,
                    "date_time": `Sep 1`,
                    "summary": `这一篇，我们讲讲 JavaScript 中非常重要的概念 —— 事件。`
                },
                {
                    "title": `JavaScript(十三)`,
                    "date_time": `Sep 1`,
                    "summary": `这一篇，我们说说表单。JavaScript 最初的一个作用，就是分担服务器处理表单的责任。`
                },
                {
                    "title": `JavaScript(十四)`,
                    "date_time": `Sep 2`,
                    "summary": `这一篇，我们讲讲 ECMAScript6 中的几个重要的新特性：箭头函数，类的声明以及继承等。`
                },
                {
                    "title": `随便聊聊`,
                    "date_time": `Sep 2`,
                    "summary": `今天翻看照片，突然发现自己已经毕业3年多了，真让人感叹时光飞逝。`
                },
                {
                    "title": `React(一)`,
                    "date_time": `Sep 8`,
                    "summary": `最近一周工作太忙了，用 C# 写了 API，建了数据库，部署了服务器（从 Docker 迁移回了 IIS）。`
                },
                {
                    "title": `React(二)`,
                    "date_time": `Sep 8`,
                    "summary": `这一篇，我们将介绍 React 中最重要的概念之一 —— 组件。`
                },
                {
                    "title": `React(三)`,
                    "date_time": `Sep 9`,
                    "summary": `这一篇，我们看看组件对于数据的处理以及组件的生命周期。`
                },
                {
                    "title": `杂`,
                    "date_time": `Sep 14`,
                    "summary": `这一篇，记录一些零碎的知识点，主要记录 .Net 中的小知识，会随时更新。`
                },
                {
                    "title": `C#(一)`,
                    "date_time": `Sep 15`,
                    "summary": `目前的打算是将 C# 的知识都过一遍，再逐渐学习一些常用类库，最后把 ASP.Net Core MVC 和 API 都好好看看。`
                },
                {
                    "title": `C#(二)`,
                    "date_time": `Sep 16`,
                    "summary": `这一篇，我们看看 C# 中的类与其它语言相比，到底有哪些特殊的概念。`
                },
                {
                    "title": `C#(三)`,
                    "date_time": `Sep 17`,
                    "summary": `这一篇，我们深入理解一下 C# 中的类有哪些特殊的地方。`
                },
                {
                    "title": `C#(四)`,
                    "date_time": `Sep 18`,
                    "summary": `这一篇，我们讲讲 C# 中的继承与其它语言相比有哪些特殊的地方。`
                },
                {
                    "title": `C#(五)`,
                    "date_time": `Sep 20`,
                    "summary": `这一篇，我们来讲讲 C# 中的表达式以及所有常用的运算符。`
                },
                {
                    "title": `C#(六)`,
                    "date_time": `Sep 22`,
                    "summary": `这一篇，讲讲 C# 中特殊的结构体 Struct 以及枚举 Enum 类型。`
                },
                {
                    "title": `C#(七)`,
                    "date_time": `Sep 22`,
                    "summary": `这一篇，我们讲讲 C# 中的数组对象及其协变。`
                },
                {
                    "title": `C#(八)`,
                    "date_time": `Sep 22`,
                    "summary": `这一篇，我们讲讲 C# 中特殊的委托 delegate 类型。`
                },
                {
                    "title": `C#(九)`,
                    "date_time": `Sep 23`,
                    "summary": `前几篇，我们都在讲类型，这一篇，我们来说说重要的一个成员 —— 事件。`
                },
                {
                    "title": `C#(十)`,
                    "date_time": `Sep 23`,
                    "summary": `这一篇，我们再回来说说最后一种类型 —— 接口 interface。`
                },
                {
                    "title": `C#(十一)`,
                    "date_time": `Sep 27`,
                    "summary": `这一篇，我们看看 C# 中的显式转换和隐式转换。`
                },
                {
                    "title": `C#(十二)`,
                    "date_time": `Sep 29`,
                    "summary": `理想有两种：一种，我实现了我的理想；另一种：理想通过我而实现。 这一篇，我们看看 C# 中的泛型。`
                },
                {
                    "title": `C#(十三)`,
                    "date_time": `Oct 6`,
                    "summary": `这一篇，我们看看 C# 中的枚举器和迭代器。`
                },
                {
                    "title": `C#(十四)`,
                    "date_time": `Oct 6`,
                    "summary": `这一篇，讲讲 C# 中的一大利器 —— LINQ。通过它我们可以很便利的操作集合。`
                },
                {
                    "title": `C#(十五)`,
                    "date_time": `Oct 8`,
                    "summary": `这一篇，我们讲讲 C# 网络编程中比较重要的概念 —— 异步。`
                },
                {
                    "title": `C#(十六)`,
                    "date_time": `Oct 8`,
                    "summary": `这一篇，我们来讲讲 C# 中的异常处理。在 iOS 中我们很少使用异常，但在 C# 中用的却很多。`
                },
                {
                    "title": `C#(十七)`,
                    "date_time": `Oct 9`,
                    "summary": `这一篇，我们来介绍一些 C# 中的预处理指令。`
                },
                {
                    "title": `C#(十八)`,
                    "date_time": `Oct 9`,
                    "summary": `这一篇，我们讲讲 C# 中非常重要的概念 —— 反射和特性。`
                },
                {
                    "title": `聊聊最近，聊聊生活`,
                    "date_time": `Oct 10`,
                    "summary": `这一篇，不谈技术，我们就随便说说，聊聊最近的生活吧。`
                },
                {
                    "title": `编程三年`,
                    "date_time": `Oct 11`,
                    "summary": `写这篇文章，也算是对自己之前的编程生涯做个总结。`
                },
                {
                    "title": `ASP.Net MVC(一)`,
                    "date_time": `Oct 12`,
                    "summary": `从这篇开始，我们来谈谈 ASP.Net MVC，我们将会介绍 ASP.Net MVC 的方方面面（包括基础以及高级特性）。`
                },
                {
                    "title": `ASP.Net MVC(二)`,
                    "date_time": `Oct 12`,
                    "summary": `这一篇，我们就讲讲 ASP.Net MVC 中的路由 Route。注意与之后我们要讲的 API 区分。`
                },
                {
                    "title": `ASP.Net MVC(三)`,
                    "date_time": `Oct 13`,
                    "summary": `这一篇，我们具体说说 Controller，Model 和 View。`
                },
                {
                    "title": `ASP.Net MVC(四)`,
                    "date_time": `Oct 13`,
                    "summary": `这一篇，我们说说 ASP.Net MVC 中的 Model Binding。注意与之后我们要讲的 API 区分。`
                },
                {
                    "title": `ASP.Net MVC(五)`,
                    "date_time": `Oct 14`,
                    "summary": `本篇，我们来说说 ASP.Net MVC 中独特的 Razor 引擎语法。`
                },
                {
                    "title": `ASP.Net MVC(六)`,
                    "date_time": `Oct 14`,
                    "summary": `这一篇，我们来讲讲 Razor 语法中的 HTML Helper。`
                },
                {
                    "title": `ASP.Net MVC(七)`,
                    "date_time": `Oct 15`,
                    "summary": `这一篇，我们讲讲数据验证，布局试图以及 Controller 向 View 传递少量数据的方式。`
                },
                {
                    "title": `ASP.Net MVC(八)`,
                    "date_time": `Oct 15`,
                    "summary": `这一篇，我们来讲讲 ASP.Net MVC 中的过滤器 —— Filter。`
                },
                {
                    "title": `ASP.Net MVC(九)`,
                    "date_time": `Oct 15`,
                    "summary": `这一篇，我们讲讲 ASP.Net MVC 中的 Bundling 技术。`
                },
                {
                    "title": `ASP.Net MVC(十)`,
                    "date_time": `Oct 15`,
                    "summary": `这一篇，我们讲讲 ASP.Net MVC 中的 Area 到底是什么。`
                },
                {
                    "title": `ASP.Net API(一)`,
                    "date_time": `Oct 22`,
                    "summary": `从本篇开始，我们来认识一下 ASP.Net Web API。`
                },
                {
                    "title": `ASP.Net API(二)`,
                    "date_time": `Oct 22`,
                    "summary": `之前我们说过 Web MVC 中的路由，本篇，我们看看如何配置 Web API 路由。`
                },
                {
                    "title": `ASP.Net API(三)`,
                    "date_time": `Oct 23`,
                    "summary": `我们将再看看 Web API 如何将 HTTP 请求数据绑定到操作方法的参数。`
                },
                {
                    "title": `ASP.Net API(四)`,
                    "date_time": `Oct 23`,
                    "summary": `本篇，我们讲讲 Web API 如何处理不同格式的请求和响应数据。`
                },
                {
                    "title": `闲聊`,
                    "date_time": `Nov 2`,
                    "summary": `你们这伙没胆量的下流东西！不要跑！来跟你们厮杀的只是个单枪匹马的骑士！`
                },
                {
                    "title": `论使用国内开源项目有感`,
                    "date_time": `Nov 15`,
                    "summary": `最近公司准备开发微信小程序，之前也研究过一段时间，写过几个 Demo，感觉原生开发有些笨重。`
                }
            ]
        }
    }

    render() {
        const {items} = this.state;
        return (
            <Fragment>
                {
                    items.map((item, index)=>(<BlogItem key={index} number={``+ (index + 1)} title={item.title} date_time={item.date_time} summary={item.summary} />))
                }
            </Fragment>
        );
    }
}

