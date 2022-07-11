- [«cubrid_set_autocommit](function.cubrid-set-autocommit.md)
- [cubrid_set_drop »](function.cubrid-set-drop.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Встановлює параметри бази даних CUBRID

#cubrid_set_db_parameter

(PECL CUBRID u003d 8.4.0)

cubrid_set_db_parameter — Встановлює параметри бази даних CUBRID

### Опис

**cubrid_set_db_parameter**(resource `$conn_identifier`, int
`$param_type`, int `$param_value`): bool

Функція **cubrid_set_db_parameter()** використовується для встановлення
параметрів бази даних CUBRID Він може встановити такі параметри
бази даних CUBRID:

- **`PARAM_ISOLATION_LEVEL`**
- **`PARAM_LOCK_TIMEOUT`**

> **Примітка**:
>
> Режим автоматичної фіксації можна встановити за допомогою
> [cubrid_set_autocommit()](function.cubrid-set-autocommit.md).

### Список параметрів

`conn_identifier`
CUBRID з'єднання. Якщо ідентифікатор з'єднання не вказано,
передбачається останнє посилання, що відкривається
[cubrid_connect()](function.cubrid-connect.md).

`param_type`
Тип параметра бази даних.

`param_value`
Значення рівня ізоляції (1-6) або значення очікування блокування
(В секундах).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
[cubrid_get_db_parameter()](function.cubrid-get-db-parameter.md)**

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");$params u003d cubrid_get_db_parameter($conn);var_dump($params);cubrid_set_autocommit($conn, CU conn, CUBRID_PARAM_ISOLATION_LEVEL, 2);$params_new u003d cubrid_get_db_parameter($conn);var_dump($params_new);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(4) {
["PARAM_ISOLATION_LEVEL"]u003d>
int(3)
["PARAM_LOCK_TIMEOUT"]u003d>
int(-1)
["PARAM_MAX_STRING_LENGTH"]u003d>
int(1073741823)
["PARAM_AUTO_COMMIT"]u003d>
int(0)
}
array(4) {
["PARAM_ISOLATION_LEVEL"]u003d>
int(2)
["PARAM_LOCK_TIMEOUT"]u003d>
int(-1)
["PARAM_MAX_STRING_LENGTH"]u003d>
int(1073741823)
["PARAM_AUTO_COMMIT"]u003d>
int(1)
}

### Дивіться також

- [cubrid_get_db_parameter()](function.cubrid-get-db-parameter.md) -
Повертає параметри бази даних CUBRID
- [cubrid_set_autocommit()](function.cubrid-set-autocommit.md) -
Встановлює режим авто-комміту для з'єднання
