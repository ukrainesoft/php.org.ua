- [« ZipArchive::renameName](ziparchive.renamename.md)
- [ZipArchive::setArchiveComment »](ziparchive.setarchivecomment.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Замінює файл у ZIP-архіві вказаним шляхом

# ZipArchive::replaceFile

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.18.0)

ZipArchive::replaceFile — Замінює файл у ZIP-архіві вказаним шляхом

### Опис

public **ZipArchive::replaceFile**(
string `$filepath`,
int `$index`,
int `$start` u003d 0,
int `$length` u003d 0,
int `$flags` u003d 0
): bool

Замінює файл у ZIP-архіві вказаним шляхом.

> **Примітка**: Для максимальної переносимості рекомендується завжди
> використовувати прямі сліші (`/`) як роздільник директорій в
> імена файлів.

### Список параметрів

`filepath`
Шлях до файлу для додавання.

`index`
Індекс файлу, який замінюється, його ім'я не змінюється.

`start`
Для часткового копіювання є початкова позиція.

`length`
Для часткового копіювання – довжина, яку потрібно скопіювати, якщо 0
або -1, використовується весь файл (починаючи з `start`).

`flags`
Бітова маска, що складається з **`ZipArchive::FL_ENC_GUESS`**,
**`ZipArchive::FL_ENC_UTF_8`**, **`ZipArchive::FL_ENC_CP437`**.
Поведінка цих констант описана на сторінці [Константи
ZIP](zip.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

У цьому прикладі відкривається ZIP-архів `test.zip` та замінюється запис з
індексом 1 на `/path/to/index.txt`.

**Приклад #1 Відкриття та заміна**

` <?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {   $zip->replaceFile('/path/to/index.txt', 1); $zip->close(); echo 'Ок';} else {    echo 'Помилка';}?> `

### Дивіться також

- [ZipArchive::addFile()](ziparchive.addfile.md) - Додає до
ZIP-архів файл за вказаним шляхом
