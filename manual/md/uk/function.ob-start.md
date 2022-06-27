- [«ob_list_handlers](function.ob-list-handlers.md)
- [output_add_rewrite_var »](function.output-add-rewrite-var.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Увімкнення буферизації виводу

#ob_start

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_start — Увімкнення буферизації виводу

### Опис

**ob_start**([callable](language.types.callable.md) `$callback` u003d
**`null`**, int `$chunk_size` u003d 0, int `$flags` u003d
**`PHP_OUTPUT_HANDLER_STDFLAGS`**): bool

Ця функція включає буферизацію виводу. Якщо буферизація виводу
активна, жодного виведення скрипта не надсилається (крім заголовків), а
зберігається у внутрішньому буфері.

Вміст цього внутрішнього буфера може бути скопійований у рядкову
змінну, використовуючи
[ob_get_contents()](function.ob-get-contents.md). Для виведення
вміст внутрішнього буфера слід використовувати
[ob_end_flush()](function.ob-end-flush.md). Як альтернатива
можна використовувати [ob_end_clean()](function.ob-end-clean.md) для
очищення вмісту буфера.

**Увага**

Деякі веб-сервери (наприклад, Apache) змінюють робочу директорію
скрипт при виклику callback-функції. Ви можете повернути її назад
використовуючи `chdir(dirname($_SERVER['SCRIPT_FILENAME']))` в
callback-функції.

Буфери виведення поміщаються у стек, тобто допускається виклик
**ob_start()** після виклику іншої активної **ob_start()**. При цьому
необхідно викликати [ob_end_flush()](function.ob-end-flush.md)
відповідну кількість разів. Якщо активні кілька callback-функцій,
висновок послідовно фільтрується кожної з них у порядку вкладення.

Якщо буферизація виводу ще активна, коли скрипт завершує роботу,
PHP автоматично виводить вміст.

### Список параметрів

`callback`
Можна задати необов'язковий параметр callback. Ця функція приймає
рядок як аргумент і має також повернути рядок. Вона викликається
при скиданні (надсилання) або очищенні (за допомогою
[ob_flush()](function.ob-flush.md),
[ob_clean()](function.ob-clean.md) або подібних функцій) або якщо
буфер виводу скидається до браузера після закінчення запиту. При виклику
функції `callback`, вона отримує вміст буфера і, як очікується,
повинна повернути оновлений вміст для буфера виводу, який буде
надіслано браузеру. Якщо callback не є допустимою функцією, то
ця функція поверне **`false`**. Опис функції для цього параметра:

handler(string `$buffer`, int `$phase` u003d ?): string

`buffer`
Вміст буфера виводу.

`phase`
Бітова маска констант
[**`PHP_OUTPUT_HANDLER_*`**](outcontrol.constants.md).

Якщо `callback` поверне **`false`**, то оригінальна інформація
відправиться до браузера без змін.

Параметр callback може бути ігнорований передачею значення
**`null`**.

[ob_end_clean()](function.ob-end-clean.md),
[ob_end_flush()](function.ob-end-flush.md),
[ob_clean()](function.ob-clean.md),
[ob_flush()](function.ob-flush.md) та **ob_start()** не можуть
викликатися з callback-функцій, оскільки їх поведінка непередбачувана.
Якщо ви бажаєте видалити вміст буфера, поверніть "" (порожній рядок)
з callback-функції. Ви також не можете використовувати функції буферизації
висновку, такі як `print_r($expression, true)` або
`highlight_file($filename, true)` з callback-функції.

> **Примітка**:
>
> Функція [ob_gzhandler()](function.ob-gzhandler.md) була введена для
> полегшення надсилання gz-кодованих даних браузерам, що підтримують
> стислі веб-сторінки. [ob_gzhandler()](function.ob-gzhandler.md)
> визначає тип кодування вмісту, що приймається браузером, та
> повертає вивід відповідним чином.

`chunk_size`
Якщо переданий необов'язковий параметр `chunk_size`, то буфер буден
скинуто після будь-якого висновку, що перевищує або дорівнює за розміром
`chunk_size`. Значення за замовчуванням `0` означає, що функція виводу
буде викликано, коли буфер буде закрито.

`flags`
Параметр `flags` є бітовою маскою, яка управляє операціями,
які можна робити над буфером виведення. За умовчанням вона дозволяє
буфер виведення бути очищеним, скинутим і віддаленим, що рівносильно
значення **`PHP_OUTPUT_HANDLER_CLEANABLE`** \|
**`PHP_OUTPUT_HANDLER_FLUSHABLE`**\| **`PHP_OUTPUT_HANDLER_REMOVABLE`**
або **`PHP_OUTPUT_HANDLER_STDFLAGS`** як скорочення цієї комбінації.

Кожен прапор управляє доступом до набору функцій, як описано нижче:

| Константа Функції |
|------------------------------------|------------ -------------------------------------------------- -------------------------------------------------- ----------------------------|
| **`PHP_OUTPUT_HANDLER_CLEANABLE`** | [ob_clean()](function.ob-clean.md), [ob_end_clean()](function.ob-end-clean.md) та [ob_get_clean()](function.ob-get-clean.md). |
| **`PHP_OUTPUT_HANDLER_FLUSHABLE`** | [ob_end_flush()](function.ob-end-flush.md), [ob_flush()](function.ob-flush.md) та [ob_get_flush()](function.ob-get-flush.md). |
| **`PHP_OUTPUT_HANDLER_REMOVABLE`** | [ob_end_clean()](function.ob-end-clean.md), [ob_end_flush()](function.ob-end-flush.md) та [ob_get_flush()](function.ob-get-flush.md) . |

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад callback-функції, визначеної користувачем**

`<?phpfunction callback($buffer){  // замінити всі яблука апельсинами  return (str_replace("яблука", "апельсини", $buffer))}ob_start("callback");?><html p>Це все рівно що порівняти яблука і апельсини.</p></body></html><?phpob_end_flush();?> `

Результат виконання цього прикладу:

<html>
<body>
<p>Це однаково порівняти апельсини та апельсини.</p>
</body>
</html>

**Приклад #2 Створення буфера виведення, що нестирається**

` <?phpob_start(null, 0, PHP_OUTPUT_HANDLER_STDFLAGS ^ PHP_OUTPUT_HANDLER_REMOVABLE);?> `

### Дивіться також

- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
- [ob_implicit_flush()](function.ob-implicit-flush.md) -
Увімкнення/вимкнення неявного скидання
- [ob_gzhandler()](function.ob-gzhandler.md) - callback-функція,
використовується для gzip-стиснення буфера виводу при виклик ob_start
- [ob_iconv_handler()](function.ob-iconv-handler.md) - Перетворює
символи з поточного кодування в кодування вихідного буфера
- [mb_output_handler()](function.mb-output-handler.md) -
Callback-функція, що перетворює кодування символів у вихідному буфері
- [ob_tidyhandler()](function.ob-tidyhandler.md) - Функція зворотнього
виклику ob_start для відновлення буфера
