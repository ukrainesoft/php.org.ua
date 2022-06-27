- [«set_time_limit](function.set-time-limit.md)
- [version_compare »](function.version-compare.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає шлях до директорії тимчасових файлів

#sys_get_temp_dir

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8)

sys_get_temp_dir — Повертає шлях до каталогу тимчасових файлів

### Опис

**sys_get_temp_dir**(): string

Повертає шлях до директорії, де PHP за замовчуванням зберігає тимчасові
файли.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до каталогу тимчасових файлів.

### Приклади

**Приклад #1 Приклад використання **sys_get_temp_dir()****

`<?php// Створення тимчасового файлу в директорії// тимчасових файлів, використовуючи sys_get_temp_dir()$temp_file u003d tempnam(sys_get_temp_dir(), 'Tux')'ech;

Результатом виконання цього прикладу буде щось подібне:

C:\Windows\Temp\TuxA318.tmp

### Дивіться також

- [tmpfile()](function.tmpfile.md) - Створює тимчасовий файл
- [tempnam()](function.tempnam.md) - Створює файл із унікальним
ім'ям
