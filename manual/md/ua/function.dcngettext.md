- [«dcgettext](function.dcgettext.md)
- [dgettext »](function.dgettext.md)

- [PHP Manual](index.md)
- [Функції gettext](ref.gettext.md)
- Версія dcgettext для множини

#dcngettext

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

dcngettext — Версія dcgettext для множини

### Опис

**dcngettext**(
string `$domain`,
string `$singular`,
string `$plural`,
int `$count`,
int `$category`
): string

Ця функція дозволяє перевизначити одне повідомлення за допомогою
множини в поточному домені.

### Список параметрів

`domain`
Домен.

`singular`

`plural`

`count`

`category`

### Значення, що повертаються

У разі успішного виконання повертає рядок (string).

### Дивіться також

- [ngettext()](function.ngettext.md) - Версія gettext для повідомлень
у множині
