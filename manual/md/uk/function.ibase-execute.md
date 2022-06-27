- [« ibase_errmsg](function.ibase-errmsg.md)
- [ibase_fetch_assoc »](function.ibase-fetch-assoc.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Виконує попередньо підготовлений запит

# ibase_execute

(PHP 5, PHP 7 \< 7.4.0)

ibase_execute — Виконує попередньо підготовлений запит

### Опис

**ibase_execute**(resource `$query`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): resource

Виконує запит, підготовлений за допомогою
[ibase_prepare()](function.ibase-prepare.md).

Це набагато ефективніше, ніж використання
[ibase_query()](function.ibase-query.md), якщо ви повторюєте один і
той самий тип запиту кілька разів, змінюючи лише деякі параметри.

### Список параметрів

`query`
Запит InterBase, підготовлений за допомогою
[ibase_prepare()](function.ibase-prepare.md).

`values`

### Значення, що повертаються

Якщо запит викликає помилку, повертає **false**. Якщо запит
виконаний успішно, і є (можливо порожній) набір результатів (як при
запит SELECT), повертає ідентифікатор результату. Якщо запит
виконано успішно та результатів не було, повертається **`true`**.

> **Примітка**:
>
> Функція повертає кількість рядків, порушених запитом (якщо \> 0 та
> застосовується до типу оператора). Якщо запит виконано успішно, але не
> торкнувся жодного рядка (наприклад, UPDATE неіснуючого запису),
> поверне **`true`**.

### Приклади

**Приклад #1 Приклад використання **ibase_execute()****

` <?php$dbh u003d ibase_connect($host, $username, $password);$updates u003d array(   1 u003d> 'Eric',   5 u003d> 'Filip', y' '; ($dbh, "UPDATE FOO SET BAR u003d ? WHERE BAZ u003d ?");foreach ($updates as $baz u003d> $bar) {    ibase_execute($query, $)

### Дивіться також

- [ibase_query()](function.ibase-query.md) - Виконує запит до бази
даних InterBase
