- [«urldecode](function.urldecode.md)
- [V8js »](book.v8js.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- URL-кодування рядка

# urlencode

(PHP 4, PHP 5, PHP 7, PHP 8)

urlencode — URL-кодування рядка

### Опис

**urlencode**(string `$string`): string

Ця функція зручна, коли закодований рядок буде використовуватись у
запит, як частина URL, як зручний спосіб передачі змінних
на наступну сторінку.

### Список параметрів

`string`
Рядок, який має бути закодований.

### Значення, що повертаються

Повертає рядок, у якому всі цифри-літерні символи, крім `-_.`
повинні бути замінені знаком відсотка (`%`), за яким слідують два
шістнадцяткових числа, а пробіли закодовані як знак додавання (`+`).
Рядок кодується тим же способом, що й POST-дані веб-форми, тобто
за типом контенту `application/x-www-form-urlencoded`. Це відрізняється від
кодування за [»RFC 3986](http://www.faqs.org/rfcs/rfc3986) (дивіться
[rawurlencode()](function.rawurlencode.md) ) в тому, що за
історичним причинам, пробіли кодуються як знак "плюс" (+).

### Приклади

**Приклад #1 Приклад використання **urlencode()****

` <?phpecho '<a hrefu003d"mycgi?foou003d', urlencode($userinput), '">';?> `

**Приклад #2 Приклад використання **urlencode()** та
[htmlentities()](function.mdentities.md)**

` <?php$query_string u003d 'foou003d' . urlencode($foo) . '&baru003d' . urlencode($bar);echo '<a hrefu003d"mycgi?' . htmlentities($query_string) . '">';?> `

### Примітки

> **Примітка**:
>
> Будьте уважні зі змінними, які можуть збігатися з елементами
> HTML. Такі сутності як &amp, &copy та &pound розбираються браузером і
> використовується як реальна сутність, а чи не бажане ім'я змінної. Це
> очевидний конфлікт, який W3C вказує протягом багатьох років.
> Дивіться подробиці:
> [»http://www.w3.org/TR/html4/appendix/notes.md#h-B.2.2](http://www.w3.org/TR/html4/appendix/notes.md#h-B. 2.2)
>
> PHP підтримує зміну роздільника аргументів на рекомендований W3C
> символ "точку з комою" шляхом зміни директиви arg_separator в
> .ini файл. На жаль, більшість додатків користувача не
> надсилають дані форми у форматі з роздільником "крапка з комою".
> Переносний спосіб вирішити цю проблему - це використовувати &
> замість & як роздільник. Вам не потрібно буде для цього змінювати
> PHP-директиву arg_separator. Залишіть розділювач як &, але кодуйте
> ваші URL за допомогою [htmlentities()](function.mdentities.md) або
> [htmlspecialchars()](function.mdspecialchars.md).

### Дивіться також

- [urldecode()](function.urldecode.md) - Декодування
URL-кодованого рядка
- [htmlentities()](function.mdentities.md) - Перетворює всі
можливі символи у відповідні HTML-сутності
- [rawurlencode()](function.rawurlencode.md) - URL-кодування
рядки згідно з RFC 3986
- [rawurldecode()](function.rawurldecode.md) - Декодування
URL-кодованого рядка
- [» RFC 3986](http://www.faqs.org/rfcs/rfc3986)
