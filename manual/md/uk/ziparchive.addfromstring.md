- [« ZipArchive::addFile](ziparchive.addfile.md)
- [ZipArchive::addGlob »](ziparchive.addglob.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Додає файл до ZIP-архіву, використовуючи його вміст

# ZipArchive::addFromString

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::addFromString — Додає файл до ZIP-архіву, використовуючи його
вміст

### Опис

public **ZipArchive::addFromString**(string `$name`, string `$content`,
int `$flags` u003d ZipArchive::FL_OVERWRITE): bool

Додає файл до ZIP-архіву, використовуючи його вміст.

> **Примітка**: Для максимальної переносимості рекомендується завжди
> використовувати прямі сліші (`/`) як роздільник директорій в
> імена файлів.

### Список параметрів

`name`
Локальне ім'я файлу для створення.

`content`
Вміст для створення файлу. Використовується у двійковому безпечному
режимі.

`flags`
Бітова маска, що складається з **`ZipArchive::FL_OVERWRITE`**,
**`ZipArchive::FL_ENC_GUESS`**, **`ZipArchive::FL_ENC_UTF_8`**,
**`ZipArchive::FL_ENC_CP437`**. Поведінка констант описано на сторінці
[ZIP-константи](zip.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|----------------------------|
| 8.0.0/1.18.0 | Доданий параметр `flags`. |

### Приклади

**Приклад #1 Додати запис до нового архіву**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFromString('test. txt', 'тут следует вміст файла'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

**Приклад #2 Додати файл до директорії всередині архіву**

` <?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {    $zip->addFromString('dir/test.txt', 'тут следует вміст' ); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `
