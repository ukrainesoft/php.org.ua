- [« imap_setflag_full](function.imap-setflag-full.md)
- [imap_status »](function.imap-status.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати та відсортувати повідомлення

#imap_sort

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_sort — Отримати та відсортувати повідомлення

### Опис

**imap_sort**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
int `$criteria`,
bool `$reverse`,
int `$flags` u003d 0,
?string `$search_criteria` u003d **`null`**,
?string `$charset` u003d **`null`**
): array\|false

Отримує та сортує номери повідомлень відповідно до заданих
параметрами.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`criteria`
Одне (і лише одне) з наступних значень:

- **`SORTDATE`** - сортувати за датою
- **`SORTARRIVAL`** - дата отримання
- **`SORTFROM`** - за першою адресою у полі From
- **`SORTSUBJECT`** - на тему листа
- **`SORTTO`** - за першою адресою в полі To
- **`SORTCC`** - за першою адресою в полі cc
- **`SORTSIZE`** - за розміром повідомлення

`reverse`
Визначає сортування у зворотному порядку.

`flags`
Параметр `flags` задається бітовою маскою однією або кількома константами:

- **`SE_UID`** - повертати UID, а не номери повідомлень
- **`SE_NOPREFETCH`** - не отримувати знайдені повідомлення

`search_criteria`
Рядок із пошуковим критерієм у форматі IMAP2. Детальніше дивіться
опис функції [imap_search()](function.imap-search.md).

`charset`
Кодування MIME для сортування рядків.

### Значення, що повертаються

Повертає масив номерів повідомлень, відсортованих відповідно до
заданими параметрами або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `reverse` тепер є логічним типом (bool) замість цілого числа (int). |
| 8.0.0 | `search_criteria` та `charset` тепер є nullable. |
