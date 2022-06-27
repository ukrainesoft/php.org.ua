- [« SplFileInfo::getATime](splfileinfo.getatime.md)
- [SplFileInfo::getCTime »](splfileinfo.getctime.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує базове ім'я файлу

# SplFileInfo::getBasename

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

SplFileInfo::getBasename — Отримує базове ім'я файлу

### Опис

public **SplFileInfo::getBasename**(string `$suffix` u003d ""): string

Цей метод повертає базове ім'я файлу, каталогу чи посилання без
інформації про шлях.

### Список параметрів

`suffix`
Необов'язковий суфікс, який виключено з базового імені.

**Застереження**
**SplFileInfo::getBasename()** враховує локаль, тому, щоб побачити
коректне базове ім'я файлу з багатобайтовими символами у дорозі,
відповідна локаль має бути встановлена за допомогою функції
[setlocale()](function.setlocale.md).

### Значення, що повертаються

Повертає базове ім'я без інформації про шлях.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getBasename()****

` <?php$info u003d new SplFileInfo('file.txt');var_dump($info->getBasename());$info u003d new SplFileInfo('/path/to/file.txt');var_dump($info ->getBasename());$info u003d new SplFileInfo('/path/to/file.txt');var_dump($info->getBasename('.txt'));?> `

Результатом виконання цього прикладу буде щось подібне:

string(8) "file.txt"
string(8) "file.txt"
string(4) "file"

### Дивіться також

- [SplFileInfo::getFilename()](splfileinfo.getfilename.md) -
Отримує ім'я файлу
