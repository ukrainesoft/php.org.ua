- [« SplFileInfo::getSize](splfileinfo.getsize.md)
- [SplFileInfo::isDir »](splfileinfo.isdir.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує тип файлу

# SplFileInfo::getType

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getType — Отримує тип файлу

### Опис

public **SplFileInfo::getType**(): string\|false

Повертає тип файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок (string), що представляє тип елемента. Можливі наступні
значення: `file`, `link`, `dir`, `block`, `fifo`, `char`, `socket` або
`unknown`. У разі виникнення помилки повертає **`false`**.

### Помилки

Викидає [RuntimeException](class.runtimeexception.md) у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getType()****

` <?php$info u003d new SplFileInfo(__FILE__);echo $info->getType().PHP_EOL;$info u003d new SplFileInfo(dirname(__FILE__));echo $info->getType();?> `

Результатом виконання цього прикладу буде щось подібне:

file
dir
