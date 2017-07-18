{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #debugging-offline .collapse }
<div>

{: #offline-debugging }
## Debugging

{: .card}
<div>

{: .card-block}
<div>

#### Desktop IDE

To debug using a desktop IDE such as Keil uVision, IAR, or Eclipse you can use the `mbed export` command to generate project files. For example, for a K6F and Keil uVision:

```console
$ mbed export -i uvision -m K64F
```  

#### Printf

Another way to do basic debugging is to use the `printf` command in your code, then read the output using a serial terminal such as [PuTTY](http://www.putty.org/) or [CoolTerm](http://freeware.the-meiers.org/). For example, add `printf("Hello World!\n\r");` to the top of your main function, then recompile the program and flash it to your device.

Invoke `mbed detect` from your command line to determine which communication port your board is connected to (i.e. `COM18`, `/dev/ttyACM0`, etc.). Unless otherwise specified, `printf` defaults to a baud rate/speed of `9600` on mbed OS.

</div>
</div>
<p></p>

{: style="text-align: center;"}
<div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#blinky" data-target="#blinky-offline" 
      aria-controls="blinky-offline">Go Back</button>
  {:/}
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#more" data-target="#more-reading-offline" 
      aria-controls="more-reading-offline">Next: Further reading</button>
  {:/}
</div>

</div>