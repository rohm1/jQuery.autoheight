jQuery.autoheight
=================

A jQuery plugin to autoheight &lt;textarea />s

##How to use##
```js
$('#myTxtArea1').autoheight();
$('#myTxtArea2').autoheight({maxHeight: 150, minHeight: 50});
$('#myTxtArea3').autoheight({maxHeight: 150, minHeight: 50}, callback);
$('#myTxtArea4').autoheight(callback);
```

Parameters:
* maxHeight: the maximum height your textarea will have, numeric value in pixels. Default is 200.
* minHeight: the minimum height your textarea will have. It can be a numeric value in pixels or 'auto': in this case, the initial height of the textarea will be used. Default is 'auto'.
* callback: a callback function that will be executed when the target is resized. This callback context's is the target, and the new height of the target is send as argument. Please refer to the demos.

##Licence##

Copyright (c) 2012-2013, rohm1 <rp@rohm1.com>.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

* Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

* Neither the name of rohm1 nor the names of his
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
