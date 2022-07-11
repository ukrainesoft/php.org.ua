- [« Transliterator::listIDs](transliterator.listids.md)
- [IntlBreakIterator »](class.intlbreakiterator.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Транслітерувати рядок

# Transliterator::transliterate

#transliterator_transliterate

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::transliterate -- transliterator_transliterate --
Транслітерувати рядок

### Опис

Об'єктно-орієнтований стиль

public **Transliterator::transliterate**(string `$string`, int `$start`
u003d 0, int `$end` u003d -1): string\|false

Процедурний стиль

**transliterator_transliterate**(
[Transliterator](class.transliterator.md)\|string
`$transliterator`,
string `$string`,
int `$start` u003d 0,
int `$end` u003d -1
): string\|false

Перетворює рядок або його частину за допомогою транслітератора ICU.

### Список параметрів

`transliterator`
У процедурному варіанті [Transliterator](class.transliterator.md) або
рядок, з якого може бути зібраний об'єкт
[Transliterator](class.transliterator.md).

`string`
Рядок для транслітерації.

`start`
Початковий індекс, включно (у кодових одиницях UTF-16), з якого
починається частина рядка, призначена для транслітерації. Індексація
починається з 0. Текст до цієї позиції залишиться як є.

`end`
Початковий індекс, не включаючи (у кодових одиницях UTF-16), яким
закінчується частина рядка, призначена для транслітерації.
Індексація починається з 0. Текст із цієї позиції залишиться як є.

### Значення, що повертаються

Перетворений рядок у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Конвертація екранованого UTF-16 рядка**

` <?php$s u003d "\u304A\u65E9\u3046\u3054\u3044\u307E\u3059";echo transliterator_transliterate("Hex-Any/Java", $s), "
";//тепер зворотня операція з додатковим символом$supplChar u003d html_entity_decode('&#x1D11E;');echo mb_strlen($supplChar, "UTF-8"), "
";$encSupplChar u003d transliterator_transliterate("Any-Hex/Java", $supplChar);//висновок двох кодованих UTF-16 символівecho $encSupplChar, "
";//і назадecho transliterator_transliterate("Hex-Any/Java", $encSupplChar), "
";?> `

Результатом виконання цього прикладу буде щось подібне:

빨리
1
\u834\uDD1E
𝄞

### Дивіться також

- [Transliterator::getErrorMessage()](transliterator.geterrormessage.md) -
Отримати останнє повідомлення про помилку
- [Transliterator::\_\_construct()](transliterator.construct.md) -
Приватний конструктор
