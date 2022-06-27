- [«output_add_rewrite_var](function.output-add-rewrite-var.md)
- [Опції/інформація PHP »](book.info.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Скинути значення обробника URL

#output_reset_rewrite_vars

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

output_reset_rewrite_vars — Скинути значення обробника URL

### Опис

**output_reset_rewrite_vars**(): bool

Ця функція скидає обробник URL і видаляє всі значення,
встановлені функцією
[output_add_rewrite_var()](function.output-add-rewrite-var.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------|
| 7.1.0 | До PHP 7.1.0, змінні перезаписи встановлені функцією [output_add_rewrite_var()](function.output-add-rewrite-var.md) використовують той самий буфер модуля сесії "trans sid". З PHP 7.1.0 використовується окремий буфер і **output_reset_rewrite_vars()** тільки видаляє змінні перезаписи певні [output_add_rewrite_var()](function.output-add-rewrite-var.md). |

### Приклади

**Приклад #1 Приклад використання функції
**output_reset_rewrite_vars()****

` <?phpsession_start();output_add_rewrite_var('var', 'value');echo '<a hrefu003d"file.php">посилання</a>';ob_flush();output_reset_rewrite_vars();echo '<a hr u003d"file.php">посилання</a>';?> `

Результат виконання цього прикладу:

<a hrefu003d"file.php?PHPSESSIDu003dxxx&varu003dvalue">посилання</a>
<a hrefu003d"file.php">посилання</a>

### Дивіться також

- [output_add_rewrite_var()](function.output-add-rewrite-var.md) -
Додати значення в обробник URL
- [ob_flush()](function.ob-flush.md) - Скинути (надіслати) буфер
висновку
- [ob_list_handlers()](function.ob-list-handlers.md) - Список всіх
використовуваних обробників виводу
- [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags)
- [url_rewriter.hosts](outcontrol.configuration.md#ini.url-rewriter.hosts)
- [session.trans_sid_tags](session.configuration.md#ini.session.trans-sid-tags)
- [session.trans_sid_hosts](session.configuration.md#ini.session.trans-sid-hosts)
