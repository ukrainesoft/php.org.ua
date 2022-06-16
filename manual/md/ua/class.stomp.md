- [«stomp_version](function.stomp-version.md)
- [Stomp::abort »](stomp.abort.md)

- [PHP Manual](index.md)
- [Stomp](book.stomp.md)
- Клас Stomp

# Клас Stomp

(PECL stomp \>u003d 0.1.0)

## Вступ

Представляє зв'язок між PHP та Stomp сумісним брокером повідомлень
(Message Broker).

## Огляд класів

class **Stomp** {

/\* Методи \*/

public [\_\_construct](stomp.construct.md)(
string `$broker` u003d ini_get("stomp.default_broker_uri"),
string `$username` u003d ?,
string `$password` u003d ?,
array `$headers` u003d ?
)

public [abort](stomp.abort.md)(string `$transaction_id`, array
`$headers` u003d ?): bool

**stomp_abort**(resource `$link`, string `$transaction_id`, array
`$headers` u003d ?): bool

public
[ack](stomp.ack.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

**stomp_ack**(resource `$link`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

public [begin](stomp.begin.md)(string $transaction_id`, array
`$headers` u003d ?): bool

**stomp_begin**(resource `$link`, string `$transaction_id`, array
`$headers` u003d ?): bool

public [commit](stomp.commit.md)(string `$transaction_id`, array
`$headers` u003d ?): bool

**stomp_commit**(resource `$link`, string `$transaction_id`, array
`$headers` u003d ?): bool

**stomp_connect**(
string `$broker` u003d ini_get("stomp.default_broker_uri"),
string `$username` u003d ?,
string `$password` u003d ?,
array `$headers` u003d ?
): resource

**stomp_close**(resource `$link`): bool

public [error](stomp.error.md)(): string

**stomp_error**(resource `$link`): string

public [getReadTimeout](stomp.getreadtimeout.md)(): array

**stomp_get_read_timeout**(resource `$link`): array

public [getSessionId](stomp.getsessionid.md)(): string\|false

**stomp_get_session_id**(resource `$link`): string\|false

public [hasFrame](stomp.hasframe.md)(): bool

**stomp_has_frame**(resource `$link`): bool

public [readFrame](stomp.readframe.md)(string `$class_name` u003d
"stompFrame"): [stompframe](class.stompframe.md)

**stomp_read_frame**(resource `$link`): array

public [send](stomp.send.md)(string `$destination`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

**stomp_send**(
resource `$link`,
string `$destination`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`,
array `$headers` u003d ?
): bool

public [setReadTimeout](stomp.setreadtimeout.md)(int `$seconds`, int
`$microseconds` u003d ?): void

**stomp_set_read_timeout**(resource `$link`, int `$seconds`, int
`$microseconds` u003d ?): void

public [subscribe](stomp.subscribe.md)(string `$destination`, array
`$headers` u003d ?): bool

**stomp_subscribe**(resource `$link`, string `$destination`, array
`$headers` u003d ?): bool

public [unsubscribe](stomp.unsubscribe.md)(string `$destination`,
array `$headers` u003d ?): bool

**stomp_unsubscribe**(resource `$link`, string `$destination`, array
`$headers` u003d ?): bool

public [\_\_destruct](stomp.destruct.md)()

}

## Зміст

- [Stomp::abort](stomp.abort.md) — Скасує виконання поточної
транзакції
- [Stomp::ack](stomp.ack.md) — Підтвердження отримання повідомлення
- [Stomp::begin](stomp.begin.md) — Створює транзакцію
- [Stomp::commit](stomp.commit.md) — Виконує поточну транзакцію
- [Stomp::\_\_construct](stomp.construct.md) — Відкриває з'єднання
- [Stomp::\_\_destruct](stomp.destruct.md) - Закриває
Stomp-з'єднання
- [Stomp::error](stomp.error.md) — Повертає останню помилку Stomp
- [Stomp::getReadTimeout](stomp.getreadtimeout.md) — Повертає
час максимального очікування операції читання
- [Stomp::getSessionId](stomp.getsessionid.md) — Повертає
ідентифікатор поточної сесії Stomp
- [Stomp::hasFrame](stomp.hasframe.md) — Перевіряє, чи можливо
читання кадру
- [Stomp::readFrame](stomp.readframe.md) — Виконує операцію читання
наступного кадру
- [Stomp::send](stomp.send.md) — Надсилає повідомлення
- [Stomp::setReadTimeout](stomp.setreadtimeout.md) — Встановлює
граничний час очікування операції читання
- [Stomp::subscribe](stomp.subscribe.md) — Зареєструє передплату на
вказане розсилання
- [Stomp::unsubscribe](stomp.unsubscribe.md) — Видаляє наявну
підписку
