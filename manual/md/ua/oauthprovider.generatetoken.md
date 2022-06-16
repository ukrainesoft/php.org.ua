- [«
OAuthProvider::consumerHandler](oauthprovider.consumerhandler.md)
- [OAuthProvider::is2LeggedEndpoint
»](oauthprovider.is2leggedendpoint.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- генерація випадкового токена

# OAuthProvider::generateToken

(PECL OAuth u003d> 1.0.0)

OAuthProvider::generateToken — Генерація випадкового токена

### Опис

final public static **OAuthProvider::generateToken**(int `$size`, bool
`$strong` u003d **`false`**): string

Генерує рядок псевдовипадкових байт.

### Список параметрів

`size`
Довжина токена у байтах.

`strong`
Установка в **`true`** призведе до використання `/dev/random`, в
в іншому випадку буде використаний неблокуючий `/dev/urandom`. В
Windows цей параметр буде проігноровано.

### Значення, що повертаються

Згенерований токен у вигляді рядка байт.

### Помилки

Якщо параметр `strong` заданий як **`true`**, то буде видано помилку
рівня **`E_WARNING`**, у випадку, якщо для заповнення решти
випадкових байт (наприклад, якщо було знайдено недостатньо випадкових
даних) буде використана стара реалізація
[rand()](function.rand.md)

### Приклади

**Приклад #1 Приклад використання **OAuthProvider::generateToken()****

` <?php$p u003d new OAuthProvider();$t u003d $p->generateToken(4);echo strlen($t), PHP_EOL;echo bin2hex($t), PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

4
b6a82c27

### Примітки

> **Примітка**:
>
> Якщо у системі недостатньо випадкових даних, то для генерації
> відсутніх байт ця функція використовуватиме звичайну функцію
> [rand()](function.rand.md).

### Дивіться також

- [openssl_random_pseudo_bytes()](function.openssl-random-pseudo-bytes.md) -
Генерує псевдовипадкову послідовність байт
- [mcrypt_create_iv()](function.mcrypt-create-iv.md) - Створити
ініціалізуючий вектор (Initialization Vector або IV) з випадкового
джерела
