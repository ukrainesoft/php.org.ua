- [« pspell_check](function.pspell-check.md)
- [pspell_config_create »](function.pspell-config-create.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Очищає поточну сесію

#pspell_clear_session

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_clear_session — Очищає поточну сесію

### Опис

**pspell_clear_session**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`): bool

**pspell_clear_session()** очищає поточну сесію. Поточний список слів
очищається, і, наприклад, якщо спробувати зберегти його за допомогою
[pspell_save_wordlist()](function.pspell-save-wordlist.md), нічого не
станеться.

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

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");$pspell u003d pspell_new_config($pspell_config);pspell_ad pspell_clear_session($pspell);pspell_save_wordlist($pspell); //Слово "Vlad" не буде збережено?> `
