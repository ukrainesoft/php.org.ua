- [«db2_rollback](function.db2-rollback.md)
- [db2_set_option »](function.db2-set-option.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає об'єкт із властивостями, що описують сервер бази даних DB2

#db2_server_info

(PECL ibm_db2 \>u003d 1.1.1)

db2_server_info — Повертає об'єкт із властивостями, що описують сервер
бази даних DB2

### Опис

**db2_server_info**(resource `$connection`): object

Функція повертає об'єкт із властивостями лише для читання, які
повертають інформацію про сервер баз даних IBM DB2, Cloudscape або
Apache Derby. У наступній таблиці наведено властивості сервера бази
даних:

[TABLE]

**Властивості сервера бази даних**

### Список параметрів

`connection`
Встановлює активне з'єднання DB2.

### Значення, що повертаються

Повертає об'єкт у разі успішного виклику функції. Повертає
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **db2_server_info()****

Щоб отримати інформацію про сервер, ви повинні передати дійсний
ресурс підключення до бази даних **db2_server_info()**.

` <?php$conn u003d db2_connect('sample', 'db2inst1', 'ibmdb2');$server u003d db2_server_info( $conn );if ($server) {    echo "DBMS_NAME: var_dump($server->DBMS_NAME); echo "DBMS_VER: "; var_dump($server->DBMS_VER); echo "DB_CODEPAGE: "; var_dump($server->DB_CODEPAGE); echo "DB_NAME: "; var_dump($server->DB_NAME); echo "INST_NAME: "; var_dump($server->INST_NAME); echo "SPECIAL_CHARS:"; var_dump($server->SPECIAL_CHARS); echo "KEYWORDS: "; var_dump(sizeof($server->KEYWORDS)); echo "DFT_ISOLATION: "; var_dump($server->DFT_ISOLATION); echo "ISOLATION_OPTION: "; $il u003d ''; foreach( $server->ISOLATION_OPTION as $opt )    {       $il .u003d $opt." "; }   var_dump($$il ); echo "SQL_CONFORMANCE: "; var_dump($server->SQL_CONFORMANCE); echo "PROCEDURES: "; var_dump($server->PROCEDURES); echo "IDENTIFIER_QUOTE_CHAR: "; var_dump($server->IDENTIFIER_QUOTE_CHAR); echo "LIKE_ESCAPE_CLAUSE: "; var_dump($server->LIKE_ESCAPE_CLAUSE); echo "MAX_COL_NAME_LEN: "; var_dump($server->MAX_COL_NAME_LEN); echo "MAX_ROW_SIZE: "; var_dump($server->MAX_ROW_SIZE); echo "MAX_IDENTIFIER_LEN: "; var_dump($server->MAX_IDENTIFIER_LEN); echo "MAX_INDEX_SIZE: "; var_dump($server->MAX_INDEX_SIZE); echo "MAX_PROC_NAME_LEN: "; var_dump($server->MAX_PROC_NAME_LEN); echo "MAX_SCHEMA_NAME_LEN: "; var_dump($server->MAX_SCHEMA_NAME_LEN); echo "MAX_STATEMENT_LEN: "; var_dump($server->MAX_STATEMENT_LEN); echo "MAX_TABLE_NAME_LEN: "; var_dump($server->MAX_TABLE_NAME_LEN); echo "NON_NULLABLE_COLUMNS: "; var_dump($server->NON_NULLABLE_COLUMNS); db2_close($conn);}?> `

Результат виконання цього прикладу:

DBMS_NAME: string(9) "DB2/LINUX"
DBMS_VER: string(10) "08.02.0000"
DB_CODEPAGE: int(1208)
DB_NAME: string(6) "SAMPLE"
INST_NAME: string(8) "db2inst1"
SPECIAL_CHARS: string(2) "@#"
KEYWORDS: int(179)
DFT_ISOLATION: string(2) "CS"
ISOLATION_OPTION: string(12) "UR CS RS RR"
SQL_CONFORMANCE: string(7) "FIPS127"
PROCEDURES: bool(true)
IDENTIFIER_QUOTE_CHAR: string(1) """
LIKE_ESCAPE_CLAUSE: bool(true)
MAX_COL_NAME_LEN: int(30)
MAX_ROW_SIZE: int(32677)
MAX_IDENTIFIER_LEN: int(18)
MAX_INDEX_SIZE: int(1024)
MAX_PROC_NAME_LEN: int(128)
MAX_SCHEMA_NAME_LEN: int(30)
MAX_STATEMENT_LEN: int(2097152)
MAX_TABLE_NAME_LEN: int(128)
NON_NULLABLE_COLUMNS: bool(true)

### Дивіться також

- [db2_client_info()](function.db2-client-info.md) - Повертає
об'єкт з властивостями, що описують клієнта DB2
