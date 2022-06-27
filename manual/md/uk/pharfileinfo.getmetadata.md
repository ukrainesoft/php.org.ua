- [« PharFileInfo::getContent](pharfileinfo.getcontent.md)
- [PharFileInfo::getPharFlags »](pharfileinfo.getpharflags.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Отримати метадані, пов'язані з файлом

# PharFileInfo::getMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::getMetadata — Отримати метадані, пов'язані з файлом

### Опис

public **PharFileInfo::getMetadata**(array `$unserializeOptions` u003d
\[\]):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає метадані, пов'язані з файлом.

### Список параметрів

### Значення, що повертаються

Будь-яка змінна PHP, яка може бути серіалізована та збережена в
вигляді метаданих файлу, або **`null`**, якщо метаданих немає.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | Додано параметр `unserializeOptions`. |

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::getMetadata()****

`<?php// удалимо, на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, ';'; $p['file.txt'] u003d 'hello'; $p['file.txt']->setMetadata(array('user' u003d> 'bill', 'mime-type' u003d> 'text/plain'))); var_dump($p['file.txt']->getMetadata());} catch (Exception $e) {   echo 'Не удалося створити/змінити brandnewphar.phar: ', $e;}?> `

Результат виконання цього прикладу:

array(2) {
["user"]u003d>
string(4) "bill"
["mime-type"]u003d>
string(10) "text/plain"
}

### Дивіться також

- [PharFileInfo::setMetadata()](pharfileinfo.setmetadata.md) -
Встановлення метаданих для файлу
- [PharFileInfo::hasMetadata()](pharfileinfo.hasmetadata.md) -
Перевірити, чи є файли метадані
- [PharFileInfo::delMetadata()](pharfileinfo.delmetadata.md) -
Видалити метадані файлу
- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані
- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
