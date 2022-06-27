- [«ini_get](function.ini-get.md)
- [ini_set »] (function.ini-set.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Відновлює налаштування конфігурації

#ini_restore

(PHP 4, PHP 5, PHP 7, PHP 8)

ini_restore — Відновлює значення конфігураційної установки

### Опис

**ini_restore**(string `$option`): void

Відновлює початкове значення конфігурації.

### Список параметрів

`option`
Ім'я налаштування.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ini_restore()****

` <?php$setting u003d 'html_errors';echo 'Поточне значення настройки \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;ini_set($setting, ini_get($setting) ? 0 : 1);echo 'Нове значення настройки \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;ini_restore($setting);echo 'Вихідне значення настройки \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;?> `

Результат виконання цього прикладу:

Поточне значення налаштування 'html_errors': 1
Нове значення налаштування 'html_errors': 0
Вихідне значення налаштування 'html_errors': 1

### Дивіться також

- [ini_get()](function.ini-get.md) - Отримує значення налаштування
конфігурації
- [ini_get_all()](function.ini-get-all.md) - Отримує всі налаштування
конфігурації
- [ini_set()](function.ini-set.md) - Встановлює значення
налаштування конфігурації
