- [« Типи ресурсів](ibase.resources.md)
- [Функції Firebird/InterBase »](ref.ibase.md)

- [PHP Manual](index.md)
- [Firebird/InterBase](book.ibase.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

Наступні константи можна задавати у функції
[ibase_trans()](function.ibase-trans.md) для визначення поведінки
транзакцій.

| Константа Опис |
|-------------------|----------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| IBASE_DEFAULT | Налаштування за замовчуванням для нової транзакції. Це значення визначається клієнтською бібліотекою, яке в більшості випадків дорівнює IBASE_WRITE\|IBASE_CONCURRENCY\|IBASE_WAIT. |
| IBASE_READ | Починає транзакцію лише на читання. |
| IBASE_WRITE | Починає транзакцію в режимі читання та запису. |
| IBASE_CONSISTENCY | Починає транзакцію з рівнем ізоляції 'consistency' (узгодження). Це означає, що транзакція не може читати з таблиць, які вносяться зміни паралельними (конкуруючими) транзакціями. |
| IBASE_CONCURRENCY | Починає транзакцію з рівнем ізоляції 'concurrency' (або 'snapshot', 'моментальний знімок'). Це означає, що транзакція має доступ до всіх таблиць, але може бачити зміни інших транзакцій після знімка. |
| IBASE_COMMITTED | Починає транзакцію із рівнем ізоляції 'read committed' (читати фіксоване). Цей прапор має бути об'єднаний з **`IBASE_REC_VERSION`** або **`IBASE_REC_NO_VERSION`**. Цей рівень ізоляції дозволяє отримати доступ до змін, здійснених після початку транзакції. Якщо вказаний прапор **`IBASE_REC_NO_VERSION`**, лише остання версія змін може бути прочитана. Якщо вказано прапор **`IBASE_REC_VERSION`**, то можна читати зміни, що перебувають у черзі в паралельних транзакціях. |
| IBASE_WAIT | Прапор, що вказує, що транзакція повинна чекати у разі конфлікту транзакцій. |
| IBASE_NOWAIT | Прапор, який вказує на те, що транзакція повинна повернути помилку при виникненні конфлікту транзакцій. |

**Прапори транзакцій Firebird/InterBase**

Наступні константи можна задавати у функціях
[ibase_fetch_row()](function.ibase-fetch-row.md),
[ibase_fetch_assoc()](function.ibase-fetch-assoc.md) або
[ibase_fetch_object()](function.ibase-fetch-object.md), для керування
поведінкою вилученням даних.

| Константа Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| IBASE_FETCH_BLOBS | Також можна використовувати **`IBASE_TEXT`** для забезпечення зворотної сумісності. Вимушує витягувати об'єкти BLOB повністю, а не лише їх ідентифікатори. |
| IBASE_FETCH_ARRAYS | Вимушує витягувати масиви повністю, а не лише їхні ідентифікатори. Ідентифікатори масивів можна використовувати тільки для операцій вставки, тому що на даний момент відсутні будь-які інші функції для роботи з ними. |
| IBASE_UNIXTIME | Вимушує поля типу дата/час витягуватися не як рядки, а як тимчасові мітки Unix (кількість секунд, що пройшли з 1 січня 1970 00:00 UTC). Може викликати проблеми на деяких системах, якщо необхідно працювати з ранніми датами. |

**Прапори вилучення Firebird/InterBase**

Наступні константи використовуються для передачі в запити та сервісні
функції API ([ibase_server_info()](function.ibase-server-info.md),
[ibase_db_info()](function.ibase-db-info.md),
[ibase_backup()](function.ibase-backup.md),
[ibase_restore()](function.ibase-restore.md) та
[ibase_maintain_db()](function.ibase-maintain-db.md)). За
Подробиці див. у документації Firebird/InterBase.

**`IBASE_BKP_IGNORE_CHECKSUMS`**

**`IBASE_BKP_IGNORE_LIMBO`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_BKP_METADATA_ONLY`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_BKP_NO_GARBAGE_COLLECT`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_BKP_OLD_DESCRIPTIONS`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_BKP_NON_TRANSPORTABLE`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_BKP_CONVERT`**
Опція для [ibase_backup()](function.ibase-backup.md)

**`IBASE_RES_DEACTIVATE_IDX`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_RES_NO_SHADOW`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_RES_NO_VALIDITY`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_RES_ONE_AT_A_TIME`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_RES_REPLACE`**

**`IBASE_RES_CREATE`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_RES_USE_ALL_SPACE`**
Опція для [ibase_restore()](function.ibase-restore.md)

**`IBASE_PRP_PAGE_BUFFERS`**

**`IBASE_PRP_SWEEP_INTERVAL`**

**`IBASE_PRP_SHUTDOWN_DB`**

**`IBASE_PRP_DENY_NEW_TRANSACTIONS`**

**`IBASE_PRP_DENY_NEW_ATTACHMENTS`**

**`IBASE_PRP_RESERVE_SPACE`**

**`IBASE_PRP_RES_USE_FULL`**

**`IBASE_PRP_RES`**

**`IBASE_PRP_WRITE_MODE`**

**`IBASE_PRP_WM_ASYNC`**

**`IBASE_PRP_WM_SYNC`**

**`IBASE_PRP_ACCESS_MODE`**

**`IBASE_PRP_AM_READONLY`**

**`IBASE_PRP_AM_READWRITE`**

**`IBASE_PRP_SET_SQL_DIALECT`**

**`IBASE_PRP_ACTIVATE`**

**`IBASE_PRP_DB_ONLINE`**

**`IBASE_RPR_CHECK_DB`**

**`IBASE_RPR_IGNORE_CHECKSUM`**

**`IBASE_RPR_KILL_SHADOWS`**

**`IBASE_RPR_MEND_DB`**

**`IBASE_RPR_VALIDATE_DB`**

**`IBASE_RPR_FULL`**

**`IBASE_RPR_SWEEP_DB`**
Опція для [ibase_maintain_db()](function.ibase-maintain-db.md)

**`IBASE_STS_DATA_PAGES`**

**`IBASE_STS_DB_LOG`**

**`IBASE_STS_HDR_PAGES`**

**`IBASE_STS_IDX_PAGES`**

**`IBASE_STS_SYS_RELATIONS`**
Опція для [ibase_db_info()](function.ibase-db-info.md)

**`IBASE_SVC_SERVER_VERSION`**
Опція для [ibase_server_info()](function.ibase-server-info.md)

**`IBASE_SVC_IMPLEMENTATION`**
Опція для [ibase_server_info()](function.ibase-server-info.md)

**`IBASE_SVC_GET_ENV`**
Опція для [ibase_server_info()](function.ibase-server-info.md)

**`IBASE_SVC_GET_ENV_LOCK`**

**`IBASE_SVC_GET_ENV_MSG`**

**`IBASE_SVC_USER_DBPATH`**

**`IBASE_SVC_SVR_DB_INFO`**

**`IBASE_SVC_GET_USERS`**
Опція для [ibase_server_info()](function.ibase-server-info.md)
