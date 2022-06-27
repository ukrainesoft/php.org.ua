- [« mysqli::set_opt](function.mysqli-set-opt.md)
- [Mysql_xdevapi »](book.mysql-xdevapi.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
-   Список змін

# Список змін

Наступні зміни були зроблені з класами/функціями/методами
даного модуля.

| Version | Function | Description |
|---------|------------------------------------------- -------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 8.1.0 | [mysqli_driver::$report_mode](mysqli-driver.report-mode.md) | За замовчуванням встановлено значення MYSQLI_REPORT_ERROR \| MYSQLI_REPORT_STRICT. Раніше він був MYSQLI_REPORT_OFF. |
| | [mysqli_result::fetch_all](mysqli-result.fetch-all.md) | Тепер також доступно при збиранні з libmysqlclient. |
| | [mysqli_stmt::execute](mysqli-stmt.execute.md) | Додано необов'язковий параметр params. |
| | [mysqli_stmt::next_result](mysqli-stmt.next-result.md) | Тепер також доступно при збиранні з libmysqlclient. |
| | [mysqli::$client_info](mysqli.get-client-info.md) | Виклик функції mysqli_get_client_info із аргументом mysql застарів. Функція ніколи не вимагала параметра, але неправильно дозволяла його як необов'язковий параметр. |
| | [mysqli::$client_info](mysqli.get-client-info.md) | Об'єктно-орієнтований стиль виклику методу mysqli::get_client_info застарів. |
| | [mysqli::init](mysqli.init.md) | Об'єктно-орієнтований стиль виклику методу mysqli:: init застарів. Замініть виклик методу parent::init за допомогою parent::\_\_construct. |
| 8.0.0 | [mysqli_result::fetch_object](mysqli-result.fetch-object.md) | constructor_args тепер приймає для конструкторів без параметрів; раніше викидався виняток. |
| | [mysqli_stmt::\_\_construct](mysqli-stmt.construct.md) | query тепер припускає значення null. |
| | [mysqli::begin_transaction](mysqli.begin-transaction.md) | name тепер припускає значення null. |
| | [mysqli::commit](mysqli.commit.md) | name тепер припускає значення null. |
| | [mysqli::rollback](mysqli.rollback.md) | name тепер припускає значення null. |
