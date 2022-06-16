- [« Вимоги](mailparse.requirements.md)
- [Налаштування під час виконання »](mailparse.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mailparse.setup.md)
- Встановлення

## Установка

Цей модуль [»PECL](https://pecl.php.net/) не поставляється разом з
PHP. Інформація щодо встановлення цього модуля PECL може бути знайдена в
розділ керівництва [Встановлення модулів PECL](install.pecl.md).
Додаткова інформація, така як нові версії, скачування, вихідні
файли, інформація про розробника та CHANGELOG, можна знайти тут:
[»https://pecl.php.net/package/mailparse](https://pecl.php.net/package/mailparse).

Для використання цих функцій ви повинні скомпілювати PHP з підтримкою
mailparse використовуючи опцію конфігурації **--enable-mailparse**.

Користувачам Windows необхідно дозволити `php_mailparse.dll`
`php.ini` для використання цих функцій. Бінарні файли Windows (файли
DLL) для цього модуля PECL доступні на сайті PECL.

Необхідно, щоб модуль [mbstring](ref.mbstring.md) був завантажений
перед використанням `mailparse`.
