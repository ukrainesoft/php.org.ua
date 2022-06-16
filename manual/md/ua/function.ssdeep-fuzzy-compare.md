- [« Функції ssdeep](ref.ssdeep.md)
- [ssdeep_fuzzy_hash_filename
»](function.ssdeep-fuzzy-hash-filename.md)

- [PHP Manual](index.md)
- [Функції ssdeep](ref.ssdeep.md)
- обчислює схожість двох сигнатур нечітких хешей

#ssdeep_fuzzy_compare

(PECL ssdeep \>u003d 1.0.0)

ssdeep_fuzzy_compare - Обчислює схожість двох сигнатур нечітких хешей

### Опис

**ssdeep_fuzzy_compare**(string `$signature1`, string `$signature2`):
int

Обчислює величину збігу між `signature1` та `signature2`,
використовуючи [»  контекстно-переключається часткове
хешування](http://dfrws.org/2006/proceedings/12-Kornblum.pdf) та
повертає її.

### Список параметрів

`signature1`
Перший рядок із сигнатурою нечіткого хешування.

`signature2`
Другий рядок із сигнатурою нечіткого хешування.

### Значення, що повертаються

Повертає ціле число в діапазоні від 0 до 100 у разі успішного
виконання або **`false`** в іншому випадку.
