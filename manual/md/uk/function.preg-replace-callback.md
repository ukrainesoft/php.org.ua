- [«
preg_replace_callback_array](function.preg-replace-callback-array.md)
- [preg_replace »](function.preg-replace.md)

- [PHP Manual](index.md)
- [Функції PCRE](ref.pcre.md)
- Виконує пошук за регулярним виразом та заміною з використанням
callback-функції

# preg_replace_callback

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

preg_replace_callback — Пошук за регулярним виразом і
заміну з використанням callback-функції

### Опис

**preg_replace_callback**(
string\|array `$pattern`,
[callable](language.types.callable.md) `$callback`,
string\|array `$subject`,
int `$limit` u003d -1,
int `&$count` u003d **`null`**,
int `$flags` u003d 0
): string\|array\|null

Поведінка цієї функції багато в чому нагадує
[preg_replace()](function.preg-replace.md), за винятком того, що
замість параметра `replacement` необхідно вказувати `callback`-функцію.

### Список параметрів

`pattern`
Шуканий шаблон. Можливо як рядком, і масивом рядків.

`callback`
Викликана callback-функція, якій буде переданий масив тих, що збіглися
елементів з рядка `subject`. Callback-функція повинна повернути рядок з
заміною. Callback-функція має бути описана так:

handler(array `$matches`): string

Досить часто 'callback' функція, крім як у виклику
**preg_replace_callback()**, ні в чому більше не бере участі. Виходячи з
цих міркувань, можна використовувати [анонімні
функції](functions.anonymous.md) для створення callback-функції
безпосередньо у дзвінку **preg_replace_callback()**. Якщо ви
використовуєте такий підхід, вся інформація, пов'язана із заміною по
регулярному виразу, буде зібрана в одному місці, і простір імен
функцій не буде захаращуватися записами, що не використовуються.

**Приклад #1 **preg_replace_callback()** та анонімна функція**

` <?php/* фільтр, подібний тому, що використовується в системах Unix * для перетворення великих букв в початку параграфу в рядкові|*"$fp u003d fopen вдалося прочитати stdin");while (!feof($fp)) {    $line u003d fgets($fp); $line u003d preg_replace_callback(        '|<p>\s*\w|',        function ($matches) {            return strtolower($matches[0]);        },        $line    ); echo $line;}fclose($fp);?> `

`subject`
Рядок або масив рядків для пошуку та заміни.

`limit`
Максимально можлива кількість замін для кожного шаблону в кожній
рядку `subject`. За замовчуванням дорівнює `-1` (без обмежень).

`count`
Якщо зазначено, то ця змінна буде заповнена кількістю
зроблених замін.

`flags`
`flags` може бути комбінацією прапорів **`PREG_OFFSET_CAPTURE`** та
**`PREG_UNMATCHED_AS_NULL`**, які впливають на формат масиву
збігів. Дивіться опис [preg_match()](function.preg-match.md)
для більш детальної інформації.

### Значення, що повертаються

**preg_replace_callback()** повертає масив, якщо параметр `subject`
є масивом, інакше повертається рядок. У разі помилок
повертається **`null`**

Якщо знайдено збіги, буде повернено результуючий рядок, інакше
`subject` повернеться незміненим.

### Помилки

Якщо переданий шаблон регулярного виразу не компілюється
допустиме регулярне вираження, видається помилка рівня **`E_WARNING`**.

### Список змін

| Версія | Опис |
|--------|----------------------------|
| 7.4.0 | Доданий параметр `flags`. |

### Приклади

**Приклад #2 Приклад використання **preg_replace_callback()****

` <?php// Цей текст був використаний в 2002 року// ми хочемо оновити дати к 2003 року$text u003d "День сміху був 01/04/20
";$text.u003d "Остання Різдво було 24/12/2001
";// callback-функціяfunction next_year($matches){ // як звичайно: $matches[0] -  повне входження шаблона   // $matches[1] в вки|  return $matches[1].($matches[2]+1);}echo preg_replace_callback(             "|(\d{2}/\d{2}/)(\d{4})|"   | ",             $text);?> `

Результат виконання цього прикладу:

День сміху був 01/04/2003
Останнє Різдво було 24/12/2002

**Приклад #3 Рекурсивна обробка BB-кодів за допомогою
**preg_replace_callback()****

` <?php$input u003d "верх [indent] глибше [indent] ще глибше [/indent] глибше [/indent] верх";function parseTagsRecursive($input){    $regex u003d | [^[]|\[(?!/?indent])|(?R))+)\[/indent]#'; if (is_array($input)) {         $input u003d '<div styleu003d"margin-left: 10px">'.$input[1].'</div>'; }   return preg_replace_callback($regex, 'parseTagsRecursive', $input);}$output u003d parseTagsRecursive($input);echo $output;?> `

### Дивіться також

- [Регулярні висловлювання PCRE](pcre.pattern.md)
- [preg_replace_callback_array()](function.preg-replace-callback-array.md) -
Виконує пошук та заміну за регулярним виразом з використанням
функцій зворотного виклику
- [preg_quote()](function.preg-quote.md) - Екранує символи в
регулярних виразах
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [preg_last_error()](function.preg-last-error.md) - Повертає код
помилки виконання останнього регулярного вираження PCRE
- [Анонімні функції](functions.anonymous.md)
