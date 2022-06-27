- [« pspell_config_mode](function.pspell-config-mode.md)
- [pspell_config_repl »](function.pspell-config-repl.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Встановлює файл, що містить персональний список слів

#pspell_config_personal

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_personal — Встановлює файл, який містить персональний
список слів

### Опис

**pspell_config_personal**([PSpell\Config](class.pspell-config.md)
`$config`, string `$filename`): bool

Встановлює файл, який містить список персональних слів. Персональний
список слів буде завантажено та використано на додаток до стандартного
після того, як ви викликаєте
[pspell_new_config()](function.pspell-new-config.md). Це той самий
файл, в який функція
[pspell_save_wordlist()](function.pspell-save-wordlist.md) збереже
персональний перелік слів.

**pspell_config_personal()** має бути використана для конфігурації
до дзвінка [pspell_new_config()](function.pspell-new-config.md).

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`filename`
Персональний перелік слів. Якщо файл не існує, його буде створено. Файл
повинен бути доступний для запису будь-кому, хто запускає PHP (наприклад,
nobody).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_personal()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");$pspell u003d pspell_new_config($pspell_config);$pel__cat ?> `

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
