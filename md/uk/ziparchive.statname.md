- [« ZipArchive::statIndex](ziparchive.statindex.md)
- [ZipArchive::unchangeAll »](ziparchive.unchangeall.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- отримання детальної інформації про елемент за його ім'ям

# ZipArchive::statName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.5.0)

ZipArchive::statName — Отримання детальної інформації про його елемент
імені

### Опис

public **ZipArchive::statName**(string `$name`, int `$flags` u003d 0):
array\|false

Отримання детальної інформації про елемент на його ім'я.

### Список параметрів

`name`
Назва елемента.

`flags`
Прапор, який вказує, як має відбуватися пошук імені. Крім того, може
вказуватись **`ZipArchive::FL_UNCHANGED`**, щоб запросити інформацію
про вихідний файл в архіві, ігноруючи будь-які внесені зміни.

- **`ZipArchive::FL_NOCASE`**

- **`ZipArchive::FL_NODIR`**

- **`ZipArchive::FL_UNCHANGED`**

### Значення, що повертаються

Повертає масив, що містить детальну інформацію про елемент або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Отримання статистичної інформації про елемент**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip');if ($res u003du003du003d TRUE) {    print_r($zip->statName('foobar/baz') ); $zip->close();}else {    echo 'Помилка з кодом:' . $res;}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[name] u003d> foobar/baz
[index] u003d> 3
[crc] u003d> 499465816
[size] u003d> 27
[mtime] u003d> 1123164748
[comp_size] u003d> 24
[comp_method] u003d> 8
)
