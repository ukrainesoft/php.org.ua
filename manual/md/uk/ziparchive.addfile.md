- [« ZipArchive::addEmptyDir](ziparchive.addemptydir.md)
- [ZipArchive::addFromString »](ziparchive.addfromstring.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Додає до ZIP-архіву файл по зазначеному шляху

# ZipArchive::addFile

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::addFile — Додає до ZIP-архіву файл за вказаним шляхом

### Опис

public **ZipArchive::addFile**(
string `$filepath`,
string `$entryname` u003d "",
int `$start` u003d 0,
int `$length` u003d 0,
int `$flags` u003d ZipArchive::FL_OVERWRITE
): bool

Додає до ZIP-архіву файл по зазначеному шляху.

> **Примітка**: Для максимальної переносимості рекомендується завжди
> використовувати прямі сліші (`/`) як роздільник директорій в
> імена файлів.

### Список параметрів

`filepath`
Шлях до файлу для додавання.

`entryname`
Ім'я файлу всередині ZIP-архіву. Якщо зазначено, то перевизначить `filepath`.

`start`
Для часткового копіювання є початкова позиція.

`length`
Для часткового копіювання - довжина файлу, що копіюється, якщо 0 або -1,
використовується весь файл (починаючи з `start`).

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

У даному прикладі відкривається файл ZIP-архіву `test.zip` і до нього
додається файл `/path/to/index.txt` під ім'ям `newname.txt`.

**Приклад #1 Відкрити та додати**

` <?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {   $zip->addFile('/path/to/index.txt', 'newname. txt'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

### Примітки

> **Примітка**:
>
> У процесі додавання файлу до архіву PHP заблокує файл.
> Розблокування відбувається лише після закриття об'єкта
> [ZipArchive](class.ziparchive.md) шляхом виклику
> [ZipArchive::close()](ziparchive.close.md) або знищення об'єкта
> [ZipArchive](class.ziparchive.md). Це запобігає видаленню тільки
> що доданий в архів файл до того, як він буде розблокований.

### Дивіться також

- [ZipArchive::replaceFile()](ziparchive.replacefile.md) - Замінює
файл у ZIP-архіві вказаним шляхом
