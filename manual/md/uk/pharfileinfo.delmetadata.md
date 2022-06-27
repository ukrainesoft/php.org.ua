- [« PharFileInfo::decompress](pharfileinfo.decompress.md)
- [PharFileInfo::\_\_destruct »](pharfileinfo.destruct.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Видалити метадані файлу

# PharFileInfo::delMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

PharFileInfo::delMetadata — Видалити метадані файлу

### Опис

public **PharFileInfo::delMetadata**(): bool

Видаляє метадані файлу, якщо вони є.

### Список параметрів

Немає параметрів.

### Значення, що повертаються

Повертає **`true`** або **`false`** залежно від успішності
виконання. Так як ця функціональність змінює phar-архів,
необхідно, щоб опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключена, інакше внести зміни до архіву [Phar](class.phar.md) не
вийде. На архіви [PharData](class.phardata.md) обмеження на
запис не поширюється.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі виникнення помилки запису на диск, та
[BadMethodCallException](class.badmethodcallexception.md), якщо запис
заборонено.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::delMetaData()****

`<?phptry {   $a u003d new Phar('myphar.phar'); $a['hi'] u003d 'hi'; var_dump($a['hi']->delMetadata()); $a['hi']->setMetadata('there'); var_dump($a['hi']->delMetadata()); var_dump($a['hi']->delMetadata());} catch (Exception $e) {    // обробка помилок}?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)

### Дивіться також

- [PharFileInfo::setMetadata()](pharfileinfo.setmetadata.md) -
Встановлення метаданих для файлу
- [PharFileInfo::hasMetadata()](pharfileinfo.hasmetadata.md) -
Перевірити, чи є файли метадані
- [PharFileInfo::getMetadata()](pharfileinfo.getmetadata.md) -
Отримати метадані, пов'язані з файлом
- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані
- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
