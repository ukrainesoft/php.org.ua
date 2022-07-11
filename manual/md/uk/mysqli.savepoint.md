- [« mysqli::rollback](mysqli.rollback.md)
- [mysqli::select_db »](mysqli.select-db.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Встановіть іменовану точку збереження транзакції

# mysqli::savepoint

# mysqli_savepoint

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

mysqli::savepoint -- mysqli_savepoint — Встановіть іменовану точку
збереження транзакції

### Опис

Об'єктно-орієнтований стиль

public **mysqli::savepoint**(string `$name`): bool

Процедурний стиль:

**mysqli_savepoint**([mysqli](class.mysqli.md) `$mysql`, string
`$name`): bool

Функція ідентична до виконання запиту
``$ mysqli->query("SAVEPOINT `$name`"); ``

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

- [mysqli_release_savepoint()](mysqli.release-savepoint.md) -
Видаляє іменовану точку збереження зі списку точок збереження
поточної транзакції
