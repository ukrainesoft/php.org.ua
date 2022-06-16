- [«ob_start](function.ob-start.md)
- [output_reset_rewrite_vars
»](function.output-reset-rewrite-vars.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Додати значення в обробник URL

#output_add_rewrite_var

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

output_add_rewrite_var — Додати значення до обробника URL

### Опис

**output_add_rewrite_var**(string `$name`, string `$value`): bool

Ця функція додає ще одну пару ім'я/значення механізму перезапису
URL. Ім'я та значення будуть додані до URL (як GET-параметрів) та
форм (як приховані поля введення) так само, як і ідентифікатор сесії, якщо
включений прозорий перезапис посилань з використанням
[session.use_trans_sid](session.configuration.md#ini.session.use-trans-sid).

Поведінка цієї функції контролюється параметрами `php.ini`
[url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags)
і
[url_rewriter.hosts](outcontrol.configuration.md#ini.url-rewriter.hosts).

Зверніть увагу, що функція може бути успішно викликана не більше
одного разу на запит.

> **Примітка**: Виклик цієї функції неявно запустить буферизацію виводу,
> якщо вона ще активна.

### Список параметрів

`name`
Назва параметра.

`value`
Значення параметру.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 7.1.0 | До PHP 7.1.0 змінні перезаписи, встановлені функцією **output_add_rewrite_var()**, використовують той самий буфер модуля сесії "trans sid". Починаючи з PHP 7.1.0, використовується окремий буфер [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags) використовується тільки для функцій виведення, доданий [url_rewriter.hosts](outcontrol.configuration.md# ini.url-rewriter.tags). |

### Приклади

**Приклад #1 Приклад використання функції **output_add_rewrite_var()****

` <?phpoutput_add_rewrite_var('var', 'value');//Кілька посиланьecho '<a hrefu003d"file.php">посилання</a><a hrefu003d"http://example.com">посилання2< /a>';// формаecho '<form actionu003d"script.php" methodu003d"post"><input typeu003d"text" nameu003d"var2" /></form>';print_r(ob_list_handlers()) ;?> `

Результат виконання цього прикладу:

<a hrefu003d"file.php?varu003dvalue">посилання</a>
<a hrefu003d"http://example.com">посилання2</a>

<form actionu003d"script.php" methodu003d"post">
<input typeu003d"hidden" nameu003d"var" valueu003d"value" />
<input typeu003d"text" nameu003d"var2" />
</form>

Array
(
[0] u003d> URL-Rewriter
)

### Дивіться також

- [output_reset_rewrite_vars()](function.output-reset-rewrite-vars.md) -
Скинути значення обробника URL
- [ob_flush()](function.ob-flush.md) - Скинути (надіслати) буфер
висновку
- [ob_list_handlers()](function.ob-list-handlers.md) - Список всіх
використовуваних обробників виводу
- [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags)
- [url_rewriter.hosts](outcontrol.configuration.md#ini.url-rewriter.hosts)
- [session.trans_sid_tags](session.configuration.md#ini.session.trans-sid-tags)
- [session.trans_sid_hosts](session.configuration.md#ini.session.trans-sid-hosts)
