- [« mqseries_set](function.mqseries-set.md)
- [Мережа »](book.network.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- Отримати повідомлення про помилку, яке відповідає її коду (MQRC)

# mqseries_strerror

(PECL mqseries \>u003d 0.10.0)

mqseries_strerror — Отримати повідомлення про помилку, яке відповідає її
коду (MQRC)

### Опис

**mqseries_strerror**(int `$reason`): string

Функція **mqseries_strerror()** повертає повідомлення про помилку в
відповідно до її коду.

### Список параметрів

`reason`
Код помилки.

### Значення, що повертаються

рядок із описом помилки.

### Приклади

**Приклад #1 Приклад використання **mqseries_strerror()****

` <?php   if ($comp_code !u003du003d MQSERIES_MQCC_OK) {        printf("open CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));        exit;    }?> `

Результат виконання цього прикладу:

Connx CompCode:2 Reason:2059 Text:Queue manager недоступний для з'єднання.
