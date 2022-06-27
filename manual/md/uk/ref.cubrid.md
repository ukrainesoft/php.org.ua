- [« Приклади](cubrid.examples.md)
- [cubrid_bind »](function.cubrid-bind.md)

- [PHP Manual](index.md)
- [CUBRID](book.cubrid.md)
- Функції CUBRID

# Функції CUBRID

## Зміст

- [cubrid_bind](function.cubrid-bind.md) - Зв'язує змінні з
підготовленим запитом
- [cubrid_close_prepare](function.cubrid-close-prepare.md) -
Закриває обробник запиту
- [cubrid_close_request](function.cubrid-close-request.md) -
Закриває обробник запиту
- [cubrid_col_get](function.cubrid-col-get.md) — Отримання вмісту
стовпця типу колекція з OID
- [cubrid_col_size](function.cubrid-col-size.md) - Отримує
кількість елементів у стовпці типу колекція з OID
- [cubrid_column_names](function.cubrid-column-names.md) — Отримати
імена стовпців у результуючому наборі
- [cubrid_column_types](function.cubrid-column-types.md) — Отримати
типи стовпців у результуючому наборі
- [cubrid_commit](function.cubrid-commit.md) — Підтвердження
транзакції
- [cubrid_connect_with_url](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
- [cubrid_connect](function.cubrid-connect.md) — Відкриває
з'єднання з сервером CUBRID
- [cubrid_current_oid](function.cubrid-current-oid.md) - Повертає
OID поточної позиції курсору
- [cubrid_disconnect](function.cubrid-disconnect.md) — Закриває
з'єднання з базою даних
- [cubrid_drop](function.cubrid-drop.md) — Видалення екземпляра за
OID
- [cubrid_error_code_facility](function.cubrid-error-code-facility.md)
— Отримати код рівня, на якому сталася помилка
- [cubrid_error_code](function.cubrid-error-code.md) — Отримати код
помилки
- [cubrid_error_msg](function.cubrid-error-msg.md) - Повертає
текст останньої помилки, що відбулася
- [cubrid_execute](function.cubrid-execute.md) — Виконує
підготовлений SQL-оператор
- [cubrid_fetch](function.cubrid-fetch.md) - Вибирає наступну
рядок із набору результатів
- [cubrid_free_result](function.cubrid-free-result.md) - Звільняє
пам'ять, зайняту даними результату
- [cubrid_get_autocommit](function.cubrid-get-autocommit.md) -
Повертає налаштування авто-комміту для з'єднання
- [cubrid_get_charset](function.cubrid-get-charset.md) - Повертає
кодування поточного з'єднання CUBRID
- [cubrid_get_class_name](function.cubrid-get-class-name.md) -
Отримує ім'я класу за допомогою OID
- [cubrid_get_client_info](function.cubrid-get-client-info.md) -
Повертає версію клієнтської бібліотеки
- [cubrid_get_db_parameter](function.cubrid-get-db-parameter.md) -
Повертає параметри бази даних CUBRID
- [cubrid_get_query_timeout](function.cubrid-get-query-timeout.md) -
Отримує значення часу очікування запиту
- [cubrid_get_server_info](function.cubrid-get-server-info.md) -
Повертає версію сервера CUBRID
- [cubrid_get](function.cubrid-get.md) — отримує стовпець, використовуючи
OID
- [cubrid_insert_id](function.cubrid-insert-id.md) - Повертає
ідентифікатор, згенерований для останнього оновленого стовпця
AUTO_INCREMENT
- [cubrid_is_instance](function.cubrid-is-instance.md) — Перевіряє,
чи існує екземпляр, на який вказує OID
- [cubrid_lob_close](function.cubrid-lob-close.md) - Закриває
дані BLOB/CLOB
- [cubrid_lob_export](function.cubrid-lob-export.md) - Експортує
дані BLOB/CLOB у файл
- [cubrid_lob_get](function.cubrid-lob-get.md) — Отримує дані
BLOB/CLOB
- [cubrid_lob_send](function.cubrid-lob-send.md) — Читає дані
BLOB/CLOB та відправляє їх прямо до браузера
- [cubrid_lob_size](function.cubrid-lob-size.md) — Отримує розмір
даних BLOB/CLOB
- [cubrid_lob2_bind](function.cubrid-lob2-bind.md) - Зв'язує
об'єкт LOB або рядок у вигляді об'єкта LOB з підготовленим оператором
як параметри
- [cubrid_lob2_close](function.cubrid-lob2-close.md) - Закриває
об'єкт LOB
- [cubrid_lob2_export](function.cubrid-lob2-export.md) -
Експортує LOB-об'єкт у файл
- [cubrid_lob2_import](function.cubrid-lob2-import.md) - Імпортує
дані BLOB/CLOB із файлу
- [cubrid_lob2_new](function.cubrid-lob2-new.md) — Створює об'єкт
LOB
- [cubrid_lob2_read](function.cubrid-lob2-read.md) - Виробляє
читання з даних BLOB/CLOB
- [cubrid_lob2_seek64](function.cubrid-lob2-seek64.md) — Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_seek](function.cubrid-lob2-seek.md) — Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_size64](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size](function.cubrid-lob2-size.md) — Отримує розмір
LOB-об'єкта
- [cubrid_lob2_tell64](function.cubrid-lob2-tell64.md) — Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_tell](function.cubrid-lob2-tell.md) — Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_write](function.cubrid-lob2-write.md) - Записує в
LOB-об'єкт
- [cubrid_lock_read](function.cubrid-lock-read.md) - Встановлює
блокування читання для цього OID
- [cubrid_lock_write](function.cubrid-lock-write.md) - Встановлює
блокування запису для цього OID
- [cubrid_move_cursor](function.cubrid-move-cursor.md) — Переміщує
курсор в результаті
- [cubrid_next_result](function.cubrid-next-result.md) - Отримує
результат наступного запиту під час виконання кількох
SQL-операторів
- [cubrid_num_cols](function.cubrid-num-cols.md) - Повертає
кількість стовпців у наборі результатів
- [cubrid_num_rows](function.cubrid-num-rows.md) — Отримати
кількість рядків у наборі результатів
- [cubrid_pconnect_with_url](function.cubrid-pconnect-with-url.md) -
Відкриває постійне з'єднання із сервером CUBRID
- [cubrid_pconnect](function.cubrid-pconnect.md) — Відкриває
постійне з'єднання із сервером CUBRID
- [cubrid_prepare](function.cubrid-prepare.md) — Підготовка
SQL-вираз до виконання
- [cubrid_put](function.cubrid-put.md) — Оновлює стовпець з
використанням OID
- [cubrid_rollback](function.cubrid-rollback.md) - Відкат транзакції
- [cubrid_schema](function.cubrid-schema.md) — Отримує запитану
інформацію про схему
- [cubrid_seq_drop](function.cubrid-seq-drop.md) — Видаляє елемент
зі стовпця типу послідовності, використовуючи OID
- [cubrid_seq_insert](function.cubrid-seq-insert.md) - Вставляє
елемент в стовпець типу послідовності, використовуючи OID
- [cubrid_seq_put](function.cubrid-seq-put.md) — Оновлює значення
елемент стовпця типу послідовності, використовуючи OID
- [cubrid_set_add](function.cubrid-set-add.md) — Вставляє один
елемент для встановлення стовпця типу за допомогою OID
- [cubrid_set_autocommit](function.cubrid-set-autocommit.md) -
Встановлює режим авто-комміту для з'єднання
- [cubrid_set_db_parameter](function.cubrid-set-db-parameter.md) -
Встановлює параметри бази даних CUBRID
- [cubrid_set_drop](function.cubrid-set-drop.md) — Видаляє елемент
зі стовпця заданого типу, використовуючи OID
- [cubrid_set_query_timeout](function.cubrid-set-query-timeout.md) -
Встановлює час очікування на виконання запиту
- [cubrid_version](function.cubrid-version.md) — Отримати версію
модуля CUBRID PHP
