- [« Yaf_Application::environ](yaf-application.environ.md)
- [Yaf_Application::getAppDirectory
»](yaf-application.getappdirectory.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Запустити callback-функцію

# Yaf_Application::execute

(Yaf \>u003d1.0.0)

Yaf_Application::execute - Запустити callback-функцію

### Опис

public
**Yaf_Application::execute**([callable](language.types.callable.md)
`$entry`, string `...$args`): void

Цей метод зазвичай використовується для запуску Yaf_Application через
планувальник (Crontab). Завдання у crontab також може використовувати
механізми autoloader та Bootstrap.

### Список параметрів

`entry`
Callback-функція

`args`
Параметри, які потрібно передати в цю функцію

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::execute()****

`<?phpfunction main($argc, $argv) {}$config u003d array(   "application" u003d> array(        "directory" u003d>| ),  |  | * Yaf_Application */$application u003d new Yaf_Application($config);$application->execute("main", $argc, $argv);?> `

Результатом виконання цього прикладу буде щось подібне:
