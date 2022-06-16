- [« Приклади](dba.examples.md)
- [Функції DBA»] (ref.dba.md)

- [PHP Manual](index.md)
- [Приклади](dba.examples.md)
- Базове використання

## Базове використання

**Приклад #1 DBA приклад**

` <?php$id u003d dba_open("/tmp/test.db", "n", "db2");if (!$id) {    echo "dba_open failed
";   exit;}dba_replace("key", "This is an example!", $id);if (dba_exists("key", $id)) {    echo dba_fetch("key", $ key", $id);}dba_close($id);?> `

DBA є бінарно безпечним і не має будь-яких довільних
обмежень. Тим не менш, він успадковує всі обмеження, встановлені
базовою реалізацією бази даних

Усі файлові бази даних повинні забезпечувати спосіб завдання файлового
режиму новоствореної бази даних, якщо це взагалі можливо.
Файловий режим зазвичай передається як четвертий аргумент у
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

Ви можете отримати всі записи бази даних у процедурному стилі, використовуючи
функції [dba_firstkey()](function.dba-firstkey.md) та
[dba_nextkey()](function.dba-nextkey.md). Ви не можете змінити базу
даних під час її обходу.

**Приклад #2 Обхід бази даних**

` <?php// ...open database...$key u003d dba_firstkey($id);while ($key !u003du003d false) {    if (true) {          // запоминаем ключ для выполнения некоторых действий далее        $handle_later[ ] u003d $key; }    $key u003d dba_nextkey($id);}foreach ($handle_later as $val) {    dba_delete($val, $id);}?> `
