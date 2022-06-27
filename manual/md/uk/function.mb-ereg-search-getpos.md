- [«mb_ereg_replace](function.mb-ereg-replace.md)
- [mb_ereg_search_getregs »](function.mb-ereg-search-getregs.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Повертає початкову позицію наступного збігу з регулярним
виразом

#mb_ereg_search_getpos

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_getpos — Повертає початкову позицію наступного
збіги з регулярним виразом

### Опис

**mb_ereg_search_getpos**(): int

Повертає початкову позицію наступного збігу з регулярним
виразом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**mb_ereg_search_getpos()** повертає початкову позицію наступного
збіги з регулярним виразом для функцій
[mb_ereg_search()](function.mb-ereg-search.md),
[mb_ereg_search_pos()](function.mb-ereg-search-pos.md),
[mb_ereg_search_regs()](function.mb-ereg-search-regs.md). Позиція
представляється як числа байт з початку рядка.

### Примітки

> **Примітка**:
>
> Для цієї функції буде використано внутрішнє кодування або
> кодування, встановлене функцією
> [mb_regex_encoding()](function.mb-regex-encoding.md).

### Дивіться також

- [mb_regex_encoding()](function.mb-regex-encoding.md) -
Встановлює/отримує поточне кодування для багатобайтового
регулярного вираження
- [mb_ereg_search_setpos()](function.mb-ereg-search-setpos.md) -
Задає початкову позицію у рядку, з якого розпочнеться пошук
відповідностей регулярному виразу
