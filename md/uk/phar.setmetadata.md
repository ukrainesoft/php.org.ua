- [« Phar::setDefaultStub](phar.setdefaultstub.md)
- [Phar::setSignatureAlgorithm »](phar.setsignaturealgorithm.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Встановити метадані phar-архіву

# Phar::setMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::setMetadata — Встановити метадані phar-архіву

### Опис

public
**Phar::setMetadata**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Функція **Phar::setMetadata()** використовується для збереження даних,
характеризують phar-архів загалом.
[PharFileInfo::setMetadata()](pharfileinfo.setmetadata.md)
використовується для установки метаданих для файлу. Якщо
метаданих буде багато, то це може знизити швидкість завантаження
phar-архіву.

Метадані можна використовувати, наприклад, для вказівки, який файл має
виконуватися при завантаженні, або для вказівки розташування маніфесту,
типу package.xml для модуля [»PEAR](https://pear.php.net/). В загальному,
будь-які корисні в контексті phar-архіву дані.

### Список параметрів

`metadata`
Будь-яка змінна PHP, що містить необхідну інформацію

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Phar::setMetadata()****

`<?php// удалимо, на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, ';'; $p['file.php'] u003d '<?php echo "привіт"'; $p->setMetadata(array('bootstrap' u003d> 'file.php')); var_dump($p->getMetadata());} catch (Exception $e) {    echo 'Не можу створити/змінити phar:', $e;}?> `

Результат виконання цього прикладу:

array(1) {
["bootstrap"]u003d>
string(8) "file.php"
}

### Дивіться також

- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
- [Phar::delMetadata()](phar.delmetadata.md) - Видалити глобальні
метадані в архіві phar
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані
