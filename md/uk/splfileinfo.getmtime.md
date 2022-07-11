- [« SplFileInfo::getLinkTarget](splfileinfo.getlinktarget.md)
- [SplFileInfo::getOwner »](splfileinfo.getowner.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує час останньої зміни

# SplFileInfo::getMTime

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getMTime — Отримує час останньої зміни

### Опис

public **SplFileInfo::getMTime**(): int\|false

Повертає час, коли вміст файлу було змінено. Час
повертається у форматі тимчасової мітки Unix.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час останньої зміни файлу у форматі тимчасової мітки
Unix у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Дивіться також

- [filemtime()](function.filemtime.md) - Повертає час останнього
зміни файлу
