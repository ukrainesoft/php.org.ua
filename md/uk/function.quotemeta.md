- [«quoted_printable_encode](function.quoted-printable-encode.md)
- [rtrim »] (function.rtrim.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Екранує спеціальні символи

# quotemeta

(PHP 4, PHP 5, PHP 7, PHP 8)

quotemeta - Екранує спеціальні символи

### Опис

**quotemeta**(string `$string`): string

Повертає модифікований рядок, в якому перед кожним символом
наступного списку:

. \+\*? \[^\] ($)

вставлений зворотний сліш (`\`).

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає екранований рядок або **`false`**, якщо як
параметра `string` було вказано порожній рядок.

### Приклади

**Приклад #1 Приклад використання **quotemeta()****

` <?phpvar_dump(quotemeta('PHP is a popular scripting language. Fast, flexible, and pragmatic.'));?> `

Результат виконання цього прикладу:

string(69) "PHP is a popular scripting language\. Fast, flexible, and pragmatic\."

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [addslashes()](function.addslashes.md) - Екранує рядок з
допомогою слішів
- [addcslashes()](function.addcslashes.md) - Екранує рядок
слішами в стилі мови C
- [htmlentities()](function.mdentities.md) - Перетворює всі
можливі символи у відповідні HTML-сутності
- [htmlspecialchars()](function.mdspecialchars.md) - Перетворює
спеціальні символи в HTML-сутності
- [nl2br()](function.nl2br.md) - Вставляє HTML-код розриву рядка
перед кожним перекладом рядка
- [stripslashes()](function.stripslashes.md) - Видаляє екранування
символів
- [stripcslashes()](function.stripcslashes.md) - Видаляє
екранування символів, зроблене функцією addcslashes
- [preg_quote()](function.preg-quote.md) - Екранує символи в
регулярних виразах
