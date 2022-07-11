- [« pspell_save_wordlist](function.pspell-save-wordlist.md)
- [pspell_suggest »](function.pspell-suggest.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Зберігає заміщувальну пару для слова

#pspell_store_replacement

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_store_replacement — Зберігає заміщувальну пару для слова

### Опис

**pspell_store_replacement**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`, string `$misspelled`, string `$correct`): bool

**pspell_store_replacement()** зберігає заміщувальну пару для слова, так
що заміна пізніше може бути повернена функцією
[pspell_suggest()](function.pspell-suggest.md). Щоб використати
переваги цієї функції слід відкрити словник за допомогою
[pspell_new_personal()](function.pspell-new-personal.md). Щоб
назавжди зберегти пару, що замінює, необхідно використовувати
[pspell_config_personal()](function.pspell-config-personal.md) та
[pspell_config_repl()](function.pspell-config-repl.md) для того, щоб
вказати шлях, куди зберегти списки слів, а потім
скористатися
[pspell_save_wordlist()](function.pspell-save-wordlist.md) для запису
змін на диск.

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

`misspelled`
Слово з помилкою.

`correct`
Виправлене написання для слова з помилкою (`misspelled`).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_store_replacement()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");pspell_config_repl($pspell_config, "/var/dictionaries/custom. u003d pspell_new_config($pspell_config);pspell_store_replacement($pspell, $misspelled, $correct);pspell_save_wordlist($pspell);?> `

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
