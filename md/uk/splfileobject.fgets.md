- [« SplFileObject::fgetcsv](splfileobject.fgetcsv.md)
- [SplFileObject::fgetss »](splfileobject.fgetss.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримує рядок із файлу

# SplFileObject::fgets

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fgets — Отримує рядок із файлу

### Опис

public **SplFileObject::fgets**(): string

Отримує рядок із файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, що містить наступний рядок із файлу, або **`false`**
у разі виникнення помилки.

### Помилки

Викидає [RuntimeException](class.runtimeexception.md), якщо файл
не може бути прочитаним.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fgets()****

Цей приклад рядково виводить вміст `file.txt`.

` <?php$file u003d new SplFileObject("file.txt");while (!$file->eof()) {    echo $file->fgets();}?> `

### Дивіться також

- [fgets()](function.fgets.md) - Читає рядок із файлу
- [SplFileObject::fgetss()](splfileobject.fgetss.md) - Отримати
рядок з файлу та видалити теги HTML
- [SplFileObject::fgetc()](splfileobject.fgetc.md) - Отримує символ
з файлу
- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
