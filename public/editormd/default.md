***
# 欢迎使用 Markdown 编辑阅读器

------

我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，** Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Markdown：

> 整理知识，学习笔记
> 发布日记，杂文，所见所想
> 撰写发布技术文稿（代码支持）
> 撰写发布学术论文（LaTeX 公式支持）
[![](/images/markdown.jpg)](/images/markdown.jpg)
除了您现在看到的这个 Markdown 在线版本，您还可以前往以下网址下载：

------

## 什么是 Markdown

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以

### 1. 高亮一段代码[^code]
##### JS代码　

```javascript
function test() {
    console.log("Hello world!");
}
(function(){
    var box = function() {
        return box.fn.init();
    };
})();

var testBox = box();
```

##### HTML 代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
        <style type="text/css">
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        </style>
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
    </body>
</html>
```

### 2. 高效绘制 [流程图](https://www.baidu.com)

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

### 3. 高效绘制 [序列图](https://www.baidu.com)

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

### 4. 绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |

### 5. 更详细语法说明

想要查看更详细的语法说明，可以参考我们准备的 [Markdown 简明语法手册][1]，进阶用户可以参考 [Markdown 高阶语法手册][2] 了解更多高级功能。

总而言之，不同于其它 *所见即所得* 的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 GitHub 和 技术问答网站 StackOverFlow 的御用书写格式。

---

作者 [@jasonroger][3]     
2015 年 11月 01日    


