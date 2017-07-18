{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #blinky-offline .collapse }
<div>

{: #offline-blinky }
## Blinky

{: .card}
<div>

{: .card-block}
<div>

#### 1. Get the Code

From your command line, import the example:

```console
$ mbed import https://github.com/ARMmbed/mbed-os-example-blinky
$ cd mbed-os-example-blinky
```
  
#### 2. Compile and Program Your Board

Invoke `mbed compile` and specify the name of your platform and your installed toolchain (`GCC_ARM`, `ARM`, `IAR`). For example, for the K64F platform and ARM Compiler 5 toolchain:
  
```console
$ mbed compile -m K64F -t ARM -f
```  

The `-f` argument will automatically flash the compiled program onto your board if it is connected to your computer. You can see which boards are connected with `mbed detect`. 

After the program has been flashed to the board, press the board's "reset" button and you should now see the LED blinking.

</div>
</div>
<p></p>

{: style="text-align: center;"}
<div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#develop" data-target="#offline-compile" 
      aria-controls="offline-compile">Go Back</button>
  {:/}
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#debug" data-target="#debugging-offline" 
      aria-controls="debugging-offline">Next: Debug your program</button>
  {:/}
</div> 

</div>