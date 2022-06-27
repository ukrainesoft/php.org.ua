- [« PharData::setDefaultStub](phardata.setdefaultstub.md)
- [PharData::setSignatureAlgorithm
»](phardata.setsignaturealgorithm.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Встановити метадані phar-архіву

# PharData::setMetadata

(No version information available, might only be in Git)

PharData::setMetadata — Встановити метадані phar-архіву

### Опис

public
**PharData::setMetadata**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Функція [Phar::setMetadata()](phar.setmetadata.md) використовується для
збереження даних, що характеризують phar-архів загалом.
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

**Приклад #1 Приклад використання
[Phar::setMetadata()](phar.setmetadata.md)**

`<?php// удаляємо, на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, ';'; $p['file.php'] u003d '<?php echo "hello"'; $p->setMetadata(array('bootstrap' u003d> 'file.php')); var_dump($p->getMetadata());} catch (Exception $e) {    echo 'Не удалося створити і/або змінити phar:', $e;}?> `

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
