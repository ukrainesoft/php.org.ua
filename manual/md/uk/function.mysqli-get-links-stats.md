- [« mysqli_get_client_stats](function.mysqli-get-client-stats.md)
- [mysqli_report »](function.mysqli-report.md)

- [PHP Manual](index.md)
- [Синоніми та застарілі функції Mysqli](ref.mysqli.md)
- Повертає інформацію про відкриті та закешовані з'єднання MySQL

# mysqli_get_links_stats

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

mysqli_get_links_stats — Повертає інформацію про відкриті та
закешованих з'єднаннях MySQL

### Опис

**mysqli_get_links_stats**(): array

**mysqli_get_links_stats()** повертає інформацію про відкриті та
закешованих з'єднаннях MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**mysqli_get_links_stats()** повертає асоціативний масив із трьох
цілісних значень із такими ключами:

`total`
Ціле число (int), що означає загальну кількість з'єднань з будь-якими
статусами.

`active_plinks`
Ціле число (int), що означає кількість активних постійних
(Persistent) з'єднаннях.

`cached_plinks`
Ціле число (int), що означає кількість неактивних постійних
(Persistent) з'єднаннях.
