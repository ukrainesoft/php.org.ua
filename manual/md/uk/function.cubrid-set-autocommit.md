- [«cubrid_set_add](function.cubrid-set-add.md)
- [cubrid_set_db_parameter »](function.cubrid-set-db-parameter.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Встановлює режим авто-комміту для з'єднання

#cubrid_set_autocommit

(PECL CUBRID u003d 8.4.0)

cubrid_set_autocommit — Встановлює режим автокомміту для з'єднання

### Опис

**cubrid_set_autocommit**(resource `$conn_identifier`, bool `$mode`):
bool

Функція **cubrid_set_autocommit()** використовується для встановлення режиму
авто-комміту для з'єднання.

У CUBRID PHP, авто-коміт транзакцій за замовчуванням заборонено. Якщо ви його
увімкніть, всі очікувані транзакції будуть автоматично підтверджені.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`mode`
Режим авто-комміту. Одна з двох констант:

- **`CUBRID_AUTOCOMMIT_FALSE`**
- **`CUBRID_AUTOCOMMIT_TRUE`**

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [cubrid_get_autocommit()](function.cubrid-get-autocommit.md) -
Повертає налаштування авто-комміту для з'єднання
- [cubrid_commit()](function.cubrid-commit.md) - Підтвердження
транзакції
