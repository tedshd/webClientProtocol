/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-05-12 10:40:59
 * @version $Id$
 */

(function () {
    function webClientProtocol() {
        var protocol = '';
        function sms(number, msg) {
            if (!number) {
                console.error('not set number');
                return;
            }
            var msg = msg || '',
                platform,
                ua = navigator.userAgent,
                apple = false,
                ios = ['iPhone', 'iPod', 'iPad'];
            for (var d = 0; d < ios.length; d++) {
                if (ua.match(new RegExp(ios[d], 'i'))) {
                    apple = true;
                    break;
                }
            }
            if (apple) {
                platform = '&';
            } else {
                platform = '?';
            }
            protocol = 'sms:' + number + platform + 'body=' + msg;
            location.href = protocol;
        }
        function tel(number) {
            if (!number) {
                console.error('not set number');
                return;
            }
            protocol = 'tel:' + number;
            location.href = protocol;
        }
        function mailto(emailObject) {
            if (!emailObject.email) {
                console.error('not set email');
                return;
            }
            var arr = [],
                query = '';
            if (emailObject.cc) {
                arr.push(emailObject.cc);
            }
            if (emailObject.bcc) {
                arr.push(emailObject.bcc);
            }
            if (emailObject.subject) {
                arr.push(emailObject.subject);
            }
            if (emailObject.body) {
                arr.push(emailObject.body);
            }
            if (arr.length) {
                for (var i = 0; i < arr.length; i++) {
                    if (i === 0) {
                        query = '?';
                    }
                    query = query + arr[i];
                    if (i !== (arr.length - 1)) {
                        query = query + '&';
                    }
                }
            }
            protocol = 'mailto:' + email + query;
            location.href = protocol;
        }
        this.sms = sms;
        this.tel = tel;
        this.mail = mailto;
    }
    window.webClientProtocol = webClientProtocol;
})();