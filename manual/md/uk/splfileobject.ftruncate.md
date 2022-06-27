- [« SplFileObject::ftell](splfileobject.ftell.md)
- [SplFileObject::fwrite »](splfileobject.fwrite.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Обрізає файл до заданої довжини

# SplFileObject::ftruncate

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::ftruncate — Обрізає файл до заданої довжини

### Опис

public **SplFileObject::ftruncate**(int `$size`): bool

Відкидає усі дані у файлі після байта `size`.

### Список параметрів

`size`
Розмір, під який потрібно підігнати файл.

> **Примітка**:
>
> Якщо `size` більше поточного розміру файлу, в кінці будуть додані
> нульові байти.
>
> Якщо `size` менше розміру файлу, зайві дані будуть втрачені.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::ftruncate()****

`<?php// Створити файл, містить "Hello World!"$file u003d new SplFileObject("/tmp/ftruncate", "w+");$file->fwrite("Hello World!");// Обрізати до 5 байт$file->ftruncate(5);// Перемотання до початку файла і читання дані$file->rewind();echo $file->fgets();?> `

Результатом виконання цього прикладу буде щось подібне:

Hello

### Дивіться також

- [ftruncate()](function.ftruncate.md) - Урізує файл до вказаного
довжини
