- [«strtok](function.strtok.md)
- [strtoupper »](function.strtoupper.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює рядок на нижній регістр

#strtolower

(PHP 4, PHP 5, PHP 7, PHP 8)

strtolower — Перетворює рядок на нижній регістр

### Опис

**strtolower**(string `$string`): string

Повертає рядок `string`, в якому всі літерні символи перекладені
нижній регістр.

Приналежність того чи іншого символу до буквених визначається з урахуванням
поточної локалі. Це означає, що, наприклад, використовуваної за замовчуванням
локалі "C", символ Ä не буде перетворено.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає рядок у нижньому регістрі.

### Приклади

**Приклад #1 Приклад використання **strtolower()****

` <?php$str u003d "Mary Had A Little Lamb and She LOVED It So";$str u003d strtolower($str);echo $str; // виводить: mary had a little lamb and she loved it so?> `

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [strtoupper()](function.strtoupper.md) - Перетворює рядок на
верхній регістр
- [ucfirst()](function.ucfirst.md) - Перетворює перший символ
рядки у верхній регістр
- [ucwords()](function.ucwords.md) - Перетворює на верхній регістр
перший символ кожного слова у рядку
- [mb_strtolower()](function.mb-strtolower.md) - Приведення рядка до
нижнього регістру
