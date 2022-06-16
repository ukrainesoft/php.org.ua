- [« Функції Zlib](ref.zlib.md)
- [deflate_init »](function.deflate-init.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Інкрементальне стиснення даних

#deflate_add

(PHP 7, PHP 8)

deflate_add - Інкрементальне стиснення даних

### Опис

**deflate_add**([DeflateContext](class.deflatecontext.md) `$context`,
string `$data`, int `$flush_mode` u003d **`ZLIB_SYNC_FLUSH`**):
string\|false

Інкрементальне стискування даних у зазначеному контексті.

### Список параметрів

`context`
Контекст, створений за допомогою функції
[deflate_init()](function.deflate-init.md).

`data`
Блок даних стиснення.

`flush_mode`
Одна з констант: **`ZLIB_BLOCK`**, **`ZLIB_NO_FLUSH`**,
**`ZLIB_PARTIAL_FLUSH`**, **`ZLIB_SYNC_FLUSH`** (за замовчуванням),
**`ZLIB_FULL_FLUSH`**, **`ZLIB_FINISH`**. Зазвичай потрібно встановити
**`ZLIB_NO_FLUSH`** для максимальної компресії та **`ZLIB_FINISH`** для максимальної компресії
завершення на останньому блоці даних. Детальний опис констант
дивіться в [»керівництві zlib](http://www.zlib.net/manual.md).

### Значення, що повертаються

Повертає блок стислих даних або **`false`** у разі виникнення
помилки.

### Помилки

У разі некоректних аргументів буде викликано помилку рівня
**`E_WARNING`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------|
| 8.0.0 | `context` чекає екземпляр [DeflateContext](class.deflatecontext.md); раніше, очікувався ресурс (resource). |

### Дивіться також

- [deflate_init()](function.deflate-init.md) - Ініціалізувати
контекст інкрементального стиснення
