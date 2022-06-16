- [«readline_add_history](function.readline-add-history.md)
- [readline_callback_handler_remove
»](function.readline-callback-handler-remove.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Ініціалізує callback-інтерфейс readline та термінал, друкує
рядок запрошення та негайно повертає управління

#readline_callback_handler_install

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

readline_callback_handler_install — Ініціалізує callback-інтерфейс
readline та термінал, друкує рядок запрошення та негайно повертає
управління

### Опис

**readline_callback_handler_install**(string `$prompt`,
[callable](language.types.callable.md) `$callback`): bool

Ініціалізує callback-інтерфейс readline, друкує `prompt` та
повертає керування. Повторний виклик цієї функції без попереднього
видалення старого callback-інтерфейсу призведе до автоматичного його
перезапису.

Функціонал callback-функцій особливо зручний у комбінації з
[stream_select()](function.stream-select.md), оскільки він, на відміну
від [readline()](function.readline.md), дозволяє чергувати введення-виведення
та введення користувача.

### Список параметрів

`prompt`
Рядок запрошення.

`callback`
Функція, що передається в параметр `callback`, повинна приймати один
параметр - повернутий введення користувача.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання callback-інтерфейсу readline**

` <?phpfunction rl_callback($ret){    global $c, $prompting; echo "Ви ввели: $ret
";    $c++;    if ($c > 10) {        $prompting u003d false;        readline_callback_handler_remove();    } else {        readline_callback_handler_install("[$c] Поговори со мной: ", 'rl_callback');    }}$c u003d 1; $promptingu003du003dtrue;readline_callback_handler_install("[$c] Введіть що-небудь: ", 'rl_callback');while ($prompting) {    $w u003d NULL;            STDIN), $w, $e, null);    if ($n && in_array(STDIN, $r)) {        // читаем символ и вызываем callback-функцию,        // если введён символ новой строки        readline_callback_read_char();    }}echo "Введення відключено. Спасибі за увагу.
";?> `

### Дивіться також

- [readline_callback_handler_remove()](function.readline-callback-handler-remove.md) -
Видаляє раніше зареєстровану callback-функцію та відновлює
термінал
- [readline_callback_read_char()](function.readline-callback-read-char.md) -
Читає символ та інформує callback-функцію readline, що отримана
рядок
- [stream_select()](function.stream-select.md) - Запускає
еквівалент системного виклику select() на заданих масивах потоків
з часом очікування, вказаним параметрами seconds та microseconds
