- [«mhash](function.mhash.md)
- [Вступ »](intro.openssl.md)

- [PHP Manual](index.md)
- [Криптографічні модулі](refs.crypto.md)
- OpenSSL

# OpenSSL

- [Вступ](intro.openssl.md)
- [Встановлення та налаштування](openssl.setup.md)
- [Вимоги](openssl.requirements.md)
- [Установка](openssl.installation.md)
- [Налаштування під час виконання](openssl.configuration.md)
- [Типи ресурсів](openssl.resources.md)
- [Предвизначені константи](openssl.constants.md)
- [Прапори перевірки](openssl.purpose-check.md)
- [Прапори заповнення для асиметричного
шифрування](openssl.padding.md)
- [Типи ключів](openssl.key-types.md)
- [Прапори/константи PKCS7](openssl.pkcs7.flags.md)
- [Прапори/Константи CMS](openssl.cms.flags.md)
- [Алгоритми підпису](openssl.signature-algos.md)
- [Алгоритми шифрування](openssl.ciphers.md)
- [Константи версій](openssl.constversion.md)
- [Константа SNI (Server Name Indication)] (openssl.constsni.md)
- [Інші константи](openssl.constants.other.md)
- [Параметри ключа/сертифіката](openssl.certparams.md)
- [Перевірка сертифікатів](openssl.cert.verification.md)
- [Функції OpenSSL](ref.openssl.md)
- [openssl_cipher_iv_length](function.openssl-cipher-iv-length.md)
— Отримує довжину вектора, що ініціалізує, шифру.
- [openssl_cms_decrypt](function.openssl-cms-decrypt.md) -
Розшифровує CMS-повідомлення
- [openssl_cms_encrypt](function.openssl-cms-encrypt.md) -
Зашифровує CMS-повідомлення
- [openssl_cms_read](function.openssl-cms-read.md) -
Експортує файл CMS до масиву сертифікатів PEM
- [openssl_cms_sign](function.openssl-cms-sign.md) — Підписує
файл
- [openssl_cms_verify](function.openssl-cms-verify.md) -
Перевіряє підпис CMS
- [openssl_csr_export_to_file](function.openssl-csr-export-to-file.md)
— Експортує CSR у файл
- [openssl_csr_export](function.openssl-csr-export.md) -
Експортує CSR у вигляді рядка
- [openssl_csr_get_public_key](function.openssl-csr-get-public-key.md)
— Повертає відкритий ключ CSR
- [openssl_csr_get_subject](function.openssl-csr-get-subject.md)
— Повертає суб'єкт CSR
- [openssl_csr_new](function.openssl-csr-new.md) - Генерує
CSR
- [openssl_csr_sign](function.openssl-csr-sign.md) — Підписати
CSR за допомогою іншого сертифіката (або їм же) та створити
сертифікат
- [openssl_decrypt](function.openssl-decrypt.md) -
Розшифровує дані
- [openssl_dh_compute_key](function.openssl-dh-compute-key.md) -
Обчислює загальний секретний ключ значення видаленого відкритого
ключа DH та локального ключа DH
- [openssl_digest](function.openssl-digest.md) - Обчислення
дайджесту
- [openssl_encrypt](function.openssl-encrypt.md) - Шифрує
дані
- [openssl_error_string](function.openssl-error-string.md) -
Повертає повідомлення про помилку openSSL
- [openssl_free_key](function.openssl-free-key.md) -
Вивільнення ресурсу ключа
- [openssl_get_cert_locations](function.openssl-get-cert-locations.md)
— Отримати доступні розташування сертифікатів
- [openssl_get_cipher_methods](function.openssl-get-cipher-methods.md)
— Отримати список доступних алгоритмів шифрування
- [openssl_get_curve_names](function.openssl-get-curve-names.md)
- Список доступних імен кривих для ECC
- [openssl_get_md_methods](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
- [openssl_get_privatekey](function.openssl-get-privatekey.md) -
Псевдонім openssl_pkey_get_private
- [openssl_get_publickey](function.openssl-get-publickey.md) -
Псевдонім openssl_pkey_get_public
- [openssl_open](function.openssl-open.md) — Відкрити
запечатані дані
- [openssl_pbkdf2](function.openssl-pbkdf2.md) - Генерує
рядки PKCS5 v2 PBKDF2
- [openssl_pkcs12_export_to_file](function.openssl-pkcs12-export-to-file.md)
— Експортує до сумісного з PKCS#12 файлу сховища
сертифікатів
- [openssl_pkcs12_export](function.openssl-pkcs12-export.md) -
Експортує сумісний з PKCS#12 файл сховища сертифікатів
змінну
- [openssl_pkcs12_read](function.openssl-pkcs12-read.md) -
Розбирає сховище сертифікатів PKCS#12 масив
- [openssl_pkcs7_decrypt](function.openssl-pkcs7-decrypt.md) -
Розшифрувати повідомлення, зашифроване S/MIME
- [openssl_pkcs7_encrypt](function.openssl-pkcs7-encrypt.md) -
Шифрує повідомлення S/MIME
- [openssl_pkcs7_read](function.openssl-pkcs7-read.md) -
Експортувати файл PKCS7 до масиву сертифікатів PEM
- [openssl_pkcs7_sign](function.openssl-pkcs7-sign.md) -
Підписати повідомлення S/MIME
- [openssl_pkcs7_verify](function.openssl-pkcs7-verify.md) -
Перевірити підпис повідомлення S/MIME
- [openssl_pkey_derive](function.openssl-pkey-derive.md) -
Обчислює загальний секрет для відкритого значення віддаленого та
локального ключа DH або ECDH
- [openssl_pkey_export_to_file](function.openssl-pkey-export-to-file.md)
— Записує у файл ключ у форматі PEM
- [openssl_pkey_export](function.openssl-pkey-export.md) -
Отримує рядок із ключем у форматі PEM
- [openssl_pkey_free](function.openssl-pkey-free.md) -
Визволяє ресурс закритого ключа
- [openssl_pkey_get_details](function.openssl-pkey-get-details.md)
— Отримує масив із детальною інформацією про ключ
- [openssl_pkey_get_private](function.openssl-pkey-get-private.md)
— Отримати закритий ключ
- [openssl_pkey_get_public](function.openssl-pkey-get-public.md)
— Витягує відкритий ключ із сертифікату та готує його до
використанню
- [openssl_pkey_new](function.openssl-pkey-new.md) - Генерує
новий закритий ключ
- [openssl_private_decrypt](function.openssl-private-decrypt.md)
— Розшифровує дані за допомогою закритого ключа
- [openssl_private_encrypt](function.openssl-private-encrypt.md)
- Шифрує дані секретним ключем
- [openssl_public_decrypt](function.openssl-public-decrypt.md) -
Розшифровка даних за допомогою відкритого ключа
- [openssl_public_encrypt](function.openssl-public-encrypt.md) -
Шифрування даних відкритим ключем
- [openssl_random_pseudo_bytes](function.openssl-random-pseudo-bytes.md)
- Генерує псевдовипадкову послідовність байт
- [openssl_seal](function.openssl-seal.md) — Запечатати
(зашифрувати) дані
- [openssl_sign](function.openssl-sign.md) - Генерація підпису
- [openssl_spki_export_challenge](function.openssl-spki-export-challenge.md)
— Експорт виклику, пов'язаного з підписаним ключем та викликом
- [openssl_spki_export](function.openssl-spki-export.md) -
Експорт відкритого ключа у форматі PEM із підписаного відкритого
ключа із викликом
- [openssl_spki_new](function.openssl-spki-new.md) — Створення
нового підписаного відкритого ключа із викликом
- [openssl_spki_verify](function.openssl-spki-verify.md) -
Перевіряє підписаний відкритий ключ та виклик
- [openssl_verify](function.openssl-verify.md) - Звірка
сигнатури
- [openssl_x509_check_private_key](function.openssl-x509-check-private-key.md)
— Перевірити, чи секретний ключ до сертифікату ставиться
- [openssl_x509_checkpurpose](function.openssl-x509-checkpurpose.md)
— Перевіряє, чи можна використовувати сертифікат для конкретних
завдань
- [openssl_x509_export_to_file](function.openssl-x509-export-to-file.md)
— Експортує сертифікат у файл
- [openssl_x509_export](function.openssl-x509-export.md) -
Експортує сертифікат у рядок
- [openssl_x509_fingerprint](function.openssl-x509-fingerprint.md)
— Обчислює відбиток або дайджест, поставлений сертифікатом X.509
- [openssl_x509_free](function.openssl-x509-free.md) -
Вивільняє ресурс сертифіката
- [openssl_x509_parse](function.openssl-x509-parse.md) -
Розібрати сертифікат X509 та отримати масив з даними про нього
- [openssl_x509_read](function.openssl-x509-read.md) - Розібрати
сертифікат X.509 та повернути для нього об'єкт
- [openssl_x509_verify](function.openssl-x509-verify.md) -
Перевірка цифрового підпису сертифіката x509 за допомогою публічного
ключа
- [OpenSSLCertificate](class.opensslcertificate.md) - Клас
OpenSSLCertificate
- [OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)
— Клас OpenSSLCertificateSigningRequest
- [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) - Клас
OpenSSLAsymmetricKey
