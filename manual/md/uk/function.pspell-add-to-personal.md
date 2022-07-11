- [« Функції Pspell](ref.pspell.md)
- [pspell_add_to_session »](function.pspell-add-to-session.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Додає слово до персонального списку слів

#pspell_add_to_personal

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_add_to_personal — Додає слово до персонального списку слів

### Опис

**pspell_add_to_personal**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`, string `$word`): bool

**pspell_add_to_personal()** додає слово до персонального списку слів.
Якщо ви використовували
[pspell_new_config()](function.pspell-new-config.md) разом з
[pspell_config_personal()](function.pspell-config-personal.md) для
відкриття словника, ви можете зберегти список слів пізніше за допомогою
[pspell_save_wordlist()](function.pspell-save-wordlist.md).

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

`word`
Слово, що додається.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_add_to_personal()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");$pspell u003d pspell_new_config($pspell_config);pspell_ad pspell_save_wordlist($pspell);?> `

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
