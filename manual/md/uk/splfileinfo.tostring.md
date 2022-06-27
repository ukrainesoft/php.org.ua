- [« SplFileInfo::setInfoClass](splfileinfo.setinfoclass.md)
- [SplFileObject »](class.splfileobject.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Повертає шлях до файлу у вигляді рядка

# SplFileInfo::\_\_toString

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::\_\_toString — Повертає шлях до файлу у вигляді рядка

### Опис

public **SplFileInfo::\_\_toString**(): string

Цей метод поверне ім'я файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до файлу.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::\_\_toString()****

` <?php$info u003d new SplFileInfo('foo');var_dump($info->__toString());echo $info.PHP_EOL;$info u003d new SplFileInfo('/usr/bin/php');var_dump( $info->__toString());echo $info.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

string(3) "foo"
foo
string(12) "/usr/bin/php"
/usr/bin/php
