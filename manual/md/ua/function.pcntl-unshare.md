- [« pcntl_strerror](function.pcntl-strerror.md)
- [pcntl_wait »](function.pcntl-wait.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- розділяє частини контексту виконання процесу

#pcntl_unshare

(PHP 7 u003d 7.4.0, PHP 8)

pcntl_unshare — розділяє частини контексту виконання процесу

### Опис

**pcntl_unshare**(int `$flags`): bool

Функція **pcntl_unshare()** дозволяє процесу від'єднати частини свого
контексту виконання, які в даний час використовуються спільно з
іншими процесами. Основне використання **pcntl_unshare()**
полягає в тому, щоб дозволити процесу керувати своїм загальним
контекстом виконання без створення нового процесу.

### Список параметрів

`flags`
Параметр `flags` - це бітова маска, яка визначає, які частини
контексту виконання мають бути нерозділеними. Параметр задається шляхом
використання оператора OR разом з нулем або більше констант `CLONE_*`:

- **`CLONE_NEWNS`**
- **`CLONE_NEWIPC`**
- **`CLONE_NEWUTS`**
- **`CLONE_NEWNET`**
- **`CLONE_NEWPID`**
- **`CLONE_NEWUSER`**
- **`CLONE_NEWCGROUP`**

### Значення, що повертаються

Повертає `0` у разі успішного виконання, `-1` в іншому випадку. В
у разі виникнення помилки встановлюється код помилки, який можна
отримати за допомогою функції
[pcntl_get_last_error()](function.pcntl-get-last-error.md).

### Дивіться також

- [Константи PCNTL](pcntl.constants.md#pcntl.constants.clone)
- [pcntl_get_last_error()](function.pcntl-get-last-error.md) -
Отримати код останньої помилки, що виникла в pcntl-функції
