- [«cubrid_free_result](function.cubrid-free-result.md)
- [cubrid_get_charset »](function.cubrid-get-charset.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає налаштування авто-комміту для з'єднання

#cubrid_get_autocommit

(PECL CUBRID u003d 8.4.0)

cubrid_get_autocommit — Повертає налаштування автокомміту для з'єднання

### Опис

**cubrid_get_autocommit**(resource `$conn_identifier`): bool

Функція **cubrid_get_autocommit()** використовується для визначення,
чи дозволено в цьому з'єднанні авто-коміт чи ні.

Для CUBRID 8.4.0 автокоміт транзакцій заборонено за замовчуванням.

Для CUBRID 8.4.0 автокоміт транзакцій дозволено за замовчуванням.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

### Значення, що повертаються

**`true`**, якщо авто-коміт дозволено.

**`false`**, якщо авто-коміт заборонено.

**`null`** у разі виникнення помилки.

### Дивіться також

- [cubrid_set_autocommit()](function.cubrid-set-autocommit.md) -
Встановлює режим авто-комміту для з'єднання
- [cubrid_commit()](function.cubrid-commit.md) - Підтвердження
транзакції
