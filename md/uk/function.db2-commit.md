- [«db2_columns](function.db2-columns.md)
- [db2_conn_error »](function.db2-conn-error.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- підтверджує транзакцію

#db2_commit

(PECL ibm_db2 \>u003d 1.0.0)

db2_commit — Підтверджує транзакцію

### Опис

**db2_commit**(resource `$connection`): bool

Підтверджує поточну транзакцію на вказаному з'єднанні та починає
нову. За замовчуванням, в PHP, використовується автопідтвердження транзакцій,
так що функція **db2_commit()** потрібна лише у тому випадку, якщо ви
примусово відключили підтвердження транзакцій для з'єднання.

### Список параметрів

`connection`
Змінна, що містить активний ресурс підключення, отриманий за допомогою
[db2_connect()](function.db2-connect.md) або
[db2_pconnect()](function.db2-pconnect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [db2_autocommit()](function.db2-autocommit.md) - Повертає або
встановлює режим автопідтвердження транзакцій для з'єднання
- [db2_rollback()](function.db2-rollback.md) - Відкочує транзакцію
