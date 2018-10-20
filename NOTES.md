#### 1.码之初

每6个数就有4个，且：2333 = 583 * 4 + 1，所以是：6 * 583 + 2 = 3500。

#### 2.自由之门

科学上网。

#### 3.English

Are you OK?

#### 4.Get&Post

随便找个库吧，比如node-fetch。

#### 5.访客统计

```
cat uv.txt | awk '{print $2}' | sort | uniq | wc -l
```

#### 6.IP

```
ping www.qlcoder.com
```

#### 7.Cookie

职业自带的Chrome插件[EditThisCookie](http://www.editthiscookie.com/start/)。其实Chrome方法多多。

#### 8.数据脱敏

适当地从一个合适年份开始。

#### 10.Basic CSS

你是看不起我前端切图仔。

#### 11.跑马灯

需要读一会儿js，在lottery.marquee.js里面打个断点，console修改一下settings.winId。

#### 17.我从哪里来

```
# 替换掉箭头里面的变量
curl \
    -H "Referer: http://cpc.people.com.cn/" \
    -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
    -H "Content-Length: <length>" \
    -H "Cookie: <cookie>" \
    -d "answer=referer&_token=<token>" \  #
    http://www.qlcoder.com/task/17/solve
```

#### 18.彩虹

OSX自带的数码测色计。

#### 19.以图搜图-1

水表。

#### 21.文件管理

```
du -a | sort | tail
```
#### 27.我要建站-1

```
echo chinesedfan > index.html
now
```

#### 27.我要建站-2

使用now的Node.js模式，记得提供npm start脚本。

#### 31.正则表达式

老搭档[regexper.com](https://regexper.com)。

#### 34.喜刷刷

单线程跑的，好慢。

#### 35.Markdown

链接太多。Chrome转换编码需要借助插件Charset。验证貌似不严。

#### 39.Vim

对着网页敲。

#### 40.缺失的后缀

一路`file`命令。

#### 45.HTML5

Chrome Application Tab。

#### 55.QR Code

考验你手机摄像头的时候到了，我用了iOS上的QR Reader。

#### 58.抓包

```
chmod +x 75c9mac.bin

# Mac貌似需要sudo才能tcpdump
sudo tcpdump 'tcp port 80'

./75c9mac.bin
```

当然还是直接cat查看文件比较快，也更安全。

#### 59.我要建站-3

缓存丢内存里就行，不需要数据库。

#### 63.无边界地图

复用了Codewars的一个kata，美滋滋。偷懒只尝试了1k次迭代，理论上需要判断游戏状态是否形成循环。

#### 66.Base64

丢到某个div的background里面，需要附加：`data:image/png;base64,`。

#### 78.JSON&XML

人脑转换成对象+JSON.stringify。

#### 92.ABTest

手动修改cookie里面的uuid第一位。

#### 113.File in File

简单的文件流操作。

#### 141.Domain

评论区提到多种命令，我自己是用[在线工具](http://s.tool.chinaz.com/same?s=208.97.177.124&page=)查的。

```
nslookup 208.97.177.124
dig -x 208.97.177.124
host 208.97.177.124

// 没有成功
ping -a 208.97.177.124
```
