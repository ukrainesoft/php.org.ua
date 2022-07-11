- [« Установка драйвера PHP MongoDB на macOS допомогою
Homebrew](mongodb.installation.homebrew.md)
- [Складання драйвера PHP MongoDB з вихідного коду
»](mongodb.installation.manual.md)

- [PHP Manual](index.md)
- [Установка](mongodb.installation.md)
- Встановлення драйвера PHP MongoDB під Windows

## Встановлення драйвера PHP MongoDB під Windows

Скомпільовані модулі кожної версії доступні на сайті
[»PECL](https://pecl.php.net/package/mongodb) для всіх комбінацій
версій, потокобезпеки та бібліотек VC. Розархівуйте завантажений
модуль та скопіюйте `php_mongo.dll` в директорію з модулями PHP (за
замовчуванням "ext").

Додайте наступний рядок до `php.ini`:

`` inicode
extensionu003dphp_mongo.dll
````

> **Примітка**: **Додаткові залежності DLL для користувачів
> Windows**
>
> Для роботи цього модуля системної змінної Windows `PATH` мають бути
> Доступні файли DLL. Щоб дізнатися як цього досягти, зверніться до
> розділ FAQ "[Як додати мою директорію з PHP до змінної Windows
> PATH](faq.installation.md#faq.installation.addtopath)". Хоча
> копіювання DLL-файлів із директорії PHP до системної папки Windows
> також вирішує проблему (бо системна директорія за замовчуванням
> перебуває у змінній `PATH`), це рекомендується. *Цьому модулю
> потрібні наступні файли в змінній `PATH`: * `libsasl.dll`
