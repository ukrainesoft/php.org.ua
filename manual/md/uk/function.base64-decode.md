- [« Функції URL](ref.url.md)
- [base64_encode »](function.base64-encode.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Декодує дані, закодовані MIME base64

# base64_decode

(PHP 4, PHP 5, PHP 7, PHP 8)

base64_decode — Декодує дані, закодовані MIME base64

### Опис

**base64_decode**(string `$string`, bool `$strict` u003d **`false`**):
string\|false

Декодує рядок `string`, закодований за допомогою base64.

### Список параметрів

`string`
Закодовані дані.

`strict`
Якщо параметр `strict` заданий як **`true`**, функція **base64_decode()**
поверне **`false`** у випадку, якщо вхідні дані містять символи, не
входять до алфавіту base64. Інакше такі символи будуть
відкинуті.

### Значення, що повертаються

Повертає декодовані дані або **`false`** у разі виникнення
помилки. Повертаються можуть бути бінарними.

### Приклади

**Приклад #1 Приклад використання **base64_decode()****

` <?php$stru003du003d'0K3RgtC+INC30LDQutC+0LTQuNGA0L7QstCw0L3QvdCw0Y8g0YHRgtGA0L7QutCw';echo base64_decode($str);?> `

Результат виконання цього прикладу:

Це закодований рядок

### Дивіться також

- [base64_encode()](function.base64-encode.md) - Кодує дані в
формат MIME base64
- [» RFC 2045](http://www.faqs.org/rfcs/rfc2045) розділ 6.8
