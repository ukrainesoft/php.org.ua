- [« Скрипт статистики WinCache](wincache.stats.md)
- [Перенаправлення функцій WinCache »](wincache.reroutes.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](wincache.setup.md)
- Обробник сесій WinCache

## Обробник сесій WinCache

Обробник сесій WinCache (доступний із WinCache 1.1.0) може
використовуватися для зберігання даних сесій в кеші в пам'яті, що розділяється.
Використання пам'яті замість файлової системи допоможе покращити
продуктивність вашої програми, якщо вона зберігає велику
кількість сесійних даних. Кеш сесій Wincache використовує
дублювання даних на диску, що дозволяє зберегти сесійні дані
при перестворенні пулу додатків IIS.

Щоб настроїти використання обробника сесій WinCache, змініть у файлі
`php.ini` налаштування
[session.save_handler](session.configuration.md#ini.session.save-handler)
на *wincache*. За умовчанням, для зберігання сесій використовується
тимчасова директорія Windows. Для зміни шляху до сесійного файлу
використовуйте налаштування
[session.save_path](session.configuration.md#ini.session.save-path).

**Приклад #1 Увімкнення обробника сесій WinCache**

``` php.inicode
session.save_handleru003dwincache
session.save_path u003d C:\inetpub emp\session\
````
