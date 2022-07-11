- [«dgettext](function.dgettext.md)
- [gettext»](function.gettext.md)

- [PHP Manual](index.md)
- [Функції gettext](ref.gettext.md)
- Версія dgettext для множини

# dngettext

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

dngettext — Версія dgettext для множини

### Опис

**dngettext**(
string `$domain`,
string `$singular`,
string `$plural`,
int `$count`
): string

Функція **dngettext()** дозволяє перевизначити поточний домен `domain`
для одного повідомлення у множині.

### Список параметрів

`domain`
Домен.

`singular`

`plural`

`count`

### Значення, що повертаються

У разі успішного виконання повертає рядок (string).

### Дивіться також

- [ngettext()](function.ngettext.md) - Версія gettext для повідомлень
у множині
