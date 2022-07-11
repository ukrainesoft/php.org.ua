- [«bzopen](function.bzopen.md)
- [bzwrite »] (function.bzwrite.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Бінарно-безпечне читання файлу bzip2

#bzread

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzread — Бінарно-безпечне читання файлу bzip2

### Опис

**bzread**(resource `$bz`, int `$length` u003d 1024): string\|false

**bzread()** читає з переданого bzip2 файлового покажчика.

Читання зупиняється, якщо було раховано `length` (несжатих) байт або
було досягнуто кінця файлу, залежно від того, що відбудеться раніше.

### Список параметрів

`bz`
Вказівник на файл. Повинен бути коректним і вказувати на файл успішно
відкритий [bzopen()](function.bzopen.md).

`length`
Якщо не вказано, **bzread()** зчитуватиме 1024 (нестиснутих) байтів за
один раз. За один раз може бути раховано максимум 8192 байти.

### Значення, що повертаються

Повертає розпаковані дані або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **bzread()****

` <?php$file u003d "/tmp/foo.bz2";$bz u003d bzopen($file, "r") or die("Неможливо відкрити $file");$decompressed_file u003d '';while (!feof( $bz)) {  $decompressed_file .u003d bzread($bz, 4096);}bzclose($bz);echo "Вміст $file: <br />
";echo $decompressed_file;?> `

### Дивіться також

- [bzwrite()](function.bzwrite.md) - Бінарно-безпечний запис bzip2
файлу
- [feof()](function.feof.md) - Перевіряє, чи кінець файлу досягнуто
- [bzopen()](function.bzopen.md) - Відкриває файл, стислий з
використанням bzip2
