- [«str_repeat](function.str-repeat.md)
- [str_rot13 »](function.str-rot13.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Замінює всі входи рядка пошуку на рядок заміни

#str_replace

(PHP 4, PHP 5, PHP 7, PHP 8)

str_replace — Замінює всі входження рядка пошуку на рядок заміни

### Опис

**str_replace**(
array\|string `$search`,
array\|string `$replace`,
string\|array `$subject`,
int `&$count` u003d **`null`**
): string\|array

Ця функція повертає рядок або масив, в якому всі входження
'search' в 'subject' замінені на 'replace'.

Якщо не потрібні складні правила пошуку/заміни (наприклад, регулярні
вирази), використання цієї функції краще
[preg_replace()](function.preg-replace.md).

### Список параметрів

Якщо `search` та `replace` - масиви, то **str_replace()** використовує
кожне значення з відповідного масиву для пошуку та заміни в
`subject`. Якщо в масиві `replace` менше елементів, ніж у `search`,
як рядок заміни для значень, що залишилися, буде використана порожня
рядок. Якщо `search` - масив, а `replace` - рядок, то цей рядок
заміна буде використана для кожного елемента масиву `search`.
Зворотний випадок не має сенсу.

Якщо `search` або `replace` є масивами, їх елементи будуть
оброблені від першого до останнього.

`search`
Шукане значення також відоме як *needle* (голка). Для безлічі
шуканих значень можна використовувати масив.

`replace`
Значення заміни, буде використано для заміни значень, що шукаються
`search`. Для багатьох значень можна використовувати масив.

`subject`
Рядок або масив, в якому проводиться пошук і заміна, також
відомий як *haystack* (стіг сіна).

Якщо `subject` є масивом, то пошук із заміною буде
здійснюватись над кожним елементом `subject`, а результатом функції
також буде масив.

`count`
Якщо передано, то буде встановлено кількість проведених замін.

### Значення, що повертаються

Ця функція повертає рядок або масив із заміненими значеннями.

### Приклади

**Приклад #1 Приклади використання **str_replace()****

` <?php// привласнює <body textu003d'black'>$bodytag u003d str_replace("%body%", "black", "<body textu003d'%body%'>");// присвоює: Hll Wrld f PHP$vowels u003d array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");$onlyconsonants u003d str_replace($vowels, "", "Hello World of PHP");// привласнює: You should eat pizza, beer, and cream every day$phrase   u003d  ;$healthy u003d array("fruits", "vegetables", "fiber");$yummy   u003d array("pizza", "beer", "ice cream");$newphrase u003d str_replace($healthy, phrase);// привласнює: 2$str u003d str_replace("ll", "", "good golly miss molly!", $count);echo $count;?> `

**Приклад #2 Приклади потенційних трюків з **str_replace()****

` <?php// Порядок заміни$str     u003d "Рядок 1
Рядок 2Рядок 3
Рядок 4
";$order   u003d array("
", "
", "");$replace u003d '<br />';// Обробляє спочатку
для уникнення їх повторної заміни. echo $ newstr u003d str_replace ($ order, $ replace, $ str); / / Виводить F, т.к. A замінюється на B, потім B на C, і так далі...// В результаті E буде замінено F, так як заміна відбувається зліва ,направо.$search  '''' ' D', 'E');$replaceu003du003darray('B', C', D', E', F');$subjectu003du003d'A';echo str_replace($search, $replace, $subject);// Виводить: яблорехкоріх горіх(за вищевказаною причиною)$letters u003d array('я', 'о');$fruit   u003d array('яблуко', 'горіх' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '; ;$output u003d str_replace($letters, $fruit, $text);echo $output;?> `

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

**Застереження**

# Зауваження про порядок заміни

Оскільки **str_replace()** здійснює заміну зліва направо, то при
використання множинних замін вона може замінити раніше вставлене
значення інше. Дивіться приклади на цій сторінці.

> **Примітка**:
>
> Ця функція чутлива до регістру. Використовуйте
> [str_ireplace()](function.str-ireplace.md) для заміни без урахування
> Регістру.

### Дивіться також

- [str_ireplace()](function.str-ireplace.md) - Реєстронезалежний
варіант функції str_replace
- [substr_replace()](function.substr-replace.md) - Замінює частину
рядки
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [strtr()](function.strtr.md) - Перетворює задані символи або
замінює підрядки
