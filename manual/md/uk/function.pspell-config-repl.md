- [« pspell_config_personal](function.pspell-config-personal.md)
- [pspell_config_runtogether
»](function.pspell-config-runtogether.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Встановлює файл, який містить заміщувальні пари

#pspell_config_repl

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_repl — Встановлює файл, який містить заміщувальні пари

### Опис

**pspell_config_repl**([PSpell\Config](class.pspell-config.md)
`$config`, string `$filename`): bool

Встановлює файл, що містить пари, що заміщають.

Заміщаючі пари підвищують якість перевірки орфографії. Коли слово
написано з помилками, а правильний варіант не знайдено у списку,
[pspell_store_replacement()](function.pspell-store-replacement.md)
може бути використана для того, щоб зберегти заміщувальну пару, а
[pspell_save_wordlist()](function.pspell-save-wordlist.md) - щоб
зберегти список слів разом із парами, що заміщають.

**pspell_config_repl()** має бути використана для конфігурації до
виклику [pspell_new_config()](function.pspell-new-config.md).

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`filename`
Файл повинен бути доступний для запису будь-кому, хто запускає PHP
(наприклад, nobody).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_repl()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");pspell_config_repl($pspell_config, "/var/dictionaries/custom. u003d pspell_new_config($pspell_config);pspell_check($pspell, "thecat");?> `

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
