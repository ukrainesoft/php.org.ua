- [« ibase_set_event_handler](function.ibase-set-event-handler.md)
- [ibase_wait_event »](function.ibase-wait-event.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- починає транзакцію

# ibase_trans

(PHP 5, PHP 7 \< 7.4.0)

ibase_trans - Починає транзакцію

### Опис

**ibase_trans**(int `$trans_args` u003d ?, resource `$link_identifier` u003d ?):
resource

**ibase_trans**(resource `$link_identifier` u003d ?, int `$trans_args` u003d ?):
resource

Починає транзакцію.

> **Примітка**:
>
> Перший виклик **ibase_trans()** не поверне транзакцію з'єднання
> замовчуванням. Усі транзакції, запущені за допомогою **ibase_trans()**,
> будуть скасовані в кінці скрипту, якщо вони не були зафіксовані, або
> будуть скасовані за допомогою [ibase_commit()](function.ibase-commit.md)
> або [ibase_rollback()](function.ibase-rollback.md).

> **Примітка**:
>
> Ця функція приймає кілька аргументів `trans_args` та
> `link_identifier`. Це дозволяє виконувати транзакції за кілька
> з'єднань із базою даних, які фіксуються з використанням
> алгоритму двоетапної фіксації. Це означає, що ви можете
> розраховувати те що, що оновлення будуть успішними у кожному базі
> даних або помилка в кожній базі даних. Це не значить,
> що ви можете використовувати таблиці з різних баз даних в одному
> запит!
>
> Якщо ви використовуєте транзакції в декількох базах даних, потрібно
> вказатиме як `link_id`, так і `transaction_id` у викликах
> [ibase_query()](function.ibase-query.md) та
> [ibase_prepare()](function.ibase-prepare.md).

### Список параметрів

`trans_args`
`trans_args` може бути комбінацією **`IBASE_READ`**, **`IBASE_WRITE`**,
**`IBASE_COMMITTED`**, **`IBASE_CONSISTENCY`**, **`IBASE_CONCURRENCY`**,
**`IBASE_REC_VERSION`**, **`IBASE_REC_NO_VERSION`**, **`IBASE_WAIT`** та
**`IBASE_NOWAIT`**.

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

### Значення, що повертаються

Повертає дескриптор транзакції або **`false`** у разі виникнення
помилки.
