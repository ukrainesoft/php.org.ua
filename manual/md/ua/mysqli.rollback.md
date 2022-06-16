- [« mysqli::release_savepoint](mysqli.release-savepoint.md)
- [mysqli::savepoint »](mysqli.savepoint.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Відкат поточної транзакції

# mysqli::rollback

# mysqli_rollback

(PHP 5, PHP 7, PHP 8)

mysqli::rollback -- mysqli_rollback - Відкат поточної транзакції

### Опис

Об'єктно-орієнтований стиль

public **mysqli::rollback**(int `$flags` u003d 0, ?string `$name` u003d
**`null`**): bool

Процедурний стиль

**mysqli_rollback**([mysqli](class.mysqli.md) `$mysql`, int `$flags` u003d
0, ?string `$name` u003d **`null`**): bool

Відкочує поточну транзакцію.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`flags`
Бітова маска констант **`MYSQLI_TRANS_COR_*`**.

`name`
Якщо передано, то виконується `ROLLBACK/*name*/`.

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

- [mysqli_begin_transaction()](mysqli.begin-transaction.md) -
Стартує транзакцію
- [mysqli_commit()](mysqli.commit.md) - Фіксує поточну транзакцію
- [mysqli_autocommit()](mysqli.autocommit.md) - Включає або
відключає автоматичну фіксацію змін бази даних
- [mysqli_release_savepoint()](mysqli.release-savepoint.md) -
Видаляє іменовану точку збереження зі списку точок збереження
поточної транзакції
