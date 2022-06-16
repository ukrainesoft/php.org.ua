- [« ZipArchive::addFromString](ziparchive.addfromstring.md)
- [ZipArchive::addPattern »](ziparchive.addpattern.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Додати файли з директорії відповідно до шаблону

# ZipArchive::addGlob

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL zip \>u003d 1.9.0)

ZipArchive::addGlob — Додати файли з директорії відповідно до
шаблоном

### Опис

public **ZipArchive::addGlob**(string `$pattern`, int `$flags` u003d 0,
array `$options` u003d \[\]): array\|false

Додати файли з директорії відповідно до шаблону `pattern`.

> **Примітка**: Для максимальної переносимості рекомендується завжди
> використовувати прямі сліші (`/`) як роздільник директорій в
> імена файлів.

### Список параметрів

`pattern`
Шаблон функції [glob()](function.glob.md), за яким будуть
вибирати файли.

`flags`
Бітова маска прапорів `glob()`.

`options`
Асоціативний масив опцій. Доступні значення:

- ``add_path''

Префікс, який буде додаватися на початок локального шляху
архів. Накладається після застосування операцій, заданих у
`remove_path` або `remove_all_path`.

- ``remove_path''

Префікс, який буде видалено з дороги перед додаванням до архіву.

- ``remove_all_path''

Встановіть як **`true`** для використання лише імені файлів та
складання їх у корінь архіву.

- ``flags'`

Бітова маска, що складається з **`ZipArchive::FL_OVERWRITE`**,
**`ZipArchive::FL_ENC_GUESS`**, **`ZipArchive::FL_ENC_UTF_8`**,
**`ZipArchive::FL_ENC_CP437`**. Поведінка констант описано на
сторінці [ZIP-константи](zip.constants.md).

- ``comp_method'`

Метод стиснення, одна з констант **`ZipArchive::CM_*`**, дивіться
сторінку [константи ZIP](zip.constants.md).

- ``comp_flags'`

Рівень стиснення.

- ``enc_method'`

Метод шифрування, одна з констант **`ZipArchive::EM_*`**, дивіться
сторінку [константи ZIP](zip.constants.md).

- ``enc_password'`

Пароль, який використовується для шифрування.

### Значення, що повертаються

Масив (array) доданих файлів у разі успішного виконання або
**`false`** у разі виникнення помилки Повертає **`true`** у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- -------------------------------------------------- -------------------|
| 8.0.0/1.18.0 | Доданий параметр ``flags'` в `options`. |
| 8.0.0/1.18.1 | Додані параметри 'comp_method', 'comp_flags', enc_method і enc_password в options. |

### Приклади

**Приклад #1 Приклад використання **ZipArchive::addGlob()****

Додати до архіву всі текстові файли та файли скриптів PHP з поточної
директорії

` <?php$zip u003d new ZipArchive();$ret u003d $zip->open('application.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);if ($ret !u003du003d TRUE) { 'Помилка з кодом %d', $ret);} else {    $options u003d array('add_path' u003d> 'sources/', 'remove_all_path' u003d> TRUE); $zip->addGlob('*.{php,txt}', GLOB_BRACE, $options); $zip->close();}?> `

### Дивіться також

- [ZipArchive::addFile()](ziparchive.addfile.md) - Додає до
ZIP-архів файл за вказаним шляхом
- [ZipArchive::addPattern()](ziparchive.addpattern.md) - Додати
файли з директорії відповідно до шаблону регулярного виразу
PCRE
