- [« Починаємо розробку плагіна
mysqlnd](mysqlnd.plugin.developing.md)
- [Вступ »](intro.oci8.md)

- [PHP Manual](index.md)
- [Модулі для роботи з базами даних окремих
виробників](refs.database.vendors.md)
- Oracle OCI8

# Oracle OCI8

- [Вступ](intro.oci8.md)
- [Встановлення та налаштування](oci8.setup.md)
- [Вимоги](oci8.requirements.md)
- [Установка](oci8.installation.md)
- [Тестування](oci8.test.md)
- [Налаштування під час виконання](oci8.configuration.md)
- [Предвизначені константи](oci8.constants.md)
- [Приклади](oci8.examples.md)
- [Робота зі з'єднаннями OCI8 та Connection
Pooling] (oci8.connection.md)
- [Підтримка OCI8 Fast Application Notification (FAN)](oci8.fan.md)
- [Підтримка прозорого для програм відновлення після відмови
(Transparent Application Failover або TAF) для OCI8] (oci8.taf.md)
- [OCI8 та динамічне трасування DTrace](oci8.dtrace.md)
- [Підтримувані типи даних](oci8.datatypes.md)
- [OCI8 Функції](ref.oci8.md)
- [oci_bind_array_by_name](function.oci-bind-array-by-name.md) -
Пов'язує PHP масив з масивом Oracle PL/SQL
- [oci_bind_by_name](function.oci-bind-by-name.md) - Прикріплює
змінну PHP до відповідної мітки у SQL-вираженні
- [oci_cancel](function.oci-cancel.md) - Закінчує процес
читання з курсору
- [oci_client_version](function.oci-client-version.md) -
Повертає версію клієнтської бібліотеки
- [oci_close](function.oci-close.md) - Закриває з'єднання з
сервером Oracle
- [oci_commit](function.oci-commit.md) - Підтверджує транзакцію
бази даних
- [oci_connect](function.oci-connect.md) - Встановлює
з'єднання з базою даних Oracle
- [oci_define_by_name](function.oci-define-by-name.md) -
Порівняє змінну PHP стовпцю результату запиту
- [oci_error](function.oci-error.md) - Повертає останню
помилку
- [oci_execute](function.oci-execute.md) - Виконує
підготовлений вираз
- [oci_fetch_all](function.oci-fetch-all.md) - Вибирає все
рядки з результату запиту на двомірний масив
- [oci_fetch_array](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_assoc](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного
масиву
- [oci_fetch_object](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row](function.oci-fetch-row.md) - Повертає
наступний рядок із результату запиту у вигляді нумерованого
масиву
- [oci_fetch](function.oci-fetch.md) — Вибирає наступний рядок
з результату в буфер
- [oci_field_is_null](function.oci-field-is-null.md) -
Перевіряє, чи дорівнює поле в поточному отриманому ряду рівним
null
- [oci_field_name](function.oci-field-name.md) - Повертає ім'я
поля з результату запиту
- [oci_field_precision](function.oci-field-precision.md) -
Повертає точність поля
- [oci_field_scale](function.oci-field-scale.md) - Повертає
масштаб поля
- [oci_field_size](function.oci-field-size.md) - Повертає
розмір поля
- [oci_field_type_raw](function.oci-field-type-raw.md) -
Повертає вихідний тип поля Oracle
- [oci_field_type](function.oci-field-type.md) - Повертає ім'я
типу поля
- [oci_free_descriptor](function.oci-free-descriptor.md) -
Звільняє дескриптор
- [oci_free_statement](function.oci-free-statement.md) -
Звільняє ресурси, які займає курсор або SQL-вираз.
- [oci_get_implicit_resultset](function.oci-get-implicit-resultset.md)
— Повертає наступний ресурс дочірнього запиту із ресурсу
батьківського запиту, що має неявні результуючі набори
Oracle Database
- [oci_lob_copy](function.oci-lob-copy.md) — Копіює об'єкт LOB
- [oci_lob_is_equal](function.oci-lob-is-equal.md) - Порівнює
два об'єкти LOB/FILE
- [oci_new_collection](function.oci-new-collection.md) - Створює
новий об'єкт колекції
- [oci_new_connect](function.oci-new-connect.md) - Встановлює
нове з'єднання з сервером Oracle
- [oci_new_cursor](function.oci-new-cursor.md) - Повертає
ідентифікатор створеного курсору
- [oci_new_descriptor](function.oci-new-descriptor.md) -
Ініціалізує новий дескриптор об'єкта LOB чи FILE
- [oci_num_fields](function.oci-num-fields.md) - Повертає
кількість полів у результаті запиту
- [oci_num_rows](function.oci-num-rows.md) - Повертає
кількість рядків, змінених у процесі виконання запиту
- [oci_parse](function.oci-parse.md) — Підготовка запиту до
виконанню
- [oci_password_change](function.oci-password-change.md) -
Змінює пароль користувача Oracle
- [oci_pconnect](function.oci-pconnect.md) — Встановлює
постійне з'єднання з сервером Oracle
- [oci_register_taf_callback](function.oci-register-taf-callback.md)
— Реєструє функцію зворотного виклику для користувача
Oracle Database TAF
- [oci_result](function.oci-result.md) — Повертає значення
поля з результату запиту
- [oci_rollback](function.oci-rollback.md) - Відкочує
транзакції, що очікують на обробку
- [oci_server_version](function.oci-server-version.md) -
Повертає версію сервера Oracle
- [oci_set_action](function.oci-set-action.md) — Задає ім'я
дії
- [oci_set_call_timeout](function.oci-set-call-timout.md) -
Встановлює час очікування у мілісекундах для викликів бази
даних
- [oci_set_client_identifier](function.oci-set-client-identifier.md)
- Задає ідентифікатор клієнта
- [oci_set_client_info](function.oci-set-client-info.md) -
Задає інформацію про клієнта
- [oci_set_db_operation](function.oci-set-db-operation.md) -
Задає операцію бази даних
- [oci_set_edition](function.oci-set-edition.md) — Задає випуск
(edition) бази даних
- [oci_set_module_name](function.oci-set-module-name.md) -
Задає ім'я модулю
- [oci_set_prefetch_lob](function.oci-set-prefetch-lob.md) -
Встановлює обсяг даних, що попередньо вибираються для
кожного CLOB чи BLOB
- [oci_set_prefetch](function.oci-set-prefetch.md) -
Встановлює кількість рядків, що будуть автоматично
обрані до буфера
- [oci_statement_type](function.oci-statement-type.md) -
Повертає тип виразу
- [oci_unregister_taf_callback](function.oci-unregister-taf-callback.md)
— Видалити реєстрацію користувача callback-функції для
Oracle Database TAF
- [OCICollection](class.ocicollection.md) - Клас OCICollection
- [OCICollection::append](ocicollection.append.md) - Додає
елемент у колекцію
- [OCICollection::assign](ocicollection.assign.md) - Надає
колекції значення іншої, вже існуючої колекції
- [OCICollection::assignElem](ocicollection.assignelem.md) -
Надає значення елементу колекції
- [OCICollection::free](ocicollection.free.md) - Звільняє
ресурси, які займає об'єкт колекції
- [OCICollection::getElem](ocicollection.getelem.md) -
Повертає значення елемента
- [OCICollection::max](ocicollection.max.md) - Повертає
максимальна кількість елементів у колекції
- [OCICollection::size](ocicollection.size.md) - Повертає
кількість елементів у колекції
- [OCICollection::trim](ocicollection.trim.md) - Відсікає
елементи з кінця колекції
- [OCILob](class.ocilob.md) - Клас OCILob
- [OCILob::append](ocilob.append.md) — Додає дані з
об'єкта LOB на кінець іншого об'єкта
- [OCILob::close](ocilob.close.md) - Закриває дескриптор
об'єкта LOB
- [OCILob::eof](ocilob.eof.md) — Перевіряє, чи перебуває
покажчик LOB на кінці об'єкта
- [OCILob::erase](ocilob.erase.md) — Очищає вказану частину
об'єкта LOB
- [OCILob::export](ocilob.export.md) — Зберігає вміст
об'єкта LOB у файл
- [OCILob::flush](ocilob.flush.md) — Очищає та записує буфер
об'єкта LOB на сервер
- [OCILob::free](ocilob.free.md) — Визволяє ресурси,
пов'язані з дескриптором LOB
- [OCILob::getBuffering](ocilob.getbuffering.md) - Повертає
поточний стан буферизації великого об'єкта (LOB)
- [OCILob::import](ocilob.import.md) — Записує вміст
файлу в об'єкт LOB
- [OCILob::load](ocilob.load.md) — Повертає вміст об'єкта
LOB
- [OCILob::read](ocilob.read.md) — Повертає частину об'єкта LOB
- [OCILob::rewind](ocilob.rewind.md) — Перекладає вказівник
об'єкта на початок великого об'єкта
- [OCILob::save](ocilob.save.md) — Зберігає дані в LOB
- [OCILob::saveFile](ocilob.savefile.md) - Псевдонім
OCILob::import
- [OCILob::seek](ocilob.seek.md) - Встановлює позицію
внутрішнього покажчика LOB
- [OCILob::setBuffering](ocilob.setbuffering.md) — Змінює
поточний стан буферизації великого об'єкта (LOB)
- [OCILob::size](ocilob.size.md) — Повертає розмір об'єкта LOB
- [OCILob::tell](ocilob.tell.md) — Повертає поточну позицію
внутрішнього покажчика об'єкта LOB
- [OCILob::truncate](ocilob.truncate.md) - Обрізає великий
об'єкт
- [OCILob::write](ocilob.write.md) — записує дані в об'єкт
LOB
- [OCILob::writeTemporary](ocilob.writetemporary.md) -
Записує великий тимчасовий об'єкт (LOB)
- [OCILob::writeToFile](ocilob.writetofile.md) - Псевдонім
OCILob::export
- [Застарілі найменування та функції OCI8](oldaliases.oci8.md)
- [oci_internal_debug](function.oci-internal-debug.md) -
Включає або вимикає внутрішній висновок налагодження
- [ocibindbyname](function.ocibindbyname.md) - Псевдонім
oci_bind_by_name
- [ocicancel](function.ocicancel.md) - Псевдонім oci_cancel
- [ocicloselob](function.ocicloselob.md) - Псевдонім
OCILob::close
- [ocicollappend](function.ocicollappend.md) - Псевдонім
OCICollection::append
- [ocicollassign](function.ocicollassign.md) - Псевдонім
OCICollection::assign
- [ocicollassignelem](function.ocicollassignelem.md) - Псевдонім
OCICollection::assignElem
- [ocicollgetelem](function.ocicollgetelem.md) - Псевдонім
OCICollection::getElem
- [ocicollmax](function.ocicollmax.md) - Псевдонім
OCICollection::max
- [ocicollsize](function.ocicollsize.md) - Псевдонім
OCICollection::size
- [ocicolltrim](function.ocicolltrim.md) - Псевдонім
OCICollection::trim
- [ocicolumnisnull](function.ocicolumnisnull.md) - Псевдонім
oci_field_is_null
- [ocicolumnname](function.ocicolumnname.md) - Псевдонім
oci_field_name
- [ocicolumnprecision](function.ocicolumnprecision.md) -
Псевдонім oci_field_precision
- [ocicolumnscale](function.ocicolumnscale.md) - Псевдонім
oci_field_scale
- [ocicolumnsize](function.ocicolumnsize.md) - Псевдонім
oci_field_size
- [ocicolumntype](function.ocicolumntype.md) - Псевдонім
oci_field_type
- [ocicolumntyperaw](function.ocicolumntyperaw.md) - Псевдонім
oci_field_type_raw
- [ocicommit](function.ocicommit.md) - Псевдонім oci_commit
- [ocidefinebyname](function.ocidefinebyname.md) - Псевдонім
oci_define_by_name
- [ocierror](function.ocierror.md) - Псевдонім oci_error
- [ociexecute](function.ociexecute.md) - Псевдонім oci_execute
- [ocifetch](function.ocifetch.md) - Псевдонім oci_fetch
- [ocifetchinto](function.ocifetchinto.md) — застарілий варіант
функцій oci_fetch_array, oci_fetch_object, oci_fetch_assoc та
oci_fetch_row
- [ocifetchstatement](function.ocifetchstatement.md) - Псевдонім
oci_fetch_all
- [ocifreecollection](function.ocifreecollection.md) - Псевдонім
OCICollection::free
- [ocifreecursor](function.ocifreecursor.md) - Псевдонім
oci_free_statement
- [ocifreedesc](function.ocifreedesc.md) - Псевдонім
OCILob::free
- [ocifreestatement](function.ocifreestatement.md) - Псевдонім
oci_free_statement
- [ociinternaldebug](function.ociinternaldebug.md) - Псевдонім
oci_internal_debug
- [ociloadlob](function.ociloadlob.md) - Псевдонім OCILob::load
- [ocilogoff](function.ocilogoff.md) - Псевдонім oci_close
- [ocilogon](function.ocilogon.md) - Псевдонім oci_connect
- [ocinewcollection](function.ocinewcollection.md) - Псевдонім
oci_new_collection
- [ocinewcursor](function.ocinewcursor.md) - Псевдонім
oci_new_cursor
- [ocinewdescriptor](function.ocinewdescriptor.md) - Псевдонім
oci_new_descriptor
- [ocinlogon](function.ocinlogon.md) - Псевдонім oci_new_connect
- [ocinumcols](function.ocinumcols.md) - Псевдонім
oci_num_fields
- [ociparse](function.ociparse.md) - Псевдонім oci_parse
- [ociplogon](function.ociplogon.md) - Псевдонім oci_pconnect
- [ociresult](function.ociresult.md) - Псевдонім oci_result
- [ocirollback](function.ocirollback.md) - Псевдонім
oci_rollback
- [ocirowcount](function.ocirowcount.md) - Псевдонім
oci_num_rows
- [ocisavelob](function.ocisavelob.md) - Псевдонім OCILob::save
- [ocisavelobfile](function.ocisavelobfile.md) - Псевдонім
OCILob::import
- [ociserverversion](function.ociserverversion.md) - Псевдонім
oci_server_version
- [ocisetprefetch](function.ocisetprefetch.md) - Псевдонім
oci_set_prefetch
- [ocistatementtype](function.ocistatementtype.md) - Псевдонім
oci_statement_type
- [ociwritelobtofile](function.ociwritelobtofile.md) - Псевдонім
OCILob::export
- [ociwritetemporarylob](function.ociwritetemporarylob.md) -
Псевдонім OCILob::writeTemporary
