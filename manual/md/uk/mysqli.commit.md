- [« mysqli::close](mysqli.close.md)
- [mysqli::$connect_errno »](mysqli.connect-errno.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Фіксує поточну транзакцію

# mysqli::commit

# mysqli_commit

(PHP 5, PHP 7, PHP 8)

mysqli::commit -- mysqli_commit -- Фіксує поточну транзакцію

### Опис

Об'єктно-орієнтований стиль

public **mysqli::commit**(int `$flags` u003d 0, ?string `$name` u003d
**`null`**): bool

Процедурний стиль

**mysqli_commit**([mysqli](class.mysqli.md) `$mysql`, int `$flags` u003d
0, ?string `$name` u003d **`null`**): bool

Фіксує транзакцію для з'єднання з базою даних.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`flags`
Бітмаска констант **`MYSQLI_TRANS_COR_*`**.

`name`
Якщо передано, то виконується `COMMIT/*name*/`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- |
| 8.0.0 | `name` тепер припускає значення null. |

### Приклади

Дивіться приклад використання у розділі
[[mysqli::begin_transaction()](mysqli.begin-transaction.md)](mysqli.begin-transaction.md#mysqli.begin-transaction.example.basic).

### Примітки

> **Примітка**:
>
> Функція не працює з нетранзакційними типами таблиць (такими як
> MyISAM або ISAM).

### Дивіться також

- [mysqli_autocommit()](mysqli.autocommit.md) - Включає або
відключає автоматичну фіксацію змін бази даних
- [mysqli_begin_transaction()](mysqli.begin-transaction.md) -
Стартує транзакцію
- [mysqli_rollback()](mysqli.rollback.md) - Відкат поточної транзакції
- [mysqli_savepoint()](mysqli.savepoint.md) - Встановіть іменовану
точку збереження транзакції
