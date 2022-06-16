- [« GearmanClient](class.gearmanclient.md)
- [GearmanClient::addServer »](gearmanclient.addserver.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати опції клієнтів

# GearmanClient::addOptions

(PECL gearman \>u003d 0.6.0)

GearmanClient::addOptions — Додати опції клієнта

### Опис

public **GearmanClient::addOptions**(int `$options`): bool

Додає одну або кілька опцій до встановлених.

### Список параметрів

`options`
Опції додавання. Одна з наступних констант або їх комбінація з
допомогою двійкового оператора OR (“\|”):
**`GEARMAN_CLIENT_GENERATE_UNIQUE`**, **`GEARMAN_CLIENT_NON_BLOCKING`**,
**`GEARMAN_CLIENT_UNBUFFERED_RESULT`** або
**`GEARMAN_CLIENT_FREE_TASKS`**.

### Значення, що повертаються

Завжди повертає **`true`**.
