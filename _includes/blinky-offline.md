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

From your command-line, import the example:
{: .card-text}

```console
$ mbed import mbed-os-example-blinky
$ cd mbed-os-example-blinky
```
  
#### 2. Compile and Program Your Board

Invoke `mbed compile` and specify the name of your platform and your installed toolchain (`GCC_ARM`, `ARM`, `IAR`). For example, for the ARM Compiler 5:
{: .card-text}
  
```console
$ mbed compile -m K64F -t ARM -f
```  

<!--
The `-f` argument will automatically flash the compiled program onto your board if it is connected to your computer. You can check which boards are connected with `mbed detect`.
{: .card-text}

The compiled binary file will be in `/BUILDS/TARGET/ProgramName.bin`.
{: .card-text} -->

</div>
</div>
</div>