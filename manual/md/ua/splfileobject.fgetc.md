- [« SplFileObject::fflush](splfileobject.fflush.md)
- [SplFileObject::fgetcsv »](splfileobject.fgetcsv.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримує символ із файлу

# SplFileObject::fgetc

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fgetc — Отримує символ із файлу

### Опис

public **SplFileObject::fgetc**(): string\|false

Отримує символ із файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, що містить один символ, прочитаний із файлу, або
**`false`** при досягненні кінця файлу (EOF).

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальнішу інформацію зверніться до розділу [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fgetc()****

` <?php$file u003d new SplFileObject('file.txt');while (false !u003du003d ($char u003d $file->fgetc())) {   echo "$char
";}?> `

### Дивіться також

- [SplFileObject::fgets()](splfileobject.fgets.md) - Отримує рядок
з файлу
