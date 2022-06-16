- [«oci_cancel](function.oci-cancel.md)
- [oci_close »](function.oci-close.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає версію клієнтської бібліотеки

#oci_client_version

(PHP 5 u003d 5.3.7, PHP 7, PHP 8, PECL OCI8 u003d 1.4.6)

oci_client_version — Повертає версію клієнтської бібліотеки

### Опис

**oci_client_version**(): string

Повертає номер версії у вигляді рядка клієнтської C-бібліотеки Oracle, з
якою пов'язаний PHP.

### Список параметрів

Немає.

### Значення, що повертаються

Повертає номер версії у вигляді рядка (string).

### Приклади

**Приклад #1 Приклад використання **oci_client_version()****

`<?php    echo "Версія клієнта: " . oci_client_version(); // Версія клієнта: 19.9.0.0.0?

### Примітки

> **Примітка**:
>
> Бібліотеки Oracle версій до 10*g*R2 не мають необхідного функціоналу,
> щоб видати номер версії. У цих випадках функція поверне рядок
> "Unknown".

### Дивіться також

- [oci_server_version()](function.oci-server-version.md) -
Повертає версію сервера Oracle
