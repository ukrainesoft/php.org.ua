- [« mysqli_stmt::attr_get](mysqli-stmt.attr-get.md)
- [mysqli_stmt::bind_param »](mysqli-stmt.bind-param.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Змінює поведінку підготовленого запиту

# mysqli_stmt::attr_set

# mysqli_stmt_attr_set

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::attr_set -- mysqli_stmt_attr_set -- Змінює поведінку
підготовленого запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::attr_set**(int `$attribute`, int `$value`): bool

Процедурний стиль

**mysqli_stmt_attr_set**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, int `$attribute`, int `$value`): bool

Використовується для зміни поведінки підготовленого запиту. Ця
функція може бути викликана кілька разів для встановлення кількох
атрибутів.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`attribute`
Атрибут, що встановлюється. Він може приймати такі значення:

| Символ | Опис |
|------------------------------------|------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH | Якщо дорівнює **`true`**, то [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) оновлює метадані значенням `MYSQL_FIELD->max_length`. |
| MYSQLI_STMT_ATTR_CURSOR_TYPE | Тип покажчика, який потрібно відкрити для запиту під час виклику [mysqli_stmt_execute()](mysqli-stmt.execute.md). `value` може бути `MYSQLI_CURSOR_TYPE_NO_CURSOR` (за замовчуванням) або `MYSQLI_CURSOR_TYPE_READ_ONLY`. |
| MYSQLI_STMT_ATTR_PREFETCH_ROWS | Число рядків, які потрібно вибрати з сервера під час використання покажчика. `value` може бути в діапазоні від 1 максимального значення типу unsigned long. За замовчуванням одно 1. |

**Значення атрибуту**

Якщо використовується опція `MYSQLI_STMT_ATTR_CURSOR_TYPE` разом з
`MYSQLI_CURSOR_TYPE_READ_ONLY`, то покажчик буде відкритий для запиту
коли буде запущена [mysqli_stmt_execute()](mysqli-stmt.execute.md).
Якщо вже є відкритий покажчик від попереднього запуску
[mysqli_stmt_execute()](mysqli-stmt.execute.md), то покажчик буде
закрито перед відкриттям нового.
[mysqli_stmt_reset()](mysqli-stmt.reset.md) також закриває будь-який
відкритий покажчик перед підготовкою запиту перед перезапуском.
[mysqli_stmt_free_result()](mysqli-stmt.free-result.md) закриває
будь-який відкритий покажчик.

Якщо ви відкриваєте вказівник для підготовленого запиту, то
використанні
[mysqli_stmt_store_result()](mysqli-stmt.store-result.md) немає
необхідності.

`value`
Значення, яке присвоюється атрибуту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [» Connector/MySQL
mysql_stmt_attr_set()](http://dev.mysql.com/doc/en/mysql-stmt-attr-set.md)
