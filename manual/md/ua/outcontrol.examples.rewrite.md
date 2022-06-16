- [« Базове використання](outcontrol.examples.basic.md)
- [Функції контролю виведення»] (ref.outcontrol.md)

- [PHP Manual](index.md)
- [Приклади](outcontrol.examples.md)
- Використання перезапису виводу

## Використання перезапису виводу

Починаючи з PHP 7.1.0,
[output_add_rewrite_var()](function.output-add-rewrite-var.md) та
[output_reset_rewrite_vars()](function.output-reset-rewrite-vars.md)
використовують окремий буфер виводу, тобто не використовують буфер виводу
[прозорої підтримки
sid](session.configuration.md#ini.session.use-trans-sid).

**Приклад #1 Приклад перезапису виведення**

` <?php// Цей код працює с PHP 7.1.0, 7.0.10, 5.6.25 і вище.// HTTP_HOST - цільовий хост за замовчуванням. Задамо самі, щоб код прикладу заробив.$_SERVER['HTTP_HOST'] u003d 'php.net';// Перезаписувач висновку перезаписує тільки "form". Додамо au003dhref.// Теги повинні вказуватися як tag_nameu003durl_attr, є є imgu003dsrc,iframeu003dsrc//Між настройками пробіли|неприпустимі.// Тег 'url_rewriter.tags','au003dhref,formu003d');var_dump(ini_get('url_rewriter.tags'));// Це додано в URL і "form"output_add_rewrite_var('test', 'u ><a hrefu003d"//php.net/index.php?bugu003d1234">bug1234</a><form actionu003d"https://php.net/?bugu003d1234&editu003d1" actionu003d"post "> <input typeu003d"text" nameu003d"title" /></form>`

Результат виконання цього прикладу:

<a hrefu003d"//php.net/?bugu003d1234&testu003dvalue">bug1234</a>
<form actionu003d"https://php.net/?bugu003d1234&editu003d1" methodu003d"post"><input typeu003d"hidden" nameu003d"test" valueu003d"value" />
<input typeu003d"text" nameu003d"title" />
</form>

З PHP 7.1.0 функції перезапису виводу мають свої власні
INI-налаштування.
[url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags)
і
[url_rewriter.hosts](outcontrol.configuration.md#ini.url-rewriter.hosts).
