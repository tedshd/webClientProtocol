# webClientProtocol
some native protocol for web call client app

## demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdf_Gq-cMAo" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/B4zrFT6XvZY" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/lmNneaH9n2U" frameborder="0" allowfullscreen></iframe>

## How to use

```JavaScript

var webClientProtocol = new webClientProtocol();

webClientProtocol.sms('09xx8xx3xx', 'Hello');
```

New webClientProtocol object

Then on mobile web call this method can call SMS app

## Method

### sms(number, msg)

| Name | Type | Require | Desc |
|---|---|---|---|
| number | String / Number | Require | tel phone number |
| msg    | String          | Option  | SMS message      |


```JavaScript
// example
webClientProtocol.sms('09xx8xx3xx', 'Hello');
```

### tel(number)

| Name | Type | Require | Desc |
|---|---|---|---|
| number | String / Number | Require | tel phone number |

```JavaScript
// example
webClientProtocol.tel('09xx8xx3xx');
```

### mailto(emailObject)

* emailObject[Object]

| Name | Type | Require | Desc |
|---|---|---|---|
| email   | String | Require |  e-mail address                   |
| cc      | String | Option  |  carbon copy e-mail address       |
| bcc     | String | Option  |  blind carbon copy e-mail address |
| subject | String | Option  |  subject of e-mail                |
| body    | String | Option  |  content of e-mail                |

```JavaScript
// example
var mail = {
    'email': 'tedshd@gmail.com',
    'cc': 'tedshd@gmail.com',
    'bcc': 'tedshd@gmail.com',
    'subject': 'email sub',
    'body': 'This is email content'
};
webClientProtocol.mailto(mail);
```
