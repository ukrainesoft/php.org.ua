- [« dba_firstkey](function.dba-firstkey.md)
- [dba_insert »](function.dba-insert.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Список усіх доступних обробників

#dba_handlers

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

dba_handlers — Список доступних обробників

### Опис

**dba_handlers**(bool `$full_info` u003d **`false`**): array

**dba_handlers()** повертає список усіх доступних у цьому модулі
обробників.

### Список параметрів

`full_info`
Включає або вимикає виведення повної інформації в результат.

### Значення, що повертаються

Повертає масив обробників баз даних. Якщо параметр `full_info`
заданий, як **`true`**, масив міститиме асоціативний масив, де
ключами будуть імена обробників, а значення інформації про версію. В
інакше, масив буде індексованим масивом і міститиме імена
обробників як значення.

> **Примітка**:
>
> Якщо використовується вбудована база даних, ви побачите і `cdb` та
> `cdb_make`.

### Приклади

**Приклад #1 Приклад використання **dba_handlers()****

`<?phpecho "Доступні обробники DBA:
";foreach (dba_handlers(true) as $handler_name u003d> $handler_version) {  // Очищаємо рядки з версіями $handler_version u003d str_replace('$', '' 
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Доступні обробники DBA:
- cdb: 0.75, Revision: 1.3.2.3
- cdb_make: 0.75, Revision: 1.2.2.4
- db2: Sleepycat Software: Berkeley DB 2.7.7: (08/20/99)
- inifile: 1.0, Revision: 1.6.2.3
- flatfile: 1.0, Revision: 1.5.2.4
