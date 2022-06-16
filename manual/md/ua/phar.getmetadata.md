- [« Phar::getAlias](phar.getalias.md)
- [Phar::getModified »](phar.getmodified.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Витягти метадані phar-архіву

# Phar::getMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::getMetadata — Витягти метадані phar-архіву

### Опис

public **Phar::getMetadata**(array `$unserializeOptions` u003d \[\]):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає метадані phar-архіву. Метаданими може бути будь-яка
змінна PHP, яка може бути серіалізована.

### Список параметрів

Без параметрів.

### Значення, що повертаються

Будь-яке значення PHP, яке може бути серіалізоване та зберігається як
метадані для архіву Phar, або **`null`**, якщо метадані
відсутні.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | Додано параметр `unserializeOptions`. |

### Приклади

**Приклад #1 Приклад використання **Phar::getMetadata()****

`<?php// Переконаємося, що архів не існує @ unlink('brandnewphar.phar');try ; $p['file.php'] u003d '<?php echo "hello";'; $p->setMetadata(array('bootstrap' u003d> 'file.php')); var_dump($p->getMetadata());} catch (Exception $e) {    echo 'Не удалося змінити phar:', $e;}?> `

Результат виконання цього прикладу:

array(1) {
["bootstrap"]u003d>
string(8) "file.php"
}

### Дивіться також

- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::delMetadata()](phar.delmetadata.md) - Видалити глобальні
метадані в архіві phar
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані
