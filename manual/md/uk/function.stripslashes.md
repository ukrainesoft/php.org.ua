- [«stripos](function.stripos.md)
- [stristr »](function.stristr.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Видаляє екранування символів

# stripslashes

(PHP 4, PHP 5, PHP 7, PHP 8)

stripslashes — Видалення екранування символів

### Опис

**stripslashes**(string `$string`): string

Видаляє екрануючі символи.

Функцію **stripslashes()** можна використовувати, якщо екранування
символів не потрібно. Наприклад, дані не вставляються до бази даних, а
просто виводяться у браузер.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає рядок із вирізаними зворотними слішами. (`\'` стає ```
і т.п.) Подвійні зворотні сліші (`\`) стають одинарними (`\`).

### Приклади

**Приклад #1 Приклад використання **stripslashes()****

` <?php$str u003d"Ваc звуть O\'reilly?";// виводить: Вас звуть O'reilly?echo stripslashes($str);?> `

> **Примітка**:
>
> **stripslashes()** не рекурсивна. Якщо ви хочете застосувати її до
> багатовимірному масиву, то вам необхідно використовувати рекурсивну
> Функцію.

**Приклад #2 Використання **stripslashes()** з масивом**

` <?phpfunction stripslashes_deep($value){   $value u003d is_array($value) ? array_map('stripslashes_deep', $value) :                stripslashes($value); return $value;}// Приклад$array u003d array("f\'oo", "b\'ar", array("fo\'o", "b\'ar"));$array u003d stripslashes_deep( $array);// Висновокprint_r($array);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> f'oo
[1] u003d> b'ar
[2] u003d> Array
(
[0] u003d> fo'o
[1] u003d> b'ar
)

)

### Дивіться також

- [addslashes()](function.addslashes.md) - Екранує рядок з
допомогою слішів
- [get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md) -
Отримання поточного значення конфігурації magic_quotes_gpc
