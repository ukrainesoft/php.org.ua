- [« pspell_clear_session](function.pspell-clear-session.md)
- [pspell_config_data_dir »](function.pspell-config-data-dir.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Створює конфігурацію для відкриття словника

#pspell_config_create

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_create — Створює конфігурацію, яка використовується для відкриття
словника

### Опис

**pspell_config_create**(
string `$language`,
string `$spelling` u003d "",
string `$jargon` u003d "",
string `$encoding` u003d ""
): [PSpell\Config](class.pspell-config.md)

Створює конфігурацію для відкриття словника.

**pspell_config_create()** має синтаксис, дуже схожий на
синтаксис [pspell_new()](function.pspell-new.md). Фактично,
використання **pspell_config_create()** відразу після
[pspell_new_config()](function.pspell-new-config.md) дасть такий
ж результат. Однак, після створення нової конфігурації також можна
використовувати функції **pspell_config\_\*()** до виклику
[pspell_new_config()](function.pspell-new-config.md) для отримання
переваг від певної додаткової функціональності.

Більш детальну інформацію та приклади можна знайти у посібнику з pspell
на сайті: [»http://aspell.net/](http://aspell.net/).

### Список параметрів

`language`
Параметр language - це код мови, що складається з дволітерного
коду мови за стандартом ISO 639 та необов'язкового дволітерного коду
країни за стандартом ISO 3166 після тире або підкреслення.

`spelling`
Параметр spelling визначає варіант перевірки орфографії для мов з
більш ніж одним варіантом правопису, таких як англійська. Відомі
значення: 'american', 'british', і 'canadian'.

`jargon`
Параметр jargon містить додаткову інформацію для розрізнення двох
різних списків слів, що мають однакові параметри language та
spelling.

`encoding`
Параметр encoding - це кодування, у якому, як очікується, дано слова.
Допустимі значення: 'utf-8', 'iso8859-\*', 'koi8-r', 'viscii',
'cp1252', 'machine unsigned 16', 'machine unsigned 32'. Це ще параметр
не перевірений досить добре, тому будьте обережні при його
використання.

### Значення, що повертаються

Повертає екземпляр [PSpell\Config](class.pspell-config.md) у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.1.0 | Повертає екземпляр [PSpell\Config](class.pspell-config.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_create()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");pspell_config_repl($pspell_config, "/var/dictionaries/custom. u003d pspell_new_personal($pspell_config, "en");?> `
