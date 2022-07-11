- [« PharFileInfo::getPharFlags](pharfileinfo.getpharflags.md)
- [PharFileInfo::isCRCChecked »](pharfileinfo.iscrcchecked.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Перевірити, чи є у файлу метадані

# PharFileInfo::hasMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

PharFileInfo::hasMetadata — Перевірити, чи є у файлу метадані

### Опис

public **PharFileInfo::hasMetadata**(): bool

Перевіряє, чи є файли метадані.

### Список параметрів

Немає параметрів.

### Значення, що повертаються

Повертає **`false`** або **`true`** (метадані, рівні **`null`**,
вважаються за відсутність метаданих)

### Дивіться також

- [PharFileInfo::setMetadata()](pharfileinfo.setmetadata.md) -
Встановлення метаданих для файлу
- [PharFileInfo::getMetadata()](pharfileinfo.getmetadata.md) -
Отримати метадані, пов'язані з файлом
- [PharFileInfo::delMetadata()](pharfileinfo.delmetadata.md) -
Видалити метадані файлу
- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані
- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
