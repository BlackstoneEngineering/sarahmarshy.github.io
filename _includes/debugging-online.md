{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #debugging-online .collapse }
<div>

{: #online-debugging }
## Debugging

{: .card}
<div>

{: .card-block}
<div>

#### Desktop IDE

To debug using a desktop IDE such as Keil uVision, IAR, or Eclipse, click the "Export" button under "Program Details", select your export platform and IDE and click "Export". Your browser will then download a zip file with the project files.

![export](img/export.png) 

#### Printf

Another way to do basic debugging is to use the `printf` command in your code, then read the output using a serial terminal such as [PuTTY](http://www.putty.org/) or [CoolTerm](http://freeware.the-meiers.org/). For example, add `printf("Hello World!\n\r");` to the top of your main function, then recompile the program and flash it to your device.

Unless otherwise specified, `printf` defaults to a baud rate/speed of `9600` on mbed OS. To determine which communication port your board is connected to, follow the instructions for your operating system below:

##### Windows

Open the Device Manager by pressing `Windows key + R`, type `devmgmt.msc` and click "OK." Under "Ports (COM & LPT)" your mbed board will be listed as a "USB Serial Device" next to its COM port.

##### Linux

Run `dmesg | grep tty` from your command line. 

##### Mac

Run `ls /dev/tty.*` from your command line. 

</div>
</div>
<p></p>

{: style="text-align: center;"}
<div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#blinky" data-target="#blinky-online" 
      aria-controls="blinky-online">Go Back</button>
  {:/}
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#more" data-target="#more-reading-online" 
      aria-controls="more-reading-online">Next: Further reading</button>
  {:/}
</div>

</div>