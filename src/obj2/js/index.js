window.onload = function (){
    //获取标签元素的方法
    function $(idName){
        return document.getElementById(idName);
    }
    //获取样式使用的最终值的函数
    function getStyle(ele,attr){
        ele.currentStyle = undefined;
        let res = null;
        if (ele.currentStyle){
            res = ele.currentStyle[attr];
        }else {
            res = window.getComputedStyle(ele,null)[attr];
        }
        return parseFloat(res);
    }

    //获取需要使用到的标签元素
    const game = $("game");
    const gameStart = $("gameStart");
    const gameEnter = $("gameEnter");
    let myPlane = $("myPlane");
    const bulletsP = $("bullets");
    const enemysP = $("enemys");
    const s = $("scores").firstElementChild.firstElementChild;

    //获取需要使用到的元素样式
    //1.游戏界面的宽高
    const gameW = getStyle(game, "width");
    const gameH = getStyle(game, "height");
    //2.游戏界面左上外边距
    const gameML = getStyle(game, "marginLeft");
    const gameMT = getStyle(game, "marginTop");
    //3.获取自己的飞机的宽高
    const myPlaneW = getStyle(myPlane, "width");
    const myPlaneH = getStyle(myPlane, "height");
    //子弹的宽高
    const bulletW = 10;
    const bulletH = 25;


    //声明需要使用的全局变量
    let gameStatus = false;//当前游戏状态
    let a = null;//创建子弹定时器
    let b = null;//创建敌机定时器
    let bullets = [];//所有子弹的集合
    let enemys = [];//所有敌机元素集合
    let scores = 0;//开始游戏得分



    gameStart.firstElementChild.onclick = function (){
        gameStart.style.display = 'none';
        gameEnter.style.display = 'block';
        // document.body.onmousemove = myPlaneMove;
        //给当前文档添加键盘事件
        document.onkeyup = function (evt){
            const e = evt;
            //获取键盘键值
            const keyVal = e.key;
            if(keyVal == " "){
                if (!gameStatus) {
                    //初始化得分
                    scores = 0;
                    //开始游戏
                    this.body.onmousemove = myPlaneMove;
                    //实现射击效果
                    shot();
                    //实现敌机下落
                    appearEnemy();
                    //暂停后开始游戏
                    //子弹继续运动
                    if (bullets.length != 0) reStart(bullets, 1);
                    //敌机继续运动
                    if (enemys.length != 0) reStart(enemys);
                }else{
                    //暂停游戏
                    this.body.onmousemove = null;
                    //清除创建敌机和创建子弹的定时器
                    clearInterval(a);
                    clearInterval(b);
                    a = null;
                    b = null;
                    //清除所有子弹和所有敌机的运动定时器
                    clear(bullets);
                    clear(enemys);
                }
                gameStatus = !gameStatus;
            }
        }
        //己方飞机的移动
        function myPlaneMove(evt){
            const e = evt;
            //获取鼠标移动的位置
            const mouse_x = e.x || e.pageX;
            const mouse_y = e.y || e.pageY;

            //计算得到鼠标移动时己方飞机的左上边距
            let last_myPlane_left = mouse_x - gameML - myPlaneW / 2;
            let last_myPlane_top = mouse_y - gameMT - myPlaneH / 2;
            //控制飞机不能脱离当前游戏界面
            if (last_myPlane_left <= 0){
                last_myPlane_left = 0;
            }else if (last_myPlane_left >= gameW - myPlaneW){
                last_myPlane_left = gameW - myPlaneW;
            }if (last_myPlane_top <= 0){
                last_myPlane_top = 0;
            }else if (last_myPlane_top >= gameH - myPlaneH){
                last_myPlane_top = gameH - myPlaneH;
            }
            myPlane.style.left = last_myPlane_left + "px";
            myPlane.style.top = last_myPlane_top + "px";
        }
        //单位时间内创建子弹
        function shot(){
            if (a) return;//暂停游戏子弹不刷新
            a = setInterval(function(){
                //创建子弹
                createBullet();
            },100);
        }
        function createBullet(){
            const bullet = new Image();
            bullet.src ='../image/wd_zd.png'
            //确定子弹的位置
            bullet.className = "wd_zd";
            //每一颗子弹都需要确定自己飞机的位置
            const myPlaneL = getStyle(myPlane, "left");
            const myPlaneT = getStyle(myPlane, "top");
            //确定子弹位置
            const bulletL = myPlaneL + myPlaneW / 2 - bulletW / 2;
            const bulletT = myPlaneT - myPlaneH / 2;

            bullet.style.left = bulletL + "px";
            bullet.style.top = bulletT + "px";
            bulletsP.appendChild(bullet);
            bullets.push(bullet);
            move(bullet,"top");
        }
        //子弹的运动:运动函数（匀速）
        function move(ele,attr){
            const speed = -10;
            ele.timer = setInterval(function (){
                const moveVal = getStyle(ele, attr);
                //子弹运动出游戏界面，清除子弹及定时器
                if (moveVal <= -bulletH){
                    clearInterval(ele.timer);
                    ele.parentNode.removeChild(ele)
                    bullets.splice(0,1);
                }else {
                    ele.style[attr] = moveVal + speed + "px";
                }
            },15)
        }
        //创建敌机数据对象
        const enemysObj = {
            enemy1: {
                width: 32,
                height: 24,
                score: 1,
                hp: 100,
            },
            enemy2: {
                width: 50,
                height: 36,
                score: 5,
                hp: 500,
            },
            enemy3: {
                width: 58,
                height: 40,
                score: 10,
                hp: 1000,
            }
        };

        //创建敌机定时器
        function appearEnemy(){
            b = setInterval(function (){
                //制造敌机
                createEnemy();
                //删除死亡敌机
                delEnemy();
            },1000)
        }
        //制造敌机的函数
        function createEnemy(){
            //敌机出现概率的数据
            const percentData = [1, 1, 1, 1, 1,1, 1, 1, 1, 1, 2, 2, 2, 2, 3];
            //敌机的类型
            const enemyType = percentData[Math.floor(Math.random() * percentData.length)];
            //得到当前随机敌机数据
            const enemyData = enemysObj["enemy" + enemyType];
            //创建敌机元素
            const enemy = new Image(enemyData.width, enemyData.height);
            enemy.src = "../image/enemy" + enemyType +".png";
            enemy.t = enemyType;
            enemy.score = enemyData.score;
            enemy.hp = enemyData.hp;
            enemy.className = "dj";
            enemy.dead = false;//敌机存活
            //确定敌机出现的位置
            const enemyL = Math.floor(Math.random() * (gameW - enemyData.width + 1));
            const enemyT = -enemyData.height;
            enemy.style.left = enemyL + "px";
            enemy.style.top = enemyT + "px";
            enemysP.appendChild(enemy);
            enemys.push(enemy);
            enemyMove(enemy,"top");
        }
        // createEnemy();
        //敌机运动
        function enemyMove(ele,attr){
            let speed = null;
            if (ele.t == 1) {
                speed =1.5;
            } else if (ele.t == 2){
                speed = 1;
            } else if (ele.t == 3){
                speed = 0.5;
            }
            clearInterval(ele.timer);
            ele.timer = setInterval(function (){
                const moveVal = getStyle(ele, attr);
                if (moveVal >= gameH){
                    clearInterval(ele.timer);
                    enemysP.removeChild(ele);
                    bullets.splice(0,1);
                }else {
                    ele.style[attr] = moveVal + speed + "px";
                    //每一架敌机运动时，检测和每一颗子弹的碰撞
                    danger(ele);
                }
                // 检测碰撞
                gameOver();
            },10)
        }
        //清除所有敌机和所有子弹定时器
        function clear(childs){
            for (let i=0;i<childs.length;i++){
                clearInterval(childs[i].timer);
            }
        }
        //暂停游戏之后的开始游戏
        function reStart(childs, type){
            for (let i = 0;i<childs.length;i++){
                type ==1 ? move(childs[i],"top"):enemyMove(childs[i],"top");
            }
        }
        //检测子弹和敌机的碰撞
        function danger(enemy){
            for (let i=0; i<bullets.length; i++){
                //得到子弹的左上边距（运动）
                let bulletL = getStyle(bullets[i],"left");
                let bulletT = getStyle(bullets[i],"top");
                //得到敌机左上边距
                let enemyL = getStyle(enemy,"left");
                let enemyT = getStyle(enemy,"top");
                //得到敌机的宽高
                let enemyW = getStyle(enemy,"width");
                let enemyH = getStyle(enemy,"height");
                let condition = bulletL + bulletW >= enemyL &&
                                bulletL <= enemyW + enemyL &&
                                bulletT <= enemyT + enemyH &&
                                bulletT + bulletH >= enemyT;
                if (condition) {
                    //子弹和敌机的碰撞，删除子弹
                    //先清除碰撞子弹定时器
                    clearInterval(bullets[i].timer);
                    //删除元素
                    bulletsP.removeChild(bullets[i]);
                    //从集合中删除子弹
                    bullets.splice(i,1);
                    //子弹和敌机发生碰撞后敌机血量减少，当敌机hp=0时，删除敌机
                   enemy.hp -= 100;
                    if (enemy.hp == 0){
                        //删除敌机
                        clearInterval(enemy.timer);
                        //删除敌机元素
                        // enemysP.removeChild(enemy);
                        //替换爆炸图片
                        enemy.src = "../image/bj_enemy" + enemy.t + ".png";
                        //标记死亡敌机
                        enemy.dead = true;
                        //计算得分
                        scores += enemy.score;
                        s.innerHTML = scores;
                    }
                }
            }
        }
        //删除掉集合和文档中的死亡敌机
        function delEnemy(){
            for (let i=enemys.length-1;i >= 0;i--){
                if (enemys[i].dead){
                    (function (index){
                        //从文档中删除死亡敌机元素
                        enemysP.removeChild(enemys[index]);
                        //从集合中删除死亡敌机元素
                        enemys.splice(index,1);
                    })(i)
                }
            }
        }
        //运动判断
        //飞机碰撞游戏结束
        function gameOver(){
            for (let i=0;i<enemys.length;i++){
                if (!enemys[i].dead){
                    //游戏界面内存活敌机
                    //检测碰撞
                    //1.获取敌机的左上边距
                    let enemyL = getStyle(enemys[i],"left");
                    let enemyT = getStyle(enemys[i],"top");
                    //2.获取敌机的宽高
                    let enemyW = getStyle(enemys[i],"width");
                    let enemyH = getStyle(enemys[i],"height");
                    //3.获取自己飞机的左上边距
                    let myPlaneL = getStyle(myPlane,"left");
                    let myPlaneT = getStyle(myPlane,"top");
                    //自己飞机的长宽
                    let myPlaneW = getStyle(myPlane,"width");
                    let myPlaneH = getStyle(myPlane,"height");
                    // console.log(enemyL,enemyT,enemyW,enemyH,myPlaneL,myPlaneT,myPlaneW,myPlaneH);
                    let condition = Math.abs(enemyT-myPlaneT)*2<enemyH/2 + myPlaneH/2 &&
                        Math.abs(enemyL - myPlaneL)*2<enemyW/2 + myPlaneW/2 ;
                    if (condition){
                        //自己飞机碰撞敌机
                        //     myPlane.img.src = "../image/bzmyplane.png";
                        //清除定时器 ，创建子弹，飞机，背景图的定时器，
                        clearInterval(a);
                        clearInterval(b);
                        a = null;
                        b = null;
                        //删除子弹和敌机元素
                        remove(bullets);
                        remove(enemys);
                        //集合清空
                        bullets = [];
                        enemys = [];
                        //清除自己飞机的移动事件
                        document.onmousemove = null;
                        //提示得分
                        alert("Game over: "+scores + "分")
                        s.innerHTML= 0;

                        //回到游戏开始界面
                        gameStart.style.display = "block";
                        gameEnter.style.display = "none";
                        myPlane.style.left = "127px";
                        myPlane.style.top = gameH - myPlaneH +"px";
                    }
                }
            }
        }
        //删除元素
        function remove(childs){
            for (let i=childs.length - 1;i>=0;i--) {
                clearInterval(childs[i].timer);
                if (childs[i]&&childs[i].parentNode) {
                    childs[i].parentNode.removeChild(childs[i]);
                }
            }
        }
     }
}