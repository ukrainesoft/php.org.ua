- [«db2_client_info](function.db2-client-info.md)
- [db2_column_privileges »](function.db2-column-privileges.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Закриває з'єднання з базою даних

#db2_close

(PECL ibm_db2 \>u003d 1.0.0)

db2_close — Закриває з'єднання з базою даних

### Опис

**db2_close**(resource `$connection`): bool

Функція закриває з'єднання з базою DB2, створене за допомогою
[db2_connect()](function.db2-connect.md) та повертає відповідні
ресурси серверу бази даних.

Якщо ви спробуєте закрити постійне з'єднання, створене за допомогою
[db2_pconnect()](function.db2-pconnect.md), то запит на закриття
буде проігноровано і з'єднання буде доступне для наступного
використання.

### Список параметрів

`connection`
Активне з'єднання з DB2.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Закриття з'єднання**

Наступний приклад показує успішну спробу закрити з'єднання з IBM
DB2, Cloudscape або базою даних Apache Derby.

` <?php$conn u003d db2_connect('SAMPLE', 'db2inst1', 'ibmdb2');$rc u003d db2_close($conn);if ($rc) {   echo "З'єднання'закрито."};

Результат виконання цього прикладу:

З'єднання закрите.

### Дивіться також

- [db2_connect()](function.db2-connect.md) - Повертає з'єднання з
базою даних
- [db2_pclose()](function.db2-pclose.md) - Закриває постійне
з'єднання з базою даних
- [db2_pconnect()](function.db2-pconnect.md) - Повертає постійне
з'єднання з базою даних
