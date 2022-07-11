- [« SplFileInfo::isFile](splfileinfo.isfile.md)
- [SplFileInfo::isReadable »](splfileinfo.isreadable.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Вказує, чи є файл посиланням

# SplFileInfo::isLink

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::isLink — Вказує, чи є файл посиланням

### Опис

public **SplFileInfo::isLink**(): bool

Використовуйте цей метод, щоб перевірити, чи є файл, на який
посилається на об'єкт SplFileInfo, посиланням.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл є посиланням; **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::isLink()****

` <?php$info u003d new SplFileInfo('/path/to/symlink');if ($info->isLink()) {    echo 'Реальний шлях: '.$info->getRealPath();}?> `

### Дивіться також

- [SplFileInfo::getRealPath()](splfileinfo.getrealpath.md) -
Отримує абсолютний шлях до файлу
