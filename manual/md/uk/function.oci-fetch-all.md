- [«oci_execute](function.oci-execute.md)
- [oci_fetch_array »](function.oci-fetch-array.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Вибирає всі рядки з результату запиту до двомірного масиву

#oci_fetch_all

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch_all — Вибирає всі рядки з результату запиту на двомірний
масив

### Опис

**oci_fetch_all**(
resource `$statement`,
array `&$output`,
int `$offset` u003d 0,
int `$limit` u003d -1,
int `$flags` u003d OCI_FETCHSTATEMENT_BY_COLUMN \| OCI_ASSOC
): int

Вибирає всі рядки з результату запиту двомірний масив. за
замовчуванням повертає всі рядки.

Ця функція може викликатися лише один раз для кожного запиту
запущеного за допомогою [oci_execute()](function.oci-execute.md).

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

`output`
Змінна, що містить повернені рядки.

LOB стовпці повертаються у вигляді рядків, для яких підтримується Oracle
перетворення.

Дивіться [oci_fetch_array()](function.oci-fetch-array.md) для більш
детальної інформації про те, як проводиться вибірка даних та типів.

`offset`
Число рядків, які необхідно виключити з вибірки. За замовчуванням одно
0, вибірка повертається з наступного за першим рядом.

`limit`
Число рядків, що повертаються. За замовчуванням одно -1, що означає повернення
всіх рядків, починаючи із зазначених у `offset` + 1 попередній рядок.

`flags`
Параметр `flags` містить структуру масиву, що відображає необхідність
використання асоціативних масивів

| Константа Опис |
|------------------------------------|------------ -------------------------------------------------- ------------------------------|
| **`OCI_FETCHSTATEMENT_BY_ROW`** | Масив буде містити по одному підмасиву на кожен рядок запиту. |
| **`OCI_FETCHSTATEMENT_BY_COLUMN`** | Масив міститиме по одному підмасиву на кожен стовпець. Використовується за замовчуванням. |

**Структура масиву **oci_fetch_all()****

Масиви можуть бути проіндексовані або заголовками стовпців або
пронумеровані. Повернеться лише один режим індексації.

| Константа Опис |
|-----------------|------------------------------- ------------------------------------------------|
| **`OCI_NUM`** | Для масиву кожного стовпця використовуються числові індекси. |
| **`OCI_ASSOC`** | Для масиву кожного стовпця використовують асоціативні індекси. За замовчуванням. |

**Індексація масиву **oci_fetch_all()****

Використовуйте оператор додавання "+" для вибору певної комбінації
структури та індексації масиву.

Регістронезалежні (за замовчуванням у Oracle) імена полів у результуючому
масиві матимуть асоціативні індекси у верхньому регістрі.
Реєстрозалежні імена полів матимуть індекси з тими самими регістрами
символів, що й саме поле. Використовуйте
[var_dump()](function.var-dump.md) на `output`, щоб перевірити
відповідність регістрів символів для кожного запиту.

У запитах у яких є кілька стовпців з однаковими іменами
необхідно використовувати псевдоніми. Інакше лише один із стовпців
з'явиться в асоціативному масиві.

### Значення, що повертаються

Повертає число стовпців в `output`, який може набувати значення 0
або більше.

### Приклади

**Приклад #1 Приклад використання **oci_fetch_all()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM oci_fetch_all($stid, $res);echo "$nrows рядків отримано<br>
";var_dump($res);// Виведення var_dump://   2 рядків отримано//   array(2) {//      ["POSTAL_CODE"]u003d>/    string(6) "00989x"//        [1]u003d>//        string(6) "10934x"//      }//      ["CITY"]u003d>//      array(2) {//        [0]u003d>/ /                                                                                   
";foreach ($res as $col) {    echo "<tr>
";   foreach ($col as $item) {        echo "    <td>".($item !u003du003d null ? htmlentities($item, ENT_QU)
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 Приклад використання **oci_fetch_all()** з
**`OCI_FETCHSTATEMENT_BY_ROW`****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM oci_fetch_all($stid, $res, null, null, OCI_FETCHSTATEMENT_BY_ROW);echo "$nrows рядків отримано<br>
";var_dump($res);// Виведе://   2 рядків отримано//   array(2) {//     [0]u003d>//      array(2)                                          стр (6) "00989x"//        ["CITY"]u003d>//        string(4) "Roma"//      }//      [1]u003d>//      array(2) {//        ["POSTAL_CODE"]u003d> //                    ¦                                    ¦ 

**Приклад #3 Приклад використання **oci_fetch_all()** з **`OCI_NUM`****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM oci_fetch_all($stid, $res, null, null, OCI_FETCHSTATEMENT_BY_ROW + OCI_NUM);echo "$nrows рядків отримано<br>
";var_dump($res);// Виведе //   2 рядків отримано//   array(2) {//      [0]u003d>//      array(2)                                   ) "00989x"//        [1]u003d>//        string(4) "Roma"//      }//      [1]u003d>//      array(2) {//        [0]u003d>//        string(6) "10934x"//        [1]u003d>//        string(6) "Venice"//      }//    }oci_free_statement($d?

### Примітки

> **Примітка**:
>
> Використання `offset` неефективне. Всі ряди, що пропускаються, включаються
> в результат запиту, що повертається базою даних до PHP. Після цього вони
> виключаються. Більш ефективно використовувати SQL для відступу та
> обмеження рядів у запиті. Дивіться
> [oci_fetch_array()](function.oci-fetch-array.md) для прикладів.

> **Примітка**:
>
> Запити, що повертають велику кількість рядів, можуть бути більшими
> ефективними, якщо використовується однорядна функція вибірки, така як
> [oci_fetch_array()](function.oci-fetch-array.md).

> **Примітка**:
>
> Для запитів, що повертають велику кількість рядів,
> продуктивність може бути значно збільшена за допомогою
> збільшення значення опції
> [oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch)
> або використання
> [oci_set_prefetch()](function.oci-set-prefetch.md).

> **Примітка**:
>
> Не повертає ряди для неявних результуючих наборів у Oracle
> Database 12*c*. Використовуйте замість цієї функції функцію
> [oci_fetch_array()](function.oci-fetch-array.md).

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
- [oci_set_prefetch()](function.oci-set-prefetch.md) - Встановлює
кількість рядків, які будуть автоматично вибрані в буфер
