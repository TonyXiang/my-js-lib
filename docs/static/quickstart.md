# 快速上手
## 使用`npm`引入
```bash
npm i bxs-js-tools -S
```

全局引入
```js
import Bxs from 'bxs-js-tools'

Bxs.minus(2, 1)
```

按需引入
```js
import minus from 'bxs-js-tools/lib/minus'

minus(2, 1)
```

## 使用CDN引入
```html
<script src="//unpkg.com/docsify/lib/docsify.min.js" type="text/javascript"></script>

<script>
  window.onload = function() {
    Bxs.minus(2, 1)
  }
</script>
```
