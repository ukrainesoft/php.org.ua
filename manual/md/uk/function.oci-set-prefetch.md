- [« oci_set_prefetch_lob](function.oci-set-prefetch-lob.md)
- [oci_statement_type »](function.oci-statement-type.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Встановлює кількість рядків, які будуть автоматично вибрані
у буфер

#oci_set_prefetch

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_set_prefetch - Встановлює кількість рядків, які будуть
автоматично вибрані в буфер

### Опис

**oci_set_prefetch**(resource `$statement`, int `$rows`): bool

Встановлює кількість рядків, які будуть вибрані у буфер
клієнтськими бібліотеками Oracle відразу після успішного виклику
[oci_execute()](function.oci-execute.md) та для кожного наступного
внутрішнього запиту даних до бази. Продуктивність може бути
значно збільшено для запитів, що повертають велику кількість
рядків, за допомогою установки значення попередньої вибірки більше
значення за замовчуванням
[oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch).

Попередня вибірка – це ефективний механізм Oracle, що дозволяє
повертати більше одного рядка результату з бази даних за кожен
мережевий запит. Це дає більш раціональне використання мережі та
процесора. Буферизація рядків відбувається всередині OCI8, тому поведінка
функцій вибірки OCI8 ніяк не залежить від розміру попередньої
вибірки. Наприклад, [oci_fetch_row()](function.oci-fetch-row.md) завжди
повертає один рядок. Буфер попередньої вибірки резервується
окремо на кожен запит і не використовується вдруге повторно
запущених запитах або інших з'єднаннях.

Перед викликом [oci_execute()](function.oci-execute.md) викличте
**oci_set_prefetch()**.

Сенс налаштування розміру попередньої вибірки полягає у підборі
зручного значення для передачі в мережі та обробки у базі даних. Для
запитів, що повертають дуже велику кількість рядків, загальна
продуктивність системи може бути кращою, якщо рядки будуть
повертатися в кілька прийомів (тобто встановити розмір попередньої
вибірки менше кількості рядків). Це дозволить базі даних обробляти
запити інших користувачів протягом обробки PHP-скриптом поточного
результату запиту.

Попередня вибірка запитів з'явилася у Oracle 8*i*.
Попередня вибірка REF CURSOR з'явилася в Oracle 11*g*R2 та може
бути застосована у випадку, якщо PHP злінкований з клієнтськими бібліотеками
Oracle 11*g*R2 та старші. Попередня вибірка вкладених курсорів була
додана в Oracle 11*g*R2 та вимагає наявності версії 11*g*R2 та старшої як
для клієнтських бібліотек Oracle, так і для бази даних, що використовується.

Попередня вибірка не підтримується, якщо запити містять LONG
або LOB стовпці. Значення попередньої вибірки ігнорується і,
всіх ситуаціях, що не підтримують попередню вибірку, буде
використана рядкова вибірка.

При використанні Oracle Database 12*c*, попередня вибірка
задана PHP може бути змінена конфігураційним файлом `oraaccess.xml`
клієнта Oracle. Зверніться до документації Oracle за додатковою
інформацією.

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

`rows`
Кількість рядків попередньої вибірки \>u003d 0

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-----------------|------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| PECL OCI8 1.4 | До цієї версії `rows` мав бути \>u003d1.
| PECL OCI8 1.3.4 | До цієї версії попередня вибірка була обмежена до меншого зі значень 'rows' рядків і 1024 rows байт. Тепер обмеження за розміром байт знято. |

### Приклади

**Приклад #1 Зміна значення попередньої вибірки за замовчуванням для
запиту**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'SELECT * FROM myverybigtable');oci_set_prefetch($stid, // Встановлюємо перед дзвінком oci_execute()oci_execute($stid);echo "<table borderu003d'1'>
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>".($item !u003du003d null ? htmlentities($item, ENT_QU)
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 Зміна значення попередньої вибірки за замовчуванням для
вибірки REF CURSOR**

` <?php/*  Создайте хранимую процедуру PL/SQL следующим образом:  CREATE OR REPLACE PROCEDURE myproc(p1 OUT SYS_REFCURSOR) AS  BEGIN    OPEN p1 FOR SELECT * FROM all_objects WHERE ROWNUM < 5000; END;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'BEGIN myproc(:rc); END;');$refcur u003d oci_new_cur $conn);oci_bind_by_name($stid, ':rc', $refcur, -1, OCI_B_CURSOR);oci_execute($stid);// Міняємо розмір попередньої¦вибірки перед запуском курсора./          // з клієнтськими бібліотеками Oracle 11gR2 і старшеoci_set_prefetch($refcur, 200);oci_execute($refcur);echo "<table borderu003d'1'>
";while ($row u003d oci_fetch_array($refcur, OCI_ASSOC+OCI_RETURN_NULLS)) {    echo ""<tr>
";    foreach ($row as $item) {        echo "    <td>".($item !u003du003d null ? htmlentities($item, ENT_QU)
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($refcur);oci_free_statement($stid);oci_close($conn);?> `

Якщо PHP OCI8 робить вибірку із REF CURSOR, а потім передає REF
CURSOR назад в іншу PL/SQL-процедуру для подальшої обробки,
необхідно встановити розмір попередньої вибірки REF CURSOR
**`0`**, щоб уникнути "втрати" рядів із результату. Значення
попередньої вибірки - це кількість "зайвих" рядів, отриманих
кожним внутрішнім запитом OCI8 до бази даних, тому встановлення його в
**`0`** означає вибірку лише одного ряду за один раз.

**Приклад #3 Встановлення значення попередньої вибірки під час передачі REF
CURSOR назад у Oracle**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/orcl');// отримання REF CURSOR$stid u003d oci_parse($conn, 'BEGIN myproc(:rc_out); END;'); $refcuru003d oci_new_cursor($conn);oci_bind_by_name($stid, ':rc_out', $refcur, -1, OCI_B_CURSOR);oci_execute($stid);// Відображаємо|два|ряду, эти ряды не будут переданы обратно в  myproc_use_rc().// Нулевое значение предварительной выборки было разрешено в версии PHP 5.3.2 и PECL OCI8 1.4oci_set_prefetch($refcur, 0);oci_execute($refcur);$row u003d oci_fetch_array($refcur );var_dump($row);$rowu003du003doci_fetch_array($refcur);var_dump($row);// передаємо REF CURSOR в myproc_use_rc() для дальшої обробки результату$stid u003d' ); end;');oci_bind_by_name($stid, ':rc_in', $refcur, -1, OCI_B_CURSOR);oci_execute($stid);?> `

### Дивіться також

- Директива
[oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch)
