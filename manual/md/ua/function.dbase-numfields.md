- [« dbase_get_record](function.dbase-get-record.md)
- [dbase_numrecords »](function.dbase-numrecords.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Отримує кількість полів бази даних

#dbase_numfields

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_numfields — Отримує кількість полів бази даних

### Опис

**dbase_numfields**(resource `$database`): int

Отримує кількість полів (колонок) у зазначеній базі даних.

> **Примітка**:
>
> Поле нумеруються від 0 до `dbase_numfields($db)-1`, тоді як записи
> бази даних від 1 до `dbase_numrecords($db)`.

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

### Значення, що повертаються

Кількість полів у базі даних або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- -----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а чи не int. |

### Приклади

**Приклад #1 Приклад використання **dbase_numfields()****

` <?php//відкриття БД для читання$db u003d dbase_open('. mp est.dbf', 0);//якщо з'єднання успішно, виконуємо діїif ($db) re| ($ db); //одержання кількості полів БД  $nf  u003d dbase_numfields($db); //висновок всіх записів БД  //построковий обхід for ($j u003d 1;  $j <u003d $record_numbers;  $j++) {    //виведення номера                                                                                         | //отримання рядки по номеру (індексу)    $rec u003d dbase_get_record($db, $j); //обхід по стовпцям    for ($i u003d 0; $i < $nf; $i++) {       //виведення даних поля       echo $rec[ }  echo "<br>"; }dbase_close($db);} else echo "Не удалося підключитися до БД";?> `

### Дивіться також

- [dbase_numrecords()](function.dbase-numrecords.md) - Отримує
кількість записів у базі даних
