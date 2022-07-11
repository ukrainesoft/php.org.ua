- [« pspell_new](function.pspell-new.md)
- [pspell_store_replacement »](function.pspell-store-replacement.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Зберігає персональний список слів у файлі

#pspell_save_wordlist

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_save_wordlist — Зберігає персональний список слів у файлі

### Опис

**pspell_save_wordlist**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`): bool

**pspell_save_wordlist()** зберігає персональний список слів поточної
сесії. Розташування файлів для збереження вказується за допомогою
[pspell_config_personal()](function.pspell-config-personal.md) та
(не обов'язково)
[pspell_config_repl()](function.pspell-config-repl.md).

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання
[pspell_add_to_personal()](function.pspell-add-to-personal.md)**

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/tmp/dicts/newdict");$pspell u003d pspell_new_config($pspell_config);pspell_add_$ $pspell);?> `

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
