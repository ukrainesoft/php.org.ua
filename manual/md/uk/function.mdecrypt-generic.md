- [«mcrypt_module_self_test](function.mcrypt-module-self-test.md)
- [Mhash »](book.mhash.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Дешифрування даних

#mdecrypt_generic

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mdecrypt_generic — Дешифрування даних

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mdecrypt_generic**(resource `$td`, string `$data`): string

Функція дешифрує дані. Зверніть увагу, що довжина повертається
рядки за фактом може бути більшою за довжину оригінальної нешифрованої
рядки. Це походить від того, що дані можуть доповнюватися.

### Список параметрів

`td`
Дескриптор шифрування, що повертається
[mcrypt_module_open()](function.mcrypt-module-open.md)

`data`
Зашифровані дані.

### Значення, що повертаються

Повертає розшифрований рядок.

### Приклади

**Приклад #1 Приклад використання **mdecrypt_generic()****

` <?php    /* Дані */    $key u003d 'Це дуже довгий ключ. Сильно більше, чем потрібний шифру.'; $plain_text u003d 'дуже важливі дані'; /* Відкриваємо модуль і створюємо ініціалізуючий вектор */    $td u003d mcrypt_module_open('des', '', 'ecb', ''); $keyu003du003dsubstr($key, 0,mcrypt_enc_get_key_size($td)); $iv_sizeu003dmcrypt_enc_get_iv_size($td); $iv u003d mcrypt_create_iv($iv_size, MCRYPT_RAND); /* Инициализируем обработчик шифрования */    if (mcrypt_generic_init($td, $key, $iv) !u003d -1) {        /* Шифруем данные */        $c_t u003d mcrypt_generic($td, $plain_text); mcrypt_generic_deinit($td); /* Переініціалізуємо буфери для дешифрування */        mcrypt_generic_init($td, $key, $iv); $p_t u003d mdecrypt_generic($td, $c_t); /* Прибираємо сміття */        mcrypt_generic_deinit($td); mcrypt_module_close($td); }    if (strncmp($p_t, $plain_text, strlen($plain_text)) u003du003d 0) {        echo "ок
";    } else {        echo "помилка
";    }?> `

Приклад вище показує, як перевірити, що дані до шифрування
збігаються з даними після дешифрування. Вкрай важливо
переініціалізувати буфери шифрування за допомогою
[mcrypt_generic_init()](function.mcrypt-generic-init.md) перед
дешифрування даних.

Обробник дешифрування завжди повинен ініціалізуватися за допомогою
[mcrypt_generic_init()](function.mcrypt-generic-init.md) з ключем та
ініціалізуючим вектором перед викликом функції. Як тільки шифрування
завершено, необхідно звільнити буфери шифрування шляхом виклику функції
[mcrypt_generic_deinit()](function.mcrypt-generic-deinit.md). Дивіться
приклад у описі функції
[mcrypt_module_open()](function.mcrypt-module-open.md).

### Дивіться також

- [mcrypt_generic()](function.mcrypt-generic.md) - Функція шифрує
дані
- [mcrypt_generic_init()](function.mcrypt-generic-init.md) - Функція
ініціалізує всі буфери, необхідні для шифрування
- [mcrypt_generic_deinit()](function.mcrypt-generic-deinit.md) - Ця
функція деініціалізує модуль шифрування
