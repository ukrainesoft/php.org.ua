- [«mb_convert_case](function.mb-convert-case.md)
- [mb_convert_kana »](function.mb-convert-kana.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Перетворює рядок з одного кодування символів на інше

#mb_convert_encoding

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_convert_encoding — Перетворює рядок з одного кодування символів на
іншу

### Опис

**mb_convert_encoding**(array\|string `$string`, string `$to_encoding`,
array\|string\|null `$from_encoding` u003d **`null`**): array\|string\|false

Перетворює параметр `string` з кодування `to_encoding` або поточного
внутрішнього кодування в `to_encoding`. Також можна вказати необов'язковий
параметр `from_encoding`. Якщо `string` є масивом (array), все
його рядкові (string) значення буде перетворено рекурсивно.

### Список параметрів

`string`
Рядок (string) або масив (array), для перетворення.

`to_encoding`
Необхідне кодування результату.

`from_encoding`
Поточне кодування, яке використовується для інтерпретації рядка `string`.
Декілька кодувань можуть бути вказані у вигляді масиву (array) або у вигляді
рядки через кому, у цьому випадку правильне кодування буде
визначено за тим самим алгоритмом, що й у функції
[mb_detect_encoding()](function.mb-detect-encoding.md).

Якщо параметр `from_encoding` дорівнює **`null`** або не вказано, то буде
використовуватись [mbstring.internal_encoding
setting](mbstring.configuration.md#ini.mbstring.internal-encoding),
якщо вона встановлена, інакше [кодування по
замовчуванням](ini.core.md#ini.default-charset).

Допустимі значення `to_encoding` та `from_encoding` вказані на сторінці
[підтримувані кодування](mbstring.supported-encodings.md).

### Значення, що повертаються

Перетворений рядок (string) або масив (array) або **`false`**
у разі виникнення помилки.

### Помилки

Починаючи з PHP 8.0.0, якщо значення `to_encoding` або `from_encoding`
є неприпустимим кодуванням, що викидається
[ValueError](class.valueerror.md). До PHP 8.0.0 натомість
видавалась помилка рівня **`E_WARNING`**.

### Список змін

| 8.0.0 | **mb_convert_encoding()** тепер викидає [ValueError](class.valueerror.md), якщо передано неприпустиме кодування в `to_encoding`. |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 8.0.0 | **mb_convert_encoding()** тепер викидає [ValueError](class.valueerror.md), якщо передано неприпустиме кодування в `from_encoding`. |
| 8.0.0 | Тепер `from_encoding` може бути **`null`**. |
| Версія | Опис |
| 7.2.0 | Функція тепер приймає масив (array) в `string`. Раніше підтримувалися лише рядки (string). |

### Приклади

**Приклад #1 Приклад використання **mb_convert_encoding()****

` <?php/* Перетворює рядок в кодування SJIS */$str u003d mb_convert_encoding($str, "SJIS");/* Перетворить з EUC-JP вUTF-7 */$str u003d 7", "EUC-JP");/* Автоматично визначається кодування серед JIS, eucjp-win, sjis-win, потім перетворюється в UCS-2LE */$str u003d mb_convert_ending , eucjp-win, sjis-win");/* Якщо mbstring.language рівний "Japanese", "auto" використовується для позначення "ASCII,JIS,UTF-8,EUC-JP,SJIS" *$ $str, "EUC-JP", "auto");?> `

### Дивіться також

- [mb_detect_order()](function.mb-detect-order.md) -
Встановлення/отримання списку кодувань для механізмів визначення
кодування
- [UConverter::transcode()](uconverter.transcode.md) - Перетворює
рядок з одного кодування символів до іншого
- [iconv()](function.iconv.md) - Перетворює рядок з одного
кодування символів в іншу
