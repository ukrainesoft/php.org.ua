- [«readline_write_history](function.readline-write-history.md)
- [Модулі для стиснення та архівації »](refs.compression.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Читає рядок

# readline

(PHP 4, PHP 5, PHP 7, PHP 8)

readline — Читає рядок

### Опис

**readline**(?string `$prompt` u003d **`null`**): string\|false

Читає один рядок, введений користувачем. Якщо вам потрібно додати цю
рядок в історію, то зробити це ви повинні самостійно, за допомогою
[readline_add_history()](function.readline-add-history.md).

### Список параметрів

`prompt`
Підказка, яка буде виведена користувачеві.

### Значення, що повертаються

Повертає один рядок, введений користувачем. Символ кінця рядка
буде видалено. Якщо більше даних немає для читання, тоді повертає
**`false`**.

### Приклади

**Приклад #1 Приклад використання **readline()****

` <?php//отримаємо 3 команди від користувачаfor ($iu003d0; $i < 3; $i++) {        $line u003d readline("Command: "); readline_add_history($line);}//роздрукуємо історію введенняprint_r(readline_list_history());//роздрукуємо змінніprint_r(readline_info());?> `
