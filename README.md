# note-node-backend
## egg.js + mysql
<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### 步骤

- service：SQL语句获取数据库数据
- controller：拿到数据后，开始处理逻辑
- router：接口地址，调用处理逻辑的方法
