- [«finfo_open](function.finfo-open.md)
- [mime_content_type »](function.mime-content-type.md)

- [PHP Manual](index.md)
- [Функції модуля Fileinfo](ref.fileinfo.md)
- Встановлює параметри конфігурації libmagic

#finfo_set_flags

# finfo::set_flags

(PHP \>u003d 5.3.0, PHP 7, PHP 8, PECL fileinfo \>u003d 0.1.0)

finfo_set_flags -- finfo::set_flags — Встановлює параметри
конфігурації libmagic

### Опис

Процедурний стиль

[finfo_set_flags](finfo.set-flags.md)([finfo](class.finfo.md)
`$finfo`, int `$flags`): bool

Об'єктно-орієнтований стиль

public [finfo::set_flags](finfo.set-flags.md)(int `$flags`): bool

Функція визначає різні параметри Fileinfo. Опції також можуть
бути встановлені безпосередньо в [finfo_open()](function.finfo-open.md) або
інших функцій Fileinfo.

### Список параметрів

`finfo`
Примірник [finfo](class.finfo.md), що повертається функцією
[finfo_open()](function.finfo-open.md).

`flags`
Одна або кілька об'єднаних через бінарне АБО [констант
Fileinfo](fileinfo.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.1.0 | Параметр `finfo` тепер чекає на екземпляр [finfo](class.finfo.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
