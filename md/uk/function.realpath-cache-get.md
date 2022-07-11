- [«readlink](function.readlink.md)
- [realpath_cache_size »](function.realpath-cache-size.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Отримує записи з кеша realpath

#realpath_cache_get

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8)

realpath_cache_get — Отримує записи з кеша realpath

### Опис

**realpath_cache_get**(): array

Отримує вміст кешу реального шляху.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив записів із кеша realpath. Ключі є записами
realpath, а значення є масивами даних, що містять обчислений
шлях, час життя кеша та інших даних, що зберігаються у кеші.

### Приклади

**Приклад #1 Приклад використання **realpath_cache_get()****

` <?phpvar_dump(realpath_cache_get());?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["/test"] u003d> array(4) {
["key"] u003d> int(123456789)
["is_dir"] u003d> bool(true)
["realpath"] u003d> string(5) "/test"
["expires"] u003d> int(1260318939)
}
["/test/test.php"] u003d> array(4) {
["key"] u003d> int(987654321)
["is_dir"] u003d> bool(false)
["realpath"] u003d> string(12) "/root/test.php"
["expires"] u003d> int(1260318939)
}
}

### Дивіться також

- [realpath_cache_size()](function.realpath-cache-size.md) -
Отримує розмір кеша realpath
