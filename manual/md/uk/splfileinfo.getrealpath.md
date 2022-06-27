- [« SplFileInfo::getPerms](splfileinfo.getperms.md)
- [SplFileInfo::getSize »](splfileinfo.getsize.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує абсолютний шлях до файлу

# SplFileInfo::getRealPath

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

SplFileInfo::getRealPath — Отримує абсолютний шлях до файлу

### Опис

public **SplFileInfo::getRealPath**(): string\|false

Цей спосіб розпаковує всі символічні посилання, дозволяє
відносні шляхи та повертає абсолютний шлях до файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до файлу або **`false`**, якщо файл не існує.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getRealPath()****

` <?php$info u003d new SplFileInfo('/..//.../../'.__FILE__);var_dump($info->getRealPath());$info u003d new SplFileInfo('/tmp' );var_dump($info->getRealPath());$info u003d new SplFileInfo('/I/Do/Not/Exist');var_dump($info->getRealPath());$info u003d new SplFileInfo('php ://output');var_dump($info->getRealPath());$info u003d new SplFileInfo("");var_dump($info->getRealPath());?> `

Результатом виконання цього прикладу буде щось подібне:

string(28) "/private/tmp/phptempfile.php"
string(12) "/private/tmp"
bool(false)
bool(false)
string(12) "/private/tmp"

### Дивіться також

- [SplFileInfo::isLink()](splfileinfo.islink.md) - Вказує,
чи є файл посиланням
- [realpath()](function.realpath.md) - Повертає канонізований
абсолютний шлях до файлу
