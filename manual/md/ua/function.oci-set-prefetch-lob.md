- [«oci_set_module_name](function.oci-set-module-name.md)
- [oci_set_prefetch »](function.oci-set-prefetch.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Встановлює обсяг даних, що попередньо вибираються для кожного
CLOB або BLOB

#oci_set_prefetch_lob

(PHP 8.2, PECL OCI8 \>u003d 3.2)

oci_set_prefetch_lob - Встановлює обсяг даних, попередньо
вибираються для кожного CLOB або BLOB

### Опис

**oci_set_prefetch_lob**(resource `$statement`, int
`$prefetch_lob_size`): bool

Встановлює розмір внутрішнього буфера, який використовується для вибірки
кожного значення CLOB або BLOB, коли реалізація отримує внутрішній
локатор LOB Oracle з бази даних після успішного виклику запиту
функції [oci_execute()](function.oci-execute.md) та для кожного
наступного внутрішнього запиту вибірки базу даних. Збільшення цього
значення може покращити продуктивність вибірки менших LOB за рахунок
скорочення кругових обходів між PHP та базою даних. Використання
пам'яті зміниться.

Значення впливає на великі об'єкти, що повертаються як екземпляри OCILob,
а також на ті, що повертаються з використанням
**`OCI_RETURN_LOBS`**.

Функція oci_set_prefetch_lob()** викликається до виклику
[oci_execute()](function.oci-execute.md). Якщо функція не була
викликана, використовується значення
[oci8.prefetch_lob_size](oci8.configuration.md#ini.oci8.prefetch-lob-size).

Значення попередньої вибірки LOB слід встановлювати лише у
Oracle Database 12.2 чи новіший.

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

`prefetch_lob_size`
Число байтів кожного LOB, яке потрібно попередньо вибрати \u003d 0.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|---------------|----------|
| PECL OCI8 3.2 | |

### Приклади

**Приклад #1 Зміна значення попередньої вибірки LOB для запиту**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'SELECT myclob FROM mytable');oci_set_prefetch_lob($stid,0 // Установка значення перед дзвінком oci_execute()oci_execute($stid);echo "<table borderu003d'1'>
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS)) {    echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>".($item !u003du003d null ? htmlentities($item, ENT_QU)
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($stid);oci_close($conn);?> `

### Дивіться також

- INI-опція
[oci8.prefetch_lob_size](oci8.configuration.md#ini.oci8.prefetch-lob-size)
