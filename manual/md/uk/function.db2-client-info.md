- [«db2_bind_param](function.db2-bind-param.md)
- [db2_close »](function.db2-close.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає об'єкт із властивостями, що описують клієнта DB2

#db2_client_info

(PECL ibm_db2 \>u003d 1.1.1)

db2_client_info — Повертає об'єкт із властивостями, що описують клієнта
DB2

### Опис

**db2_client_info**(resource `$connection`): object

Ця функція повертає об'єкт з доступними лише для читання властивостями,
повертають інформацію про клієнта DB2. Ці властивості перераховані в
наступній таблиці:

[TABLE]

**Властивості клієнта DB2**

### Список параметрів

`connection`
Встановлює активне з'єднання DB2.

### Значення, що повертаються

У разі успішного виконання повертає об'єкт, інакше "false".

### Приклади

**Приклад #1 Приклад використання **db2_client_info()****

Для отримання інформації потрібно передати коректний ресурс з'єднання
у **db2_client_info()**.

` <?php$conn u003d db2_connect( 'SAMPLE', 'db2inst1', 'ibmdb2' );$client u003d db2_client_info( $conn );if ($client) {     echo | var_dump($client->DRIVER_NAME); echo "DRIVER_VER: "; var_dump($client->DRIVER_VER); echo "DATA_SOURCE_NAME: "; var_dump($client->DATA_SOURCE_NAME); echo "DRIVER_ODBC_VER: "; var_dump($client->DRIVER_ODBC_VER); echo "ODBC_VER: "; var_dump($client->ODBC_VER); echo "ODBC_SQL_CONFORMANCE: "; var_dump($client->ODBC_SQL_CONFORMANCE); echo "APPL_CODEPAGE: "; var_dump($client->APPL_CODEPAGE); echo "CONN_CODEPAGE:"; var_dump( $client->CONN_CODEPAGE );}else {    echo "Error retrieving client information.    Perhaps your database connection was invalid.";

Результат виконання цього прикладу:

DRIVER_NAME: string(8) "libdb2.a"
DRIVER_VER: string(10) "08.02.0001"
DATA_SOURCE_NAME: string(6) "SAMPLE"
DRIVER_ODBC_VER: string(5) "03.51"
ODBC_VER: string(10) "03.01.0000"
ODBC_SQL_CONFORMANCE: string(8) "EXTENDED"
APPL_CODEPAGE: int(819)
CONN_CODEPAGE: int(819)

### Дивіться також

- [db2_server_info()](function.db2-server-info.md) - Повертає
об'єкт з властивостями, що описують сервер бази даних DB2
