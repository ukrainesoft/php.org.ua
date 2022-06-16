- [«dcngettext](function.dcngettext.md)
- [dngettext »](function.dngettext.md)

- [PHP Manual](index.md)
- [Функції gettext](ref.gettext.md)
- Перевизначає поточний домен для одного повідомлення

#dgettext

(PHP 4, PHP 5, PHP 7, PHP 8)

dgettext — Перевизначення поточного домену для одного повідомлення

### Опис

**dgettext**(string `$domain`, string `$message`): string

Функція **dgettext()** дозволяє перевизначити поточний домен `domain`
для одного повідомлення.

### Список параметрів

`domain`
Домен.

`message`
Повідомлення.

### Значення, що повертаються

У разі успішного виконання, повертає значення типу string.

### Дивіться також

- [gettext()](function.gettext.md) - Шукає повідомлення у поточному домені
