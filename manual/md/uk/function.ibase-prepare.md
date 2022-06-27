- [« ibase_pconnect](function.ibase-pconnect.md)
- [ibase_query »](function.ibase-query.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- готує запит для подальшого зв'язування псевдозмінних та
виконання

# ibase_prepare

(PHP 5, PHP 7 \< 7.4.0)

ibase_prepare — Підготовка запиту для подальшого зв'язування
псевдозмінних та виконання

### Опис

**ibase_prepare**(string `$query`): resource

**ibase_prepare**(resource `$link_identifier`, string `$query`):
resource

**ibase_prepare**(resource `$link_identifier`, string `$trans`, string
`$query`): resource

Підготовляє запит для подальшого зв'язування псевдозмінних та
виконання (за допомогою [ibase_execute()](function.ibase-execute.md)).

### Список параметрів

`query`
Запит InterBase.

`link_identifier`
Ідентифікатор посилання InterBase, який повертається функцією
[ibase_connect()](function.ibase-connect.md). Якщо не вказано,
передбачається останнє відкрите посилання.

`trans`
Дескриптор транзакції InterBase, з якою має бути пов'язаний запит.
Якщо не вказано, передбачається транзакція стандартного з'єднання.

### Значення, що повертаються

Повертає дескриптор підготовленого запиту або **`false`** у разі
виникнення помилки.
