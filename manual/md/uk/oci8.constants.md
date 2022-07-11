- [« Налаштування під час виконання](oci8.configuration.md)
- [Приклади »](oci8.examples.md)

- [PHP Manual](index.md)
- [OCI8](book.oci8.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

| Константа Опис |
|------------------------------------|------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| **`OCI_ASSOC`** | Використовується функціями [oci_fetch_all()](function.oci-fetch-all.md) та [oci_fetch_array()](function.oci-fetch-array.md) для отримання результатів у вигляді асоціативного масиву. |
| **`OCI_BOTH`** | Використовується функціями [oci_fetch_all()](function.oci-fetch-all.md) та [oci_fetch_array()](function.oci-fetch-array.md) для отримання результатів у вигляді масиву з асоціативними та числовими індексами. |
| **`OCI_COMMIT_ON_SUCCESS`** | Режим виконання виразів для [oci_execute()](function.oci-execute.md). Автоматично завершує транзакцію оператором COMMIT у разі успішного виконання виразу. |
| **`OCI_CRED_EXT`** | Використовується функцією [oci_connect()](function.oci-connect.md) для зовнішньої або системної автентифікації. Додана Introduced в PHP 5.3 та PECL OCI8 1.3.4. |
| **`OCI_DEFAULT`** | Дивіться **`OCI_NO_AUTO_COMMIT`**. |
| **`OCI_DESCRIBE_ONLY`** | Режим виконання виразів для [oci_execute()](function.oci-execute.md). Використовуйте цей режим, якщо ви хочете отримати дані про виконання запиту, а не виконати запит. |
| **`OCI_EXACT_FETCH`** | Застаріло. Режим отримання результатів. Використовується в тому випадку, якщо програмі відомо заздалегідь скільки рядків буде отримано в результаті. Oracle 8 і пізніші версії не використовують вибірку результатів із попередженням у цьому режимі, а курсори знищуються автоматично після вибірки очікуваної кількості рядків, що може зменшити вимоги сервера до ресурсів. |
| **`OCI_FETCHSTATEMENT_BY_COLUMN`** | Режим [oci_fetch_all()](function.oci-fetch-all.md) за промовчанням. |
| **`OCI_FETCHSTATEMENT_BY_ROW`** | Альтернативний режим [oci_fetch_all()](function.oci-fetch-all.md). |
| **`OCI_LOB_BUFFER_FREE`** | Використовується функцією [OCILob::flush](ocilob.flush.md) для звільнення буферів, що використовуються. |
| **`OCI_NO_AUTO_COMMIT`** | Режим виконання виразів для [oci_execute()](function.oci-execute.md). У цьому режимі транзакція автоматично не завершується оператором COMMIT. Для підвищення читання використовуйте в новому коді цю константу замість старої рівносильної константи **`OCI_DEFAULT`**. Додана до PHP 5.3.2 (PECL OCI8 1.4). |
| **`OCI_NUM`** | Використовується з [oci_fetch_all()](function.oci-fetch-all.md) та [oci_fetch_array()](function.oci-fetch-array.md) для отримання масиву з числовими індексами. |
| **`OCI_RETURN_LOBS`** | Використовується [oci_fetch_array()](function.oci-fetch-array.md) для отримання вмісту об'єкта LOB замість дескриптора. |
| **`OCI_RETURN_NULLS`** | Використовується з [oci_fetch_array()](function.oci-fetch-array.md) для отримання порожніх елементів масиву, якщо відповідне поле в результаті **`null`**. |
| **`OCI_SEEK_CUR`** | Використовується [OCILob::seek](ocilob.seek.md) для встановлення позиції зміщення. |
| **`OCI_SEEK_END`** | Використовується [OCILob::seek](ocilob.seek.md) для встановлення позиції зміщення. |
| **`OCI_SEEK_SET`** | Використовується [OCILob::seek](ocilob.seek.md) для встановлення позиції зміщення. |
| **`OCI_SYSDATE`** | Більше не використовується. |
| **`OCI_SYSDBA`** | Використовується функцією [oci_connect()](function.oci-connect.md) для з'єднання з привілеями SYSOPER. Опція `php.ini` [oci8.privileged_connect](oci8.configuration.md#ini.oci8.privileged-connect) повинна бути увімкнена. |
| **`OCI_SYSOPER`** | Використовується функцією [oci_connect()](function.oci-connect.md) для з'єднання з привілеями SYSOPER. Опція `php.ini` [oci8.privileged_connect](oci8.configuration.md#ini.oci8.privileged-connect) повинна бути увімкнена. |
| **`OCI_TEMP_BLOB`** | Використовується [OCILob::writeTemporary](ocilob.writetemporary.md) для створення тимчасового BLOB. |
| **`OCI_TEMP_CLOB`** | Використовується функцією [OCILob::writeTemporary](ocilob.writetemporary.md) для створення тимчасового CLOB. |

**Функції та методи OCI8**

| Константа Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------|
| **`OCI_B_BFILE`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу BFILE. |
| **`OCI_B_BIN`** | Використовується спільно з функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки необроблених даних (RAW). |
| **`OCI_B_BLOB`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу BLOB. |
| **`OCI_B_BOL`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу PL/SQL BOOLEAN. |
| **`OCI_B_CFILEE`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу CFILE. |
| **`OCI_B_CLOB`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу CLOB. |
| **`OCI_B_CURSOR`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки курсорів, раніше отриманих з [oci_new_descriptor()](function.oci-new-descriptor.md). |
| **`OCI_B_INT`** | Використовується функцією [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів елементів типу INTEGER. |
| **`OCI_B_NTY`** | Використовується [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки іменованих типів даних. Зверніть увагу: у PHP \< 5.0 константа називалася **`OCI_B_SQLT_NTY`**. |
| **`OCI_B_NUM`** | Використовується функцією [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів елементів типу NUMBER. |
| **`OCI_B_ROWID`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу ROWID. |
| **`SQLT_AFC`** | Використовується [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу CHAR. |
| **`SQLT_AVC`** | Використовується функцією [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу VARCHAR2. |
| **`SQLT_BDOUBLE`** | Не підтримується. |
| **`SQLT_BFILEE`** | Те саме, що і **`OCI_B_BFILE`**. |
| **`SQLT_BFLOAT`** | Не підтримується. |
| **`SQLT_BIN`** | Те саме, що і **`OCI_B_BIN`**. |
| **`SQLT_BLOB`** | Те саме, що і **`OCI_B_BLOB`**. |
| **`SQLT_BOL`** | Те саме, що і **`OCI_B_BOL`**. |
| **`SQLT_CFILEE`** | Те саме, що і **`OCI_B_CFILEE`**. |
| **`SQLT_CHR`** | Використовується функцією [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу VARCHAR2. Також використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md). |
| **`SQLT_CLOB`** | Те саме, що і **`OCI_B_CLOB`**. |
| **`SQLT_FLT`** | Використовується [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу FLOAT. |
| **`SQLT_INT`** | Те саме, що і **`OCI_B_INT`**. |
| **`SQLT_LBI`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу LONG RAW. |
| **`SQLT_LNG`** | Використовується функцією [oci_bind_by_name()](function.oci-bind-by-name.md) для прив'язки змінних типу LONG. |
| **`SQLT_LVC`** | Використовується функцією [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу LONG VARCHAR. |
| **`SQLT_NTY`** | Те саме, що і **`OCI_B_NTY`**. |
| **`SQLT_NUM`** | Те саме, що і **`OCI_B_NUM`**. |
| **`SQLT_ODT`** | Використовується [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу LONG. |
| **`SQLT_RDD`** | Те саме, що і **`OCI_B_ROWID`**. |
| **`SQLT_RSET`** | Те саме, що і **`OCI_B_CURSOR`**. |
| **`SQLT_STR`** | Використовується [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів з елементами типу STRING. |
| **`SQLT_UIN`** | Не підтримується. |
| **`SQLT_VCS`** | Використовується спільно з [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) для прив'язки масивів VARCHAR. |

**OCI8 прив'язка змінних та визначення типів**

| Константа Опис |
|-----------------------|------------------------- -------------------------------------------------- -------------------------------------------|
| **`OCI_DTYPE_FILE`** | Прапор використовується [oci_new_descriptor()](function.oci-new-descriptor.md) для ініціалізації дескриптора типу FILE. |
| **`OCI_DTYPE_LOB`** | Прапор використовується [oci_new_descriptor()](function.oci-new-descriptor.md) для ініціалізації дескриптора типу LOB. |
| **`OCI_DTYPE_ROWID`** | Прапор використовується [oci_new_descriptor()](function.oci-new-descriptor.md) для ініціалізації дескриптора типу ROWID. |
| **`OCI_D_FILE`** | Те саме, що і **`OCI_DTYPE_FILE`**. |
| **`OCI_D_LOB`** | Те саме, що і **`OCI_DTYPE_LOB`**. |
| **`OCI_D_ROWID`** | Те саме, що і **`OCI_DTYPE_ROWID`**. |

**Типи дескрипторів OCI8**
