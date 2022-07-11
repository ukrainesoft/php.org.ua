- [« bind_textdomain_codeset](function.bind-textdomain-codeset.md)
- [dcgettext »](function.dcgettext.md)

- [PHP Manual](index.md)
- [Функції gettext](ref.gettext.md)
- Встановлює або отримує шлях для домену

# bindtextdomain

(PHP 4, PHP 5, PHP 7, PHP 8)

bindtextdomain — Встановлює або отримує шлях для домену

### Опис

**bindtextdomain**(string `$domain`, ?string `$directory`):
string\|false

Функція **bindtextdomain()** встановлює чи отримує шлях для домену.

### Список параметрів

`domain`
Домен.

`directory`
Шлях до директорії. Порожній рядок означає поточний каталог. Якщо
**`null`**, повертається поточний встановлений каталог.

### Значення, що повертаються

Повний шлях для домену, встановленого параметром `domain` або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.3 | `directory` тепер допускає значення null. Раніше неможливо було отримати поточний встановлений каталог. |

### Приклади

**Приклад #1 Приклад використання **bindtextdomain()****

` <?php$domain u003d 'myapp';echo bindtextdomain($domain, '/usr/share/myapp/locale');?> `

Результат виконання цього прикладу:

/usr/share/myapp/locale

### Примітки

> **Примітка**:
>
> Інформація **bindtextdomain()** зберігається для кожного процесу, а не
> для потоку.
