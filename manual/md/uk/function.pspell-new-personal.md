- [« pspell_new_config](function.pspell-new-config.md)
- [pspell_new »](function.pspell-new.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Завантажує новий словник із персональним списком слів

#pspell_new_personal

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_new_personal — Завантажує новий словник із персональним списком
слів

### Опис

**pspell_new_personal**(
string `$filename`,
string `$language`,
string `$spelling` u003d "",
string `$jargon` u003d "",
string `$encoding` u003d "",
int `$mode` u003d 0
): [PSpell\Dictionary](class.pspell-dictionary.md)\|false

**pspell_new_personal()** відкриває новий словник із персональним списком
слів. Список слів може бути модифікований та збережений функцією
[pspell_save_wordlist()](function.pspell-save-wordlist.md), якщо
потрібно. Проте пари, що заміщають, не зберігаються. Для збереження
заміщуючих пар ви повинні створити конфігурацію, використовуючи
[pspell_config_create()](function.pspell-config-create.md), встановити
файл персонального списку слів функцією
[pspell_config_personal()](function.pspell-config-personal.md),
встановити файл для заміну пар функцією
[pspell_config_repl()](function.pspell-config-repl.md), та відкрити
новий словник за допомогою
[pspell_new_config()](function.pspell-new-config.md).

Більш детальну інформацію та приклади можна знайти у посібнику з pspell
на сайті: [»http://aspell.net/](http://aspell.net/).

### Список параметрів

`filename`
Файл, у якому будуть збережені слова, додані до персонального
перелік. Це має бути абсолютний шлях до файлу, що починається з '/', так
як інакше він буде відносним до $HOME, яким є "/root" для
більшість систем, які, ймовірно, не те, що вам потрібно.

`language`
Код мови, що складається з дволітерного коду мови за стандартом ISO
639 та необов'язкового дволітерного коду країни за стандартом ISO 3166
після тире або підкреслення.

`spelling`
Визначає варіант перевірки орфографії для мов із більш ніж одним
варіантом правопису, таких як англійська. Відомі значення:
'american', 'british', та 'canadian'.

`jargon`
Додаткова інформація для розрізнення двох різних списків слів,
мають однакові параметри language та spelling.

`encoding`
Кодування, в якому, як очікується, подано слова. Допустимі значення:
`utf-8`, `iso8859-*`, `koi8-r`, `viscii`, `cp1252`,
`machine unsigned 16`, `machine unsigned 32`.

`mode`
Режим, у якому працюватиме перевірка орфографії. Доступно кілька
режимів:

- **`PSPELL_FAST`** - Швидкий режим (найменше варіантів
виправлення)
- **`PSPELL_NORMAL`** - Нормальний режим (більше варіантів
виправлення)
- **`PSPELL_BAD_SPELLERS`** - Повільний режим (багато варіантів
виправлення)
- **`PSPELL_RUN_TOGETHER`** - розглядає об'єднані слова як
правильні складні слова. Тобто "thecat" буде вважатися
правильним складним словом, хоча між артиклем і словом має бути
пробіл. Зміна цієї установки впливає лише на результати,
повертаються функцією [pspell_check()](function.pspell-check.md);
[pspell_suggest()](function.pspell-suggest.md) буде продовжувати
видавати варіанти виправлення.

Mode - це бітова маска, сконструйована з різних перерахованих
вище за констант. Однак, **`PSPELL_FAST`**, **`PSPELL_NORMAL`** та
**`PSPELL_BAD_SPELLERS`** є взаємовиключними, так що ви повинні
вибрати лише одну з них.

### Значення, що повертаються

Повертає екземпляр [PSpell\Dictionary](class.pspell-dictionary.md)
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Повертає екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_new_personal()****

` <?php$pspell u003d pspell_new_personal ("/var/dictionaries/custom.pws",        "en", "", ", "", PSPELL_FAST|PSPELL_RUN_TOGE
