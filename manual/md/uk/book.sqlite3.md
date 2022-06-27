- [«PgSql\Lob](class.pgsql-lob.md)
- [Вступ »](intro.sqlite3.md)

- [PHP Manual](index.md)
- [Модулі для роботи з базами даних окремих
виробників](refs.database.vendors.md)
- SQLite3

# SQLite3

- [Вступ](intro.sqlite3.md)
- [Встановлення та налаштування](sqlite3.setup.md)
- [Вимоги](sqlite3.requirements.md)
- [Установка](sqlite3.installation.md)
- [Налаштування під час виконання](sqlite3.configuration.md)
- [Типи ресурсів](sqlite3.resources.md)
- [Предвизначені константи](sqlite3.constants.md)
- [SQLite3](class.sqlite3.md) - Клас SQLite3
- [SQLite3::backup](sqlite3.backup.md) - Резервне копіювання
однієї бази даних до іншої
- [SQLite3::busyTimeout](sqlite3.busytimeout.md) — Встановити
обробник "зайнято" на з'єднання
- [SQLite3::changes](sqlite3.changes.md) — Отримати кількість
рядків, які були змінені/віддалені/вставлені останнім
запитом
- [SQLite3::close](sqlite3.close.md) — Закрити з'єднання з
базою даних
- [SQLite3::\_\_construct](sqlite3.construct.md) - Створює
екземпляр об'єкта SQLite3 і відкриває з'єднання з базою
- [SQLite3::createAggregate](sqlite3.createaggregate.md) -
Зареєструвати функцію PHP як агрегуючу функцію SQL
- [SQLite3::createCollation](sqlite3.createcollation.md) -
Реєструє функцію PHP для використання як функцію
сортування SQL
- [SQLite3::createFunction](sqlite3.createfunction.md) -
Реєструє функцію PHP для використання як скалярну
функції SQL
- [SQLite3::enableExceptions](sqlite3.enableexceptions.md) -
Включити викид виключень
- [SQLite3::escapeString](sqlite3.escapestring.md) — Повертає
правильно екранований рядок
- [SQLite3::exec](sqlite3.exec.md) — Виконує запит без
результату до поточної бази даних
- [SQLite3::lastErrorCode](sqlite3.lasterrorcode.md) -
Повертає числовий код результату останнього невдалого запиту
SQLite
- [SQLite3::lastErrorMsg](sqlite3.lasterrormsg.md) — Повертає
текст англійською, що описує останній невдалий запит
SQLite
- [SQLite3::lastInsertRowID](sqlite3.lastinsertrowid.md)
Повертає ідентифікатор рядка останньої вставки (INSERT) у
базу даних
- [SQLite3::loadExtension](sqlite3.loadextension.md) -
Спробувати завантажити бібліотеку модуля SQLite
- [SQLite3::open](sqlite3.open.md) — Відкрити базу даних SQLite
- [SQLite3::openBlob](sqlite3.openblob.md) — Відкриває ресурс
потоку для читання BLOB
- [SQLite3::prepare](sqlite3.prepare.md) — Підготовка
SQL-запит для виконання
- [SQLite3::query](sqlite3.query.md) — Виконує SQL-запит
- [SQLite3::querySingle](sqlite3.querysingle.md) — Виконує
запит та повертає одиночний результат
- [SQLite3::setAuthorizer](sqlite3.setauthorizer.md) -
Встановлює callback-функцію, яка буде використовуватись у
як авторизатор для обмеження дій висловлювання
- [SQLite3::version](sqlite3.version.md) — Повертає версію
бібліотеки SQLite3, містить як рядкову константу, так і
числову
- [SQLite3Stmt](class.sqlite3stmt.md) - Клас SQLite3Stmt
- [SQLite3Stmt::bindParam](sqlite3stmt.bindparam.md) — Зв'язує
параметр зі змінною підготовленого запиту
- [SQLite3Stmt::bindValue](sqlite3stmt.bindvalue.md) — Зв'язує
значення параметра зі змінною підготовленого запиту
- [SQLite3Stmt::clear](sqlite3stmt.clear.md) — Видаляє все
поточні прив'язані параметри
- [SQLite3Stmt::close](sqlite3stmt.close.md) — Закриває
підготовлений запит
- [SQLite3Stmt::\_\_construct](sqlite3stmt.construct.md) -
Конструктор класу SQLite3Stmt
- [SQLite3Stmt::execute](sqlite3stmt.execute.md) — Виконує
підготовлений запит та повертає об'єкт із результуючим
набором
- [SQLite3Stmt::getSQL](sqlite3stmt.getsql.md) — Отримати
SQL-запит у вигляді рядка із запиту
- [SQLite3Stmt::paramCount](sqlite3stmt.paramcount.md) -
Повертає кількість параметрів у підготовленому запиті
- [SQLite3Stmt::readOnly](sqlite3stmt.readonly.md) — Перевіряє,
є підготовлений запит тільки для читання
- [SQLite3Stmt::reset](sqlite3stmt.reset.md) — Скидає
підготовлений запит
- [SQLite3Result](class.sqlite3result.md) — Клас SQLite3Result
- [SQLite3Result::columnName](sqlite3result.columnname.md) -
\>Повертає ім'я n-ого стовпця
- [SQLite3Result::columnType](sqlite3result.columntype.md)
Повертає тип n-ного стовпця
- [SQLite3Result::\_\_construct](sqlite3result.construct.md) -
Конструктор класу SQLite3Result
- [SQLite3Result::fetchArray](sqlite3result.fetcharray.md) -
Вибирає один рядок з результуючого набору та поміщає його в
асоціативний або нумерований масив, або в обох відразу
- [SQLite3Result::finalize](sqlite3result.finalize.md) -
Закриває результуючий набір
- [SQLite3Result::numColumns](sqlite3result.numcolumns.md)
Повертає кількість стовпців у результуючому наборі
- [SQLite3Result::reset](sqlite3result.reset.md) — Скидає
покажчик результуючого набору на перший рядок
