- [« RarEntry::getMethod](rarentry.getmethod.md)
- [RarEntry::getPackedSize »](rarentry.getpackedsize.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Повертає ім'я елемента

# RarEntry::getName

(PECL rar \>u003d 0.1)

RarEntry::getName — Повертає ім'я елемента

### Опис

public **RarEntry::getName**(): string

Повертає ім'я елемента масиву (разом із шляхом).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я елемента у вигляді рядка, або **`false`** у випадку
виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- ---------------------------------------|
| PECL rar 2.0.0 | Починаючи з версії 2.0.0, повертається рядок у кодуванні Unicode/UTF-8. |

### Приклади

**Приклад #1 Приклад використання **RarEntry::getName()****

`<?php// цей приклад працює, навіть сторінка не в кодуванні UTF-8// для перекодування в UTF-8 викликається mb_convert_encoding$rar_file u003d rar_open );$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не удалося найти такий запис");echo "Ім'яелемента: " . mb_convert_encoding(htmlentities(   htmlentities(        $entry->getName(),        ENT_COMPAT,                  |)
