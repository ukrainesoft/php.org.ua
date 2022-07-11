- [« openssl_public_encrypt](function.openssl-public-encrypt.md)
- [openssl_seal »](function.openssl-seal.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Генерує псевдовипадкову послідовність байт

# openssl_random_pseudo_bytes

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

openssl_random_pseudo_bytes - Генерує псевдовипадкову
послідовність байт

### Опис

**openssl_random_pseudo_bytes**(int `$length`, bool `&$strong_result` u003d
**`null`**): string

Генерує рядок псевдовипадкових байт довжиною length.

Також, якщо задати необов'язковий параметр `strong_result`, який
передається за посиланням, то в нього запишеться **`true`** або **`false`**,
залежно від того, чи був використаний криптографічно сильний
алгоритм.

### Список параметрів

`length`
Довжина рядка, що генерується. Позитивне ціле число.

`strong_result`
Якщо встановлено, то в передану змінну буде записано **`true`** або
**`false`**, залежно від того, чи був використаний криптографічно
сильний алгоритм.

### Значення, що повертаються

Повертає рядок випадкових байт або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | `strong_result` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **openssl_random_pseudo_bytes()****

` <?phpfor ($i u003d 1; $i <u003d 4; $i++) {    $bytes u003d openssl_random_pseudo_bytes($i, $cstrong); $hex  u003d bin2hex($bytes); echo "Lengths: Bytes: $i and Hex: " . strlen($hex) . PHP_EOL; var_dump($hex); var_dump($cstrong); echo PHP_EOL;}?> `

Результатом виконання цього прикладу буде щось подібне:

Lengths: Bytes: 1 and Hex: 2
string(2) "42"
bool(true)

Lengths: Bytes: 2 and Hex: 4
string(4) "dc6e"
bool(true)

Lengths: Bytes: 3 and Hex: 6
string(6) "288591"
bool(true)

Lengths: Bytes: 4 and Hex: 8
string(8) "ab86d144"
bool(true)

### Дивіться також

- [random_bytes()](function.random-bytes.md) - Генерує
криптографічно безпечні псевдовипадкові байти
- [bin2hex()](function.bin2hex.md) - Перетворює бінарні дані на
шістнадцяткове уявлення
- [crypt()](function.crypt.md) - Необоротне хешування рядка
- [mt_rand()](function.mt-rand.md) - Генерує випадкове значення
методом за допомогою генератора простих чисел на базі Вихря Мерсенна
- [uniqid()](function.uniqid.md) - Створити унікальний ID
