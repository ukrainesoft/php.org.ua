- [«sqlsrv_commit](function.sqlsrv-commit.md)
- [sqlsrv_connect »](function.sqlsrv-connect.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Змінює конфігурацію обробки помилок драйвера та ведення журналу

#sqlsrv_configure

(No version information available, might only be in Git)

sqlsrv_configure — Змінює конфігурацію обробки помилок драйвера та
ведення журналу

### Опис

**sqlsrv_configure**(string `$setting`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Змінює конфігурацію обробки помилок драйвера та ведення журналу.

### Список параметрів

`setting`
Ім'я налаштування. Можливі значення: "WarningsReturnAsErrors",
"LogSubsystems" та "LogSeverity".

`value`
Значення вказаного параметра. У наступній таблиці показані можливі
значення:

| Налаштування | Опції |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- --------------------------------------|
| WarningsReturnAsErrors | 1 (**`true`**) або 0 (**`false`**) |
| LogSubsystems | SQLSRV_LOG_SYSTEM_ALL (-1) SQLSRV_LOG_SYSTEM_CONN (2) SQLSRV_LOG_SYSTEM_INIT (1) SQLSRV_LOG_SYSTEM_OFF (0) SQLSRV_LOG_SYSTEM_STMT (4) SQLSRV_LOG_SYSTEM_UTIL (8) |
| LogSeverity | SQLSRV_LOG_SEVERITY_ALL (-1) SQLSRV_LOG_SEVERITY_ERROR (1) SQLSRV_LOG_SEVERITY_NOTICE (4) SQLSRV_LOG_SEVERITY_WARNING (2) |

**Параметри налаштування помилок та ведення журналу**

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

-   [" Обробка помилок
SQLSRV](http://msdn.microsoft.com/en-us/library/cc626302.aspx).
- [» Ведення журналу активності
SQLSRV](http://msdn.microsoft.com/en-us/library/cc296188.aspx).
