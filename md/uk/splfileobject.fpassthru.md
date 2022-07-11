- [« SplFileObject::flock](splfileobject.flock.md)
- [SplFileObject::fputcsv »](splfileobject.fputcsv.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Виводить весь вміст файлу, що залишився, у вихідний потік

# SplFileObject::fpassthru

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fpassthru — Виводить весь вміст файлу, що залишився в
вихідний потік

### Опис

public **SplFileObject::fpassthru**(): int

Читає дані з файлу з поточної позиції до кінця файлу і поміщає їх у
буфер вихідного потоку.

Якщо ви вже записали якісь дані у файл і вам необхідно повернутися
на початкову позицію, файловий покажчик можна скинути методом
[SplFileObject::rewind()](splfileobject.rewind.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість символів, прочитаних з дескриптора `handle` та
переданих висновку.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fpassthru()****

` <?php//Відкрити файл в режимі читання двійкових даних$file u003d new SplFileObject("./img/ok.png", "rb");// Відправити правильні заголовкиheader("Conte ;header("Content-Length: " . $file->getSize());// Вивести зображення і завершити роботу скрипта$file->fpassthru();exit;?> `

### Дивіться також

- [fpassthru()](function.fpassthru.md) - Виводить всі, що залишилися.
дані з файлового покажчика
