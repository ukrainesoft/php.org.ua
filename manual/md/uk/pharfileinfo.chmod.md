- [«PharFileInfo](class.pharfileinfo.md)
- [PharFileInfo::compress »](pharfileinfo.compress.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Встановлення прав доступу

# PharFileInfo::chmod

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::chmod — Встановлення прав доступу

### Опис

public **PharFileInfo::chmod**(int `$perms`): void

**PharFileInfo::chmod()** дозволяє встановлювати біти дозволів на
запуск та читання для файлів. Біти запису ігноруються, оскільки
налаштовуються під час виконання на підставі значення INI-змінної
[phar.readonly](phar.configuration.md#ini.phar.readonly). Як і для
будь-якого іншого функціоналу, що модифікує phar-архів, необхідно,
щоб змінна
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
вимкнено для успішної зміни прав на файл в архіві
[Phar](class.phar.md). Архіви [PharData](class.phardata.md) не мають
таких обмежень.

### Список параметрів

`perms`
Дозволи (дивіться опис функції [chmod()](function.chmod.md))

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::chmod()****

`<?php// удалимо, на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar('brandnewphar.phar', 0, 'brandnewphar.phar'); $p['file.sh'] u003d '#!/usr/local/lib/php    <?php echo "привіт"; ?>'; // встановимо біт виконання   $p['file.sh']->chmod(0555); var_dump($p['file.sh']->isExecutable());} catch (Exception $e) {   echo 'Не удалося створити/змінити phar: ', $e;}?> `

Результат виконання цього прикладу:

bool(true)
