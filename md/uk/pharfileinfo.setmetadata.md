- [« PharFileInfo::isCompressed](pharfileinfo.iscompressed.md)
- [PharException »](class.pharexception.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Встановлення метаданих для конкретного файлу

# PharFileInfo::setMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::setMetadata — Встановлення метаданих для файлу

### Опис

public
**PharFileInfo::setMetadata**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

**PharFileInfo::setMetadata()** слід використовувати для збереження
метаданих конкретного файлу, які не можна зберігати всередині самого
файлу, оскільки, якщо даних багато, або в принципі багато файлів з
метаданими - це сповільнює завантаження phar-архіву. Важливо
пам'ятати, що phar-архіви з коробки підтримують права на файли та їх
можна задати за допомогою методу
[PharFileInfo::chmod()](pharfileinfo.chmod.md). Бо ця
функціональність змінює phar-архів, необхідно, щоб опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключена, інакше внести зміни до архіву [Phar](class.phar.md) не
вийде. На архіви [PharData](class.phardata.md) обмеження на
запис не поширюється.

Метадані файлів можна використовувати, наприклад, для вказівки, які
права треба призначити файлу при експорті його на диск, або для вказівки
MIME-типу, що він повертає. Загалом - будь-яка корисна інформація,
якої не місце усередині самого файлу.

### Список параметрів

`metadata`
Будь-яка змінна PHP, що містить необхідну інформацію

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::setMetadata()****

`<?php// удалимо, на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, ';'; $p['file.txt'] u003d 'hello'; $p['file.txt']->setMetadata(array('user' u003d> 'bill', 'mime-type' u003d> 'text/plain'))); var_dump($p['file.txt']->getMetaData());} catch (Exception $e) {   echo 'Не удалося створити/змінити phar: ', $e;}?> `

Результат виконання цього прикладу:

array(2) {
["user"]u003d>
string(4) "bill"
["mime-type"]u003d>
string(10) "text/plain"
}

### Дивіться також

- [PharFileInfo::hasMetadata()](pharfileinfo.hasmetadata.md) -
Перевірити, чи є файли метадані
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
