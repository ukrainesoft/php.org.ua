- [«get_include_path](function.get-include-path.md)
- [get_loaded_extensions »](function.get-loaded-extensions.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає масив імен увімкнених у скрипт файлів

# get_included_files

(PHP 4, PHP 5, PHP 7, PHP 8)

get_included_files — Повертає масив імен, включених у скрипт файлів

### Опис

**get_included_files**(): array

Отримує імена всіх файлів, які були включені в скрипт з
використанням [include](function.include.md),
[include_once](function.include-once.md),
[require](function.require.md) або
[require_once](function.require-once.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, який містить імена всіх файлів.

Скрипт, який був завантажений спочатку, розглядається як "включений
файл", тому він також потрапить до списку файлів увімкнених функцією
[include](function.include.md) чи іншими.

Файли, що додаються в скрипт неодноразово, потраплять до масиву тільки в
одному примірнику.

### Приклади

**Приклад #1 Приклад використання **get_included_files()****

`<?php//Цей скрипт розташований в файлі abc.phpinclude 'test1.php';include_once 'test2.php';require 'test3.php';require_once 'test4.php';$ | $included_files as $filename) {    echo "$filename
";}?> `

Результат виконання цього прикладу:

/path/to/abc.php
/path/to/test1.php
/path/to/test2.php
/path/to/test3.php
/path/to/test4.php

### Дивіться також

- [include](function.include.md) - include
- [include_once](function.include-once.md) - include_once
- [require](function.require.md) - require
- [require_once](function.require-once.md) - require_once
- [get_required_files()](function.get-required-files.md) - Псевдонім
get_included_files
