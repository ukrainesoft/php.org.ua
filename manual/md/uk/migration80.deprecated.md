- [« Зміни, що ламають зворотну
сумісність](migration80.incompatible.md)
- [Інші зміни »](migration80.other-changes.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.4.x на PHP 8.0.x](migration80.md)
- функціональність, оголошена застарілою в PHP 8.0.x

## Функціональність, оголошена застарілою в PHP 8.0.x

### Ядро PHP

- Якщо за параметром зі значенням за промовчанням слід обов'язковий
параметр, значення за замовчуванням немає сенсу. З PHP 8.0.0
подібний порядок параметрів оголошений застарілим і можливо
виправлено шляхом видалення значення за замовчуванням:

` <?phpfunction test($a u003d [], $b) {} // Доfunction test($a, $b) {}      // Після?> `

Одним із винятків із цього правила є параметри виду
`Type $param u003d null`, де значення за замовчуванням null робить тип
неявно обнулюваним. Це поки що дозволено, але натомість краще
рекомендується використовувати явний тип nullable:

` <?phpfunction test(A$$a u003d null, $b) {} // Як раніше дозволеноfunction test(?A $a, $b) {}        // Рекомендується?>

- Виклик [get_defined_functions()](function.get-defined-functions.md)
з явно заданим значенням **`false`** у `exclude_disabled` застарів і
більше немає сенсу.
[get_defined_functions()](function.get-defined-functions.md)
ніколи не повертатиме відключені функції.

### Enchant

- [enchant_broker_set_dict_path()](function.enchant-broker-set-dict-path.md)
і
[enchant_broker_get_dict_path()](function.enchant-broker-get-dict-path.md)
оголошені застарілими, оскільки вони недоступні в libenchant \<
1.5 ні в libenchant-2.

- [enchant_dict_add_to_personal()](function.enchant-dict-add-to-personal.md)
оголошено застарілою; використовуйте замість неї
[enchant_dict_add()](function.enchant-dict-add.md).

- [enchant_dict_is_in_session()](function.enchant-dict-is-in-session.md)
оголошено застарілою; використовуйте замість неї
[enchant_dict_is_added()](function.enchant-dict-is-added.md).

- [enchant_broker_free()](function.enchant-broker-free.md) та
[enchant_broker_free_dict()](function.enchant-broker-free-dict.md)
оголошені застарілими; замість неї застосовуйте до об'єкта функцію unset.

- Константа **`ENCHANT_MYSPELL`** та **`ENCHANT_ISPELL`** оголошені
застарілими.

### LibXML

[libxml_disable_entity_loader()](function.libxml-disable-entity-loader.md)
оголошено застарілою. Оскільки тепер використовується libxml 2.9.0,
якому завантаження зовнішніх об'єктів за замовчуванням відключено, тому
використання цієї функції більше не потрібно для захисту від XXE-атак,
якщо не використовується (досі вразлива) **`LIBXML_NOENT`**. В цьому
У разі рекомендується провести рефакторинг коду за допомогою
[libxml_set_external_entity_loader()](function.libxml-set-external-entity-loader.md),
щоб придушити завантаження зовнішніх сутностей.

### PGSQL / PDO PGSQL

- Константа **`PGSQL_LIBPQ_VERSION_STR`** тепер має те саме значення,
що і **`PGSQL_LIBPQ_VERSION`** і тому оголошена застарілою.

- Псевдоніми функцій у модулі pgsql оголошені застарілими. Дивіться
наступний список, які функції слід використовувати замість них:

- **pg_errormessage()** →
[pg_last_error()](function.pg-last-error.md)
- **pg_numrows()** → [pg_num_rows()](function.pg-num-rows.md)
- **pg_numfields()** →
[pg_num_fields()](function.pg-num-fields.md)
- **pg_cmdtuples()** →
[pg_affected_rows()](function.pg-affected-rows.md)
- **pg_fieldname()** →
[pg_field_name()](function.pg-field-name.md)
- **pg_fieldsize()** →
[pg_field_size()](function.pg-field-size.md)
- **pg_fieldtype()** →
[pg_field_type()](function.pg-field-type.md)
- **pg_fieldnum()** → [pg_field_num()](function.pg-field-num.md)
- **pg_result()** →
[pg_fetch_result()](function.pg-fetch-result.md)
- **pg_fieldprtlen()** →
[pg_field_prtlen()](function.pg-field-prtlen.md)
- **pg_fieldisnull()** →
[pg_field_is_null()](function.pg-field-is-null.md)
- **pg_freeresult()** →
[pg_free_result()](function.pg-free-result.md)
- **pg_getlastoid()** → [pg_last_oid()](function.pg-last-oid.md)
- **pg_locreate()** → [pg_lo_create()](function.pg-lo-create.md)
- **pg_lounlink()** → [pg_lo_unlink()](function.pg-lo-unlink.md)
- **pg_loopen()** → [pg_lo_open()](function.pg-lo-open.md)
- **pg_loclose()** → [pg_lo_close()](function.pg-lo-close.md)
- **pg_loread()** → [pg_lo_read()](function.pg-lo-read.md)
- **pg_lowrite()** → [pg_lo_write()](function.pg-lo-write.md)
- **pg_loreadall()** →
[pg_lo_read_all()](function.pg-lo-read-all.md)
- **pg_loimport()** → [pg_lo_import()](function.pg-lo-import.md)
- **pg_loexport()** → [pg_lo_export()](function.pg-lo-export.md)
- **pg_setclientencoding()** →
[pg_set_client_encoding()](function.pg-set-client-encoding.md)
- **pg_clientencoding()** -\>
[pg_client_encoding()](function.pg-client-encoding.md)

### Бібліотека стандартних функцій

- Функції порівняння сортування, що повертають **`true`** або
**`false`** тепер згенерує попередження про застарілу
можливості, тому їх слід переписати, щоб вони повертали
ціле число менше, рівне або більше нуля.

` <?php// Замінити подібний код:usort($array, fn($a, $b) u003d> $a > $b);// На цей:usort($array, fn($a, $b) u003d> $a <u003d> $b);?> `

### Zip

- Використання порожнього файлу ZipArchive оголошено застарілим.
Libzip 1.6.0 більше не працює із порожніми zip-архівами. Існуюче
обхідне рішення буде видалено у наступній версії.

- Процедурний API Zip оголошений застарілим. Замість нього використовуйте
[ZipArchive](class.ziparchive.md). Ітерацію по всіх записах можна
виконати за допомогою
[ZipArchive::statIndex()](ziparchive.statindex.md) та циклу
[for](control-structures.for.md):

` <?php// ітерація з використанням процедурного APIassert(is_resource($zip));while ($entry u003d zip_read($zip)) {   echo zip_entry_name($entry);}//   zip instanceof ZipArchive);for ($i u003d 0; $entry u003d $zip->statIndex($i); $i++) {    echo $entry['name'];}?> `

### Reflection

- [ReflectionFunction::isDisabled()](reflectionfunction.isdisabled.md)
оголошений застарілим, тому що більше неможливо створити
[ReflectionFunction](class.reflectionfunction.md) для вимкненої
функції. Цей метод тепер завжди повертає **`false`**.

- [ReflectionParameter::getClass()](reflectionparameter.getclass.md),
[ReflectionParameter::isArray()](reflectionparameter.isarray.md) та
[ReflectionParameter::isCallable()](reflectionparameter.iscallable.md)
оголошені застарілими. Замість них слід використовувати
[ReflectionParameter::getType()](reflectionparameter.gettype.md) та
API [ReflectionType](class.reflectiontype.md).
