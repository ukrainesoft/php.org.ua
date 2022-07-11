- [« ZipArchive::locateName](ziparchive.locatename.md)
- [ZipArchive::registerCancelCallback
»](ziparchive.registercancelcallback.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Відкриває ZIP-архів

# ZipArchive::open

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::open — Відкриває ZIP-архів

### Опис

public **ZipArchive::open**(string `$filename`, int `$flags` u003d 0):
bool\|int

Відкриває новий або існуючий ZIP-архів для читання, запису або
зміни.

Починаючи з libzip 1.6.0, порожній файл більше не є коректним
архівом.

### Список параметрів

`filename`
Ім'я ZIP-архіву для відкриття.

`flags`
Режим відкриття файлів, що використовується.

- **`ZipArchive::OVERWRITE`**

- **`ZipArchive::CREATE`**

- **`ZipArchive::RDONLY`**

- **`ZipArchive::EXCL`**

- **`ZipArchive::CHECKCONS`**

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або один з
наступних кодів помилки:

**`ZipArchive::ER_EXISTS`**
Файл існує.

**`ZipArchive::ER_INCONS`**
Несумісний ZIP-архів.

**`ZipArchive::ER_INVAL`**
Неприпустимий аргумент.

**`ZipArchive::ER_MEMORY`**
Помилка динамічного виділення пам'яті.

**`ZipArchive::ER_NOENT`**
Нема такого файлу.

**`ZipArchive::ER_NOZIP`**
Чи не є ZIP-архівом.

**`ZipArchive::ER_OPEN`**
Неможливо відкрити файл.

**`ZipArchive::ER_READ`**
Помилка читання.

**`ZipArchive::ER_SEEK`**
Помилка пошуку.

### Приклади

**Приклад #1 Відкриття та вилучення**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip');if ($res u003du003du003d TRUE) {   echo 'готово'; $zip->extractTo('test'); $zip->close();} else {    echo 'помилка з кодом:' . $res;}?> `

**Приклад #2 Створення архіву**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFromString('test. txt', 'вміст файлу'); $zip->addFile('data.txt', 'entryname.txt'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

**Приклад #3 Створити тимчасовий архів**

` <?php$name u003d tempnam(sys_get_temp_dir(), "FOO");$zip u003d new ZipArchive;$res u003d $zip->open($name, ZipArchive::OVERWRITE); /* усічення, оскільки порожній файл недопустимо */if ($res u003du003du003d TRUE) {    $zip->addFile('data.txt', 'entryname.txt'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `
