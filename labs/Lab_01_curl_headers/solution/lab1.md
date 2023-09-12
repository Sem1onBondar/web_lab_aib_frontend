# HTTP|HTTPS и их параметры

## Отчет по Лаб. №1
## ст. Бондарь С.А.
## гр. АСБ-3-036
___________________________________________________

#### Скрипт: curl http(s)://сайт -I -L -k -v


### RGUPS
- __[‍🎓 РГУПС](https://www.rgups.ru)__
```shell
* Connected to www.rgups.ru (80.72.224.90) port 443 - Подключено к веб-сайту, его IP и порт сервера
* using HTTP/1.x - Семейство версий HTTP
> HEAD / HTTP/1.1 - Версия устанавливает правила для запроса и передачи веб-страниц и ресурсов
> Host: www.rgups.ru - Уникальный сетевой адрес веб-сайта
> User-Agent: curl/8.2.1 - Используемый адрес и версия программы
> Accept: */*
>
< HTTP/1.1 200 OK - Код ответа 200, сервер успешно обработал запрос и возвращает запрошенные данные
< Server: nginx/1.19.1 - Веб-сервер, обрабатывающий HTTP-запрос, является сервером Nginx версии 1.19.1
< Date: Mon, 11 Sep 2023 18:26:38 GMT - Текущая дата и время отправки HTTP-ответа
< Content-Type: text/html; charset=utf-8 - Тип контента, который содержится в HTTP-ответе
< Connection: keep-alive - Указывает на сохранение открытого сетевого соединения для последующих запросов и ответов
< X-Powered-By: ProcessWire CMS - Веб-сервер использует систему управления контентом (CMS) под названием ProcessWire для обработки веб-сайта
< Set-Cookie: wire=e15b3389ee9a37e2b341ccf00024785f; path=/; HttpOnly; SameSite=Lax - Установка куки на стороне клиента при запросе к веб-серверу
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - Дата и время истечения срока действия ресурса или куки
< Cache-Control: no-store, no-cache, must-revalidate - Запрет кеширования ресурса на стороне клиента и сервера
< Pragma: no-cache - Запрет кеширования ресурса на стороне клиента
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 200 OK
Server: nginx/1.19.1
Date: Tue, 11 Sep 2023 18:26:38 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=bb4572b912e6a76845b2d48cbd5e5b3e; path=/; HttpOnly; SameSite=Lax
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
```

### RZD
- __[🚝 РЖД](https://www.rzd.ru/)__
```shell
* Connected to www.rzd.ru (212.164.138.124) port 443
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 403 Forbidden - Ошибка сервера "403 Forbidden" означает ограничение или отсутствие доступа к материалу на странице.
< Connection: close - После завершения ответа сервер должен закрыть соединение с клиентом
< Content-Length: 109 - Длина (в байтах) тела сообщения (веб-страницы или файла)
< Content-Type: text/html - Тип контента, который сервер отправляет в ответ на запрос
<
  0   109    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 403 Forbidden
Connection: close
Content-Length: 109
Content-Type: text/html
```

### PYTHON
- __[🐍 Python](https://www.python.org/)__
```shell
* Connected to www.python.org (146.75.116.223) port 443
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
* schannel: remote party requests renegotiation
* schannel: renegotiating SSL/TLS connection
* schannel: SSL/TLS connection renegotiated
* schannel: remote party requests renegotiation
* schannel: renegotiating SSL/TLS connection
* schannel: SSL/TLS connection renegotiated
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50302 - Тело сообщения в байтах
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN - Страницу можно встраивать во фреймы, но только если они находятся на том же домене (origin)
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Mon, 11 Sep 2023 18:47:10 GMT
< Age: 2325 - Кэширование ресурса на сервере или прокси в течение 2325 секунд
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230085-FRA
< X-Cache: HIT, HIT - Запрашиваемый ресурс был успешно найден и доставлен из кэша сервера или прокси. "HIT" был найден в кэше дважды
< X-Cache-Hits: 52, 8 - Ресурс был найден в кэше 52 раза на первом уровне и 8 раз на втором уровне кэширования
< X-Timer: S1694458030.300936,VS0,VE0
< Vary: Cookie - Ответ на запрос может зависеть от значения cookie в запросе
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
<
  0 50302    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 50302
Server: nginx
Content-Type: text/html; charset=utf-8
X-Frame-Options: SAMEORIGIN
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
Accept-Ranges: bytes
Date: Mon, 11 Sep 2023 18:47:10 GMT
Age: 2325
X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230085-FRA
X-Cache: HIT, HIT
X-Cache-Hits: 52, 8
X-Timer: S1694458030.300936,VS0,VE0
Vary: Cookie
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
___________________________________________________

