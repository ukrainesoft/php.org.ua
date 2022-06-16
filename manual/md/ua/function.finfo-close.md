- [«finfo_buffer](function.finfo-buffer.md)
- [finfo_file »](function.finfo-file.md)

- [PHP Manual](index.md)
- [Функції модуля Fileinfo](ref.fileinfo.md)
- Закриває екземпляр finfo

#finfo_close

(PHP \>u003d 5.3.0, PHP 7, PHP 8, PECL fileinfo \>u003d 0.1.0)

finfo_close — Закриває екземпляр finfo

### Опис

**finfo_close**([finfo](class.finfo.md) `$finfo`): bool

Функція закриває екземпляр, який було відкрито функцією
[finfo_open()](function.finfo-open.md).

### Список параметрів

`finfo`
Примірник [finfo](class.finfo.md), що повертається функцією
[finfo_open()](function.finfo-open.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.1.0 | Параметр `finfo` тепер чекає на екземпляр [finfo](class.finfo.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
