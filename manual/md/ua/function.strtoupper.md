- [«strtolower](function.strtolower.md)
- [strtr »](function.strtr.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює рядок у верхній регістр

#strtoupper

(PHP 4, PHP 5, PHP 7, PHP 8)

strtoupper — Перетворює рядок на верхній регістр

### Опис

**strtoupper**(string `$string`): string

Повертає рядок `string`, в якому всі літерні символи перекладені
верхній регістр.

Приналежність того чи іншого символу до буквених визначається з урахуванням
поточної локалі. Це означає, що, наприклад, використовуваної за замовчуванням
локалі "C", символ ä не буде перетворено.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає рядок у верхньому регістрі.

### Приклади

**Приклад #1 Приклад використання **strtoupper()****

` <?php$str u003d "Mary Had A Little Lamb and She LOVED It So";$str u003d strtoupper($str);echo $str; // виводить: MARY HAD A LITTLE LAMB AND SHE LOVED IT SO?> `

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [strtolower()](function.strtolower.md) - Перетворює рядок на
нижній регістр
- [ucfirst()](function.ucfirst.md) - Перетворює перший символ
рядки у верхній регістр
- [ucwords()](function.ucwords.md) - Перетворює на верхній регістр
перший символ кожного слова у рядку
- [mb_strtoupper()](function.mb-strtoupper.md) - Приведення рядка до
верхнього регістру
