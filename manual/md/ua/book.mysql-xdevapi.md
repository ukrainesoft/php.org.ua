- [« Список змін](changelog.mysqli.md)
- [Вступ »](intro.mysql-xdevapi.md)

- [PHP Manual](index.md)
- [MySQL](set.mysqlinfo.md)
- Mysql_xdevapi

# Mysql_xdevapi

- [Вступ](intro.mysql-xdevapi.md)
- [Встановлення та налаштування](mysql-xdevapi.setup.md)
- [Вимоги](mysql-xdevapi.requirements.md)
- [Установка](mysql-xdevapi.installation.md)
- [Налаштування під час
виконання](mysql-xdevapi.configuration.md)
- [Складання / Компіляція з вихідного
коду](mysql-xdevapi.build.md)
- [Предвизначені константи](mysql-xdevapi.constants.md)
- [Список змін](changelog.mysql_xdevapi.md)
- [Приклади](mysql-xdevapi.examples.md)
- [Функції Mysql_xdevapi](ref.mysql-xdevapi.md)
- [expression](function.mysql-xdevapi-expression.md) — Зв'язує
підготовлені змінні затвердження як параметри
- [getSession](function.mysql-xdevapi-getsession.md) -
Підключається до сервера MySQL
- [mysql_xdevapi\BaseResult](class.mysql-xdevapi-baseresult.md) -
Інтерфейс BaseResult
- [BaseResult::getWarnings](mysql-xdevapi-baseresult.getwarnings.md)
— Отримує попередження останньої операції
- [BaseResult::getWarningsCount](mysql-xdevapi-baseresult.getwarningscount.md)
— Отримує кількість попереджень останньої операції
- [mysql_xdevapi\Client](class.mysql-xdevapi-client.md) - Клас
Client
- [mysql_xdevapi\Client::close](mysql-xdevapi-client.close.md) -
Закриття клієнта
- [Client::\_\_construct](mysql-xdevapi-client.construct.md) -
Конструктор класу Client
- [Client::getClient](mysql-xdevapi-client.getsession.md) -
Отримує сеанс клієнта
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md) -
Клас Collection
- [Collection::add](mysql-xdevapi-collection.add.md) — Додає
документ у колекцію
- [Collection::addOrReplaceOne](mysql-xdevapi-collection.addorreplaceone.md)
— Додає або замінює документ колекції
- [Collection::\_\_construct](mysql-xdevapi-collection.construct.md)
- Конструктор класу Collection
- [Collection::count](mysql-xdevapi-collection.count.md) -
Отримує кількість документів
- [Collection::createIndex](mysql-xdevapi-collection.createindex.md)
— Створює індекс для колекції
- [Collection::dropIndex](mysql-xdevapi-collection.dropindex.md)
— Видаляє індекс колекції
- [Collection::existsInDatabase](mysql-xdevapi-collection.existsindatabase.md)
— Перевіряє, чи існує колекція у базі даних
- [Collection::find](mysql-xdevapi-collection.find.md) - Шукає
документ
- [Collection::getName](mysql-xdevapi-collection.getname.md) -
Отримує назву колекції
- [Collection::getOne](mysql-xdevapi-collection.getone.md) -
Отримує один документ
- [Collection::getSchema](mysql-xdevapi-collection.getschema.md)
— Повертає об'єкт Schema
- [Collection::getSession](mysql-xdevapi-collection.getsession.md)
— Повертає об'єкт Session
- [Collection::modify](mysql-xdevapi-collection.modify.md)
Змінює документи колекції
- [Collection::remove](mysql-xdevapi-collection.remove.md)
Видаляє документи колекції
- [Collection::removeOne](mysql-xdevapi-collection.removeone.md)
— Видаляє один документ із колекції
- [Collection::replaceOne](mysql-xdevapi-collection.replaceone.md)
— Замінює один документ колекції
- [mysql_xdevapi\CollectionAdd](class.mysql-xdevapi-collectionadd.md)
- Клас CollectionAdd
- [CollectionAdd::\_\_construct](mysql-xdevapi-collectionadd.construct.md)
- Конструктор класу CollectionAdd
- [CollectionAdd::execute](mysql-xdevapi-collectionadd.execute.md)
- Виконує твердження
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Клас CollectionFind
- [CollectionFind::bind](mysql-xdevapi-collectionfind.bind.md) -
Прив'язує значення до заповнювача запиту
- [CollectionFind::\_\_construct](mysql-xdevapi-collectionfind.construct.md)
- Конструктор класу CollectionFind
- [CollectionFind::execute](mysql-xdevapi-collectionfind.execute.md)
- Виконує твердження
- [CollectionFind::fields](mysql-xdevapi-collectionfind.fields.md)
— Встановлює фільтр поля документа
- [CollectionFind::groupBy](mysql-xdevapi-collectionfind.groupby.md)
- Встановлює критерії угруповання
- [CollectionFind::having](mysql-xdevapi-collectionfind.having.md)
- Встановлює умову для агрегатних функцій
- [CollectionFind::limit](mysql-xdevapi-collectionfind.limit.md)
— Обмежує кількість документів, що повертаються.
- [CollectionFind::lockExclusive](mysql-xdevapi-collectionfind.lockexclusive.md)
- Виконує операцію з EXCLUSIVE LOCK
- [CollectionFind::lockShared](mysql-xdevapi-collectionfind.lockshared.md)
- Виконує операцію з SHARED LOCK
- [CollectionFind::offset](mysql-xdevapi-collectionfind.offset.md)
— Пропускає вказану кількість елементів, що повертаються.
- [CollectionFind::sort](mysql-xdevapi-collectionfind.sort.md) -
Встановлює критерії сортування
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Клас CollectionModify
- [CollectionModify::arrayAppend](mysql-xdevapi-collectionmodify.arrayappend.md)
— Додає елемент у поле масиву
- [CollectionModify::arrayInsert](mysql-xdevapi-collectionmodify.arrayinsert.md)
— Додає елемент у поле масиву
- [CollectionModify::bind](mysql-xdevapi-collectionmodify.bind.md)
— Прив'язує значення до заповнювача запиту
- [CollectionModify::\_\_construct](mysql-xdevapi-collectionmodify.construct.md)
- Конструктор класу CollectionModify
- [CollectionModify::execute](mysql-xdevapi-collectionmodify.execute.md)
- Виконує операцію зміни
- [CollectionModify::limit](mysql-xdevapi-collectionmodify.limit.md)
— Обмежує кількість документів, що змінюються.
- [CollectionModify::patch](mysql-xdevapi-collectionmodify.patch.md)
- Виправляє документ
- [CollectionModify::replace](mysql-xdevapi-collectionmodify.replace.md)
— Замінює поле документа
- [CollectionModify::set](mysql-xdevapi-collectionmodify.set.md)
- Встановлює атрибут документа
- [CollectionModify::skip](mysql-xdevapi-collectionmodify.skip.md)
- Пропускає елементи
- [CollectionModify::sort](mysql-xdevapi-collectionmodify.sort.md)
— Встановлює критерії сортування
- [CollectionModify::unset](mysql-xdevapi-collectionmodify.unset.md)
— скидає значення полів документа
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Клас CollectionRemove
- [CollectionRemove::bind](mysql-xdevapi-collectionremove.bind.md)
- Прив'язує значення до заповнювача
- [CollectionRemove::\_\_construct](mysql-xdevapi-collectionremove.construct.md)
- Конструктор класу CollectionRemove
- [CollectionRemove::execute](mysql-xdevapi-collectionremove.execute.md)
- Виконує операцію видалення
- [CollectionRemove::limit](mysql-xdevapi-collectionremove.limit.md)
— Обмежує кількість документів для видалення
- [CollectionRemove::sort](mysql-xdevapi-collectionremove.sort.md)
— Встановлює критерії сортування
- [mysql_xdevapi\ColumnResult](class.mysql-xdevapi-columnresult.md)
- Клас ColumnResult
- [ColumnResult::\_\_construct](mysql-xdevapi-columnresult.construct.md)
- Конструктор класу ColumnResult
- [ColumnResult::getCharacterSetName](mysql-xdevapi-columnresult.getcharactersetname.md)
— Отримує набір символів
- [ColumnResult::getCollationName](mysql-xdevapi-columnresult.getcollationname.md)
— Отримує ім'я зіставлення
- [ColumnResult::getColumnLabel](mysql-xdevapi-columnresult.getcolumnlabel.md)
— Отримує мітку стовпця
- [ColumnResult::getColumnName](mysql-xdevapi-columnresult.getcolumnname.md)
— Отримує назву стовпця
- [ColumnResult::getFractionalDigits](mysql-xdevapi-columnresult.getfractionaldigits.md)
— Отримує дрібну довжину цифри
- [ColumnResult::getLength](mysql-xdevapi-columnresult.getlength.md)
— Отримує довжину поля стовпця
- [ColumnResult::getSchemaName](mysql-xdevapi-columnresult.getschemaname.md)
— Отримує назву схеми
- [ColumnResult::getTableLabel](mysql-xdevapi-columnresult.gettablelabel.md)
— Отримує мітку таблиці
- [ColumnResult::getTableName](mysql-xdevapi-columnresult.gettablename.md)
— Отримує назву таблиці
- [ColumnResult::getType](mysql-xdevapi-columnresult.gettype.md)
— Отримує тип стовпця
- [ColumnResult::isNumberSigned](mysql-xdevapi-columnresult.isnumbersigned.md)
— Перевіряє, чи є тип підписаним
- [ColumnResult::isPadded](mysql-xdevapi-columnresult.ispadded.md)
— Перевіряє, чи доповнюється
- [mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md)
- Інтерфейс CrudOperationBindable
- [CrudOperationBindable::bind](mysql-xdevapi-crudoperationbindable.bind.md)
- Прив'язує значення до заповнювача
- [mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md)
- Інтерфейс CrudOperationLimitable
- [CrudOperationLimitable::limit](mysql-xdevapi-crudoperationlimitable.limit.md)
- Встановлює ліміт результату
- [mysql_xdevapi\CrudOperationSkippable](class.mysql-xdevapi-crudoperationskippable.md)
- Інтерфейс CrudOperationSkippable
- [CrudOperationSkippable::skip](mysql-xdevapi-crudoperationskippable.skip.md)
- Кількість операцій для пропуску
- [mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
- Інтерфейс CrudOperationSortable
- [CrudOperationSortable::sort](mysql-xdevapi-crudoperationsortable.sort.md)
- Сортує результати
- [mysql_xdevapi\DatabaseObject](class.mysql-xdevapi-databaseobject.md)
- Інтерфейс DatabaseObject
- [DatabaseObject::existsInDatabase](mysql-xdevapi-databaseobject.existsindatabase.md)
— Перевіряє, чи існує об'єкт у базі даних
- [DatabaseObject::getName](mysql-xdevapi-databaseobject.getname.md)
— Отримує ім'я об'єкта
- [DatabaseObject::getSession](mysql-xdevapi-databaseobject.getsession.md)
— Отримує ім'я сесії
- [mysql_xdevapi\DocResult](class.mysql-xdevapi-docresult.md) -
Клас DocResult
- [DocResult::\_\_construct](mysql-xdevapi-docresult.construct.md)
- Конструктор DocResult
- [DocResult::fetchAll](mysql-xdevapi-docresult.fetchall.md) -
Отримати всі рядки
- [DocResult::fetchOne](mysql-xdevapi-docresult.fetchone.md) -
Отримати один рядок
- [DocResult::getWarnings](mysql-xdevapi-docresult.getwarnings.md)
— Отримати попередження з останньої операції
- [DocResult::getWarningsCount](mysql-xdevapi-docresult.getwarningscount.md)
— Отримати кількість попереджень із останньої операції
- [mysql_xdevapi\Exception](class.mysql-xdevapi-exception.md) -
Клас Exception
- [mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md) -
Інтерфейс Executable
- [Executable::execute](mysql-xdevapi-executable.execute.md) -
Виконує затвердження
- [mysql_xdevapi\ExecutionStatus](class.mysql-xdevapi-executionstatus.md)
- Клас ExecutionStatus
- [ExecutionStatus::\_\_construct](mysql-xdevapi-executionstatus.construct.md)
- Конструктор класу ExecutionStatus
- [mysql_xdevapi\Expression](class.mysql-xdevapi-expression.md) -
Клас Expression
- [Expression::\_\_construct](mysql-xdevapi-expression.construct.md)
- Конструктор класу Expression
- [mysql_xdevapi\Result](class.mysql-xdevapi-result.md) - Клас
Result
- [Result::\_\_construct](mysql-xdevapi-result.construct.md) -
Конструктор класу Result
- [Result::getAffectedItemsCount](mysql-xdevapi-result.getaffecteditemscount.md)
— Отримує кількість порушених рядків
- [Result::getAutoIncrementValue](mysql-xdevapi-result.getautoincrementvalue.md)
— Отримує значення автоінкремента
- [Result::getGeneratedIds](mysql-xdevapi-result.getgeneratedids.md)
— Отримує згенеровані ідентифікатори
- [Result::getWarnings](mysql-xdevapi-result.getwarnings.md) -
Отримує попередження останньої операції
- [Result::getWarningsCount](mysql-xdevapi-result.getwarningscount.md)
— Отримує кількість попереджень останньої операції
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md) -
Клас RowResult
- [RowResult::\_\_construct](mysql-xdevapi-rowresult.construct.md)
- Конструктор класу RowResult
- [RowResult::fetchAll](mysql-xdevapi-rowresult.fetchall.md)
Отримує всі рядки з результату
- [RowResult::fetchOne](mysql-xdevapi-rowresult.fetchone.md)
Отримує рядок із результату
- [RowResult::getColumnsCount](mysql-xdevapi-rowresult.getcolumncount.md)
— Отримує кількість стовпців
- [RowResult::getColumnNames](mysql-xdevapi-rowresult.getcolumnnames.md)
— Отримує всі імена стовпців
- [RowResult::getColumns](mysql-xdevapi-rowresult.getcolumns.md)
— Отримує метадані стовпця
- [RowResult::getWarnings](mysql-xdevapi-rowresult.getwarnings.md)
— Отримує попередження останньої операції
- [RowResult::getWarningsCount](mysql-xdevapi-rowresult.getwarningscount.md)
— Отримує кількість попереджень останньої операції
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md) - Клас
Schema
- [Schema::\_\_construct](mysql-xdevapi-schema.construct.md) -
Конструктор
- [Schema::createCollection](mysql-xdevapi-schema.createcollection.md)
— Додати колекцію до схеми
- [Schema::dropCollection](mysql-xdevapi-schema.dropcollection.md)
— Видалити колекції зі схеми
- [Schema::existsInDatabase](mysql-xdevapi-schema.existsindatabase.md)
— Перевірити, чи існує у базі даних
- [Schema::getCollection](mysql-xdevapi-schema.getcollection.md)
— Отримати колекцію зі схеми
- [Schema::getCollectionAsTable](mysql-xdevapi-schema.getcollectionastable.md)
— Отримати об'єкт таблиці колекції
- [Schema::getCollections](mysql-xdevapi-schema.getcollections.md)
— Отримати всі колекції схеми
- [Schema::getName](mysql-xdevapi-schema.getname.md) — Отримати
ім'я схеми
- [Schema::getSession](mysql-xdevapi-schema.getsession.md) -
Отримати сесію схеми
- [Schema::getTable](mysql-xdevapi-schema.gettable.md) -
Отримати таблицю схеми
- [Schema::getTables](mysql-xdevapi-schema.gettables.md) -
Отримати таблиці схеми
- [mysql_xdevapi\SchemaObject](class.mysql-xdevapi-schemaobject.md)
- Інтерфейс SchemaObject
- [SchemaObject::getSchema](mysql-xdevapi-schemaobject.getschema.md)
— Отримує об'єкт схеми
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md) - Клас
Session
- [Session::close](mysql-xdevapi-session.close.md) — Закриває
сесію
- [Session::commit](mysql-xdevapi-session.commit.md) - Фіксує
транзакцію
- [Session::\_\_construct](mysql-xdevapi-session.construct.md) -
Опис конструктора
- [Session::createSchema](mysql-xdevapi-session.createschema.md)
- Створює нову схему
- [Session::dropSchema](mysql-xdevapi-session.dropschema.md) -
Видаляє схему
- [Session::generateUUID](mysql-xdevapi-session.generateuuid.md)
— Отримує новий UUID
- [Session::getDefaultSchema](mysql-xdevapi-session.getdefaultschema.md)
— Отримує ім'я схеми за промовчанням
- [Session::getSchema](mysql-xdevapi-session.getschema.md) -
Отримує новий об'єкт схеми
- [Session::getSchemas](mysql-xdevapi-session.getschemas.md) -
Отримує схеми
- [Session::getServerVersion](mysql-xdevapi-session.getserverversion.md)
— Отримує версію сервера
- [Session::listClients](mysql-xdevapi-session.listclients.md) -
Отримує список клієнтів
- [Session::quoteName](mysql-xdevapi-session.quotename.md) -
Додає лапки
- [Session::releaseSavepoint](mysql-xdevapi-session.releasesavepoint.md)
— Скасує встановлену точку збереження
- [Session::rollback](mysql-xdevapi-session.rollback.md) -
Відкочує транзакцію
- [Session::rollbackTo](mysql-xdevapi-session.rollbackto.md) -
Відкочує транзакцію до точки збереження
- [Session::setSavepoint](mysql-xdevapi-session.setsavepoint.md)
— Створює точку збереження
- [Session::sql](mysql-xdevapi-session.sql.md) — Виконує SQL
запит
- [Session::startTransaction](mysql-xdevapi-session.starttransaction.md)
- Починає транзакцію
- [mysql_xdevapi\SqlStatement](class.mysql-xdevapi-sqlstatement.md)
- Клас SqlStatement
- [SqlStatement::bind](mysql-xdevapi-sqlstatement.bind.md) -
Зв'язує параметри затвердження
- [SqlStatement::\_\_construct](mysql-xdevapi-sqlstatement.construct.md)
- Опис конструктора
- [SqlStatement::execute](mysql-xdevapi-sqlstatement.execute.md)
- Виконує операцію
- [SqlStatement::getNextResult](mysql-xdevapi-sqlstatement.getnextresult.md)
— Отримує наступний результат
- [SqlStatement::getResult](mysql-xdevapi-sqlstatement.getresult.md)
— Отримує результат
- [SqlStatement::hasMoreResults](mysql-xdevapi-sqlstatement.hasmoreresults.md)
- Перевіряє, чи є ще результати
- [mysql_xdevapi\SqlStatementResult](class.mysql-xdevapi-sqlstatementresult.md)
- Клас SqlStatementResult
- [SqlStatementResult::\_\_construct](mysql-xdevapi-sqlstatementresult.construct.md)
- Опис конструктора
- [SqlStatementResult::fetchAll](mysql-xdevapi-sqlstatementresult.fetchall.md)
— Отримує всі рядки з результату
- [SqlStatementResult::fetchOne](mysql-xdevapi-sqlstatementresult.fetchone.md)
— Отримує один рядок
- [SqlStatementResult::getAffectedItemsCount](mysql-xdevapi-sqlstatementresult.getaffecteditemscount.md)
— Отримує порушену кількість рядків
- [SqlStatementResult::getColumnsCount](mysql-xdevapi-sqlstatementresult.getcolumncount.md)
— Отримує кількість стовпців
- [SqlStatementResult::getColumnNames](mysql-xdevapi-sqlstatementresult.getcolumnnames.md)
— Отримує імена стовпців
- [SqlStatementResult::getColumns](mysql-xdevapi-sqlstatementresult.getcolumns.md)
— Отримує стовпці
- [SqlStatementResult::getGeneratedIds](mysql-xdevapi-sqlstatementresult.getgeneratedids.md)
— Отримує згенеровані ідентифікатори
- [SqlStatementResult::getLastInsertId](mysql-xdevapi-sqlstatementresult.getlastinsertid.md)
— Отримує останній ідентифікатор вставки
- [SqlStatementResult::getWarnings](mysql-xdevapi-sqlstatementresult.getwarnings.md)
— Отримує попередження від останньої операції
- [SqlStatementResult::getWarningsCount](mysql-xdevapi-sqlstatementresult.getwarningcount.md)
— Отримує кількість попереджень від останньої операції
- [SqlStatementResult::hasData](mysql-xdevapi-sqlstatementresult.hasdata.md)
— Перевіряє, чи є результати дані
- [SqlStatementResult::nextResult](mysql-xdevapi-sqlstatementresult.nextresult.md)
— Отримує наступний результат
- [mysql_xdevapi\Statement](class.mysql-xdevapi-statement.md) -
Клас Statement
- [Statement::\_\_construct](mysql-xdevapi-statement.construct.md)
- Опис конструктора
- [Statement::getNextResult](mysql-xdevapi-statement.getnextresult.md)
— Отримує наступний результат
- [Statement::getResult](mysql-xdevapi-statement.getresult.md) -
Отримує результат
- [Statement::hasMoreResults](mysql-xdevapi-statement.hasmoreresults.md)
- Перевіряє, чи є ще результати
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md) - Клас Table
- [Table::\_\_construct](mysql-xdevapi-table.construct.md) -
Конструктор Table
- [Table::count](mysql-xdevapi-table.count.md) — Отримати
кількість рядків
- [Table::delete](mysql-xdevapi-table.delete.md) — Видалити
рядки з таблиці
- [Table::existsInDatabase](mysql-xdevapi-table.existsindatabase.md)
— Перевірити, чи існує таблиця у базі даних
- [Table::getName](mysql-xdevapi-table.getname.md) — Отримати
ім'я таблиці
- [Table::getSchema](mysql-xdevapi-table.getschema.md) -
Отримати схему таблиці
- [Table::getSession](mysql-xdevapi-table.getsession.md) -
Отримати таблицю сесій
- [Table::insert](mysql-xdevapi-table.insert.md) — Вставити
рядки таблиці
- [Table::isView](mysql-xdevapi-table.isview.md) — Перевірити,
чи є таблиця уявленням
- [Table::select](mysql-xdevapi-table.select.md) — Вибрати
рядки з таблиці
- [Table::update](mysql-xdevapi-table.update.md) — Оновити
рядки у таблиці
- [mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md) -
Клас TableDelete
- [TableDelete::bind](mysql-xdevapi-tabledelete.bind.md) -
Зв'язує параметри запиту на видалення
- [TableDelete::\_\_construct](mysql-xdevapi-tabledelete.construct.md)
- Конструктор класу TableDelete
- [TableDelete::execute](mysql-xdevapi-tabledelete.execute.md) -
Виконує запит на видалення
- [TableDelete::limit](mysql-xdevapi-tabledelete.limit.md) -
Обмежує рядки для видалення
- [TableDelete::orderby](mysql-xdevapi-tabledelete.orderby.md) -
Встановлює критерії сортування видалення
- [TableDelete::where](mysql-xdevapi-tabledelete.where.md) -
Встановлює умову пошуку для видалення
- [mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md) -
Клас TableInsert
- [TableInsert::\_\_construct](mysql-xdevapi-tableinsert.construct.md)
- Конструктор класу TableInsert
- [TableInsert::execute](mysql-xdevapi-tableinsert.execute.md) -
Виконує запит на вставку
- [TableInsert::values](mysql-xdevapi-tableinsert.values.md)
Додає значення вставки рядка
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md) -
Клас TableSelect
- [TableSelect::bind](mysql-xdevapi-tableselect.bind.md) -
Прив'язує параметри запиту вибірки
- [TableSelect::\_\_construct](mysql-xdevapi-tableselect.construct.md)
- Конструктор класу TableSelect
- [TableSelect::execute](mysql-xdevapi-tableselect.execute.md) -
Виконує оператор вибірки
- [TableSelect::groupBy](mysql-xdevapi-tableselect.groupby.md) -
Встановлює критерії угруповання вибірки
- [TableSelect::having](mysql-xdevapi-tableselect.having.md) -
Встановлює вибір із умовою
- [TableSelect::limit](mysql-xdevapi-tableselect.limit.md) -
Обмежує вибрані рядки
- [TableSelect::lockExclusive](mysql-xdevapi-tableselect.lockexclusive.md)
- Виконує EXCLUSIVE LOCK
- [TableSelect::lockShared](mysql-xdevapi-tableselect.lockshared.md)
- Виконує SHARED LOCK
- [TableSelect::offset](mysql-xdevapi-tableselect.offset.md) -
Встановлює межу зміщення
- [TableSelect::orderby](mysql-xdevapi-tableselect.orderby.md) -
Встановлює критерії сортування вибірки
- [TableSelect::where](mysql-xdevapi-tableselect.where.md) -
Встановлює умову пошуку вибірки
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md) -
Клас TableUpdate
- [TableUpdate::bind](mysql-xdevapi-tableupdate.bind.md) -
Прив'язує параметри запиту на оновлення
- [TableUpdate::\_\_construct](mysql-xdevapi-tableupdate.construct.md)
- Конструктор класу TableUpdate
- [TableUpdate::execute](mysql-xdevapi-tableupdate.execute.md) -
Виконує запит на оновлення
- [TableUpdate::limit](mysql-xdevapi-tableupdate.limit.md) -
Обмежує кількість рядків для оновлення
- [TableUpdate::orderby](mysql-xdevapi-tableupdate.orderby.md) -
Встановлює критерії сортування
- [TableUpdate::set](mysql-xdevapi-tableupdate.set.md) -
Додає поле для оновлення
- [TableUpdate::where](mysql-xdevapi-tableupdate.where.md) -
Встановлює фільтр пошуку
- [mysql_xdevapi\Warning](class.mysql-xdevapi-warning.md) - Клас
Warning
- [Warning::\_\_construct](mysql-xdevapi-warning.construct.md) -
Конструктор класу Warning
