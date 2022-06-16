- [«readfile](function.readfile.md)
- [realpath_cache_get »](function.realpath-cache-get.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Повертає файл, на який вказує символічне посилання

# readlink

(PHP 4, PHP 5, PHP 7, PHP 8)

readlink — Повертає файл, на який вказує символічне посилання

### Опис

**readlink**(string `$path`): string\|false

**readlink()** робить те саме, що і функція C readlink.

### Список параметрів

`path`
Шлях до символічного посилання.

### Значення, що повертаються

Повертає шлях, на який вказує символічне посилання, або
**`false`** у разі виникнення помилки.

> **Примітка**: Функція завершується помилкою, якщо `path` не є
> символічним посиланням, крім Windows, де буде повернутий
> нормалізований шлях.

### Приклади

**Приклад #1 Приклад використання функції **readlink()****

`<?php// виведе щось на зразок/boot/vmlinux-2.4.20-xfsecho readlink('/vmlinuz');?> `

### Дивіться також

- [is_link()](function.is-link.md) - Визначає, чи є файл
символічним посиланням
- [symlink()](function.symlink.md) - Створює символічне посилання
- [linkinfo()](function.linkinfo.md) - Повертає інформацію про
засланні
