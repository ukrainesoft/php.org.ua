- [« mysqli::refresh](mysqli.refresh.md)
- [mysqli::rollback »](mysqli.rollback.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Видаляє іменовану точку збереження зі списку точок збереження
поточної транзакції

# mysqli::release_savepoint

# mysqli_release_savepoint

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

mysqli::release_savepoint -- mysqli_release_savepoint -- Видаляє
іменовану точку збереження зі списку точок збереження поточної
транзакції

### Опис

Об'єктно-орієнтований стиль

public **mysqli::release_savepoint**(string `$name`): bool

Процедурний стиль:

**mysqli_release_savepoint**([mysqli](class.mysqli.md) `$mysql`,
string `$name`): bool

Функція ідентична до виконання запиту
``$ mysqli->query("RELEASE SAVEPOINT `$name`"); ``. Вона не запускає
фіксацію чи відкат.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`name`
Ідентифікатор точки збереження.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mysqli_savepoint()](mysqli.savepoint.md) - Встановіть іменовану
точку збереження транзакції
