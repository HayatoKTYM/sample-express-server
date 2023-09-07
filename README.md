# Sample Express Server

Express Server (+EJS)を立ててみた

その他幾つか技術検証を兼ねている

* zod
* prisma

## 使用技術
- node: 16.17.0
- npm: 8.19.0

## セットアップ

```
npm i
```

## 実行方法

`ts-node`がいんすトールされている場合は以下で実行可能

```sh
ts-node app.ts
```

または以下の手順で実行可能

```sh
tsc
```

```sh
node dist/app.js
```

localhost:4444/ にアクセスすると`index.html`の内容が表示される
