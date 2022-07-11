- [«mcrypt_get_key_size](function.mcrypt-get-key-size.md)
- [mcrypt_list_modes »](function.mcrypt-list-modes.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Отримати список усіх підтримуваних алгоритмів шифрування

# mcrypt_list_algorithms

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_list_algorithms — Отримати список усіх підтримуваних алгоритмів
шифрування

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_list_algorithms**(string `$lib_dir` u003d
ini_get("mcrypt.algorithms_dir")): array

Отримати список всіх підтримуваних алгоритмів шифрування в заданій
директорії `lib_dir`.

### Список параметрів

`lib_dir`
Вказує директорію, де розташовані алгоритми. Якщо не поставлено,
то буде використано значення директиви `mcrypt.algorithms_dir` з
`php.ini`.

### Значення, що повертаються

Повертає масив алгоритмів, що підтримуються.

### Приклади

**Приклад #1 Приклад використання **mcrypt_list_algorithms()****

` <?php$algorithms u003d mcrypt_list_algorithms();print_r($algorithms);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> cast-128
[1] u003d> gost
[2] u003d> rijndael-128
[3] u003d> twofish
[4] u003d> arcfour
[5] u003d> cast-256
[6] u003d> loki97
[7] u003d> rijndael-192
[8] u003d> saferplus
[9] u003d> wake
[10] u003d> blowfish-compat
[11] u003d> des
[12] u003d> rijndael-256
[13] u003d> serpent
[14] u003d> xtea
[15] u003d> blowfish
[16] u003d> enigma
[17] u003d> rc2
[18] u003d> tripledes
)
