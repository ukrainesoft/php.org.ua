- [«bzflush](function.bzflush.md)
- [bzread »](function.bzread.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Відкриває файл, стислий за допомогою bzip2

#bzopen

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzopen — Відкриває файл, стислий за допомогою bzip2

### Опис

**bzopen**(string\|resource `$file`, string `$mode`): resource\|false

**bzopen()** відкриває bzip2 (`.bz2`) файл читання чи записи.

### Список параметрів

`file`
Ім'я файлу, що відкривається, або існуючий ресурс потоку.

`mode`
Підтримуються тільки ``r'` (читання) та ``w'` (запис). Все інше
змусить **bzopen()** повернути **`false`**.

### Значення, що повертаються

**bzopen()** повертається покажчик на відкритий файл, або **`false`**,
якщо файл відкрити не вдалося.

### Приклади

**Приклад #1 Приклад використання **bzopen()****

` <?php$file u003d "/tmp/foo.bz2";$bz u003d bzopen($file, "r") or die("Неможу відкрити $file для читання");bzclose($bz);?> `

### Дивіться також

- [bzclose()](function.bzclose.md) - Закриває файл bzip2
