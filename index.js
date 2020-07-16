//参照したページ
//https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/

//expressモジュールを読み込む
const express=require('express');
const multer=requuire('multer');
const uuid4=require('uuid/v4');

//expressアプリを生成する
const app=express();

//srcアプリの中身と連携
app.use(multer().none());
app.use(express.static("public"));

//todolistデータ
const todolist=[];

//WEBapiは「api/APIバージョン/機能の名前にすることが一般的」
app.get('/api/v1/list',(req,res)=>{
    //送信するJSONデータを送信をする。
    res.json(todolist);
});

//ブラウザからデータが入力されたら、そのtodolistに追加をする
app.post('api/v1/add',(req,res)=>{
    const todoData=req.body;
    const todotitle=todoData.title;

    //ユニークIDを生成する。ユニークIDとは
    const id=uuid4();

    //todoの項目を作成する。
    const todoItem={
        id,
        title,
        done:fales
    };

    //todoリストに項目を追加する
    todolist.push(todoItem);
    
    //追加した項目をクライアントに返す。
    res.json(todoItem);
});

//ポート3000でサーバを立てる
app.listen(3000,()=>console.log("Listen on port 3000"));
