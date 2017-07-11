{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-compile .collapse }
<div>

## Offline Development

{: .card}
<div>

{: .card-block}
<div>
{: #offline-operating-system }
#### Choose your Operating System

{: style="text-align: center;"}
<div>
{: .btn-group #offline-choose-os role="group"}
  <div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" style="cursor: pointer" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-windows" 
      aria-controls="offline-windows">Windows</button>
    <button class="btn btn-outline-primary" style="cursor: pointer" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-linux" 
      aria-controls="offline-linux">Linux</button>
    <button class="btn btn-outline-primary" style="cursor: pointer" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-mac" 
      aria-controls="offline-mac">Mac</button>
  {:/}
  </div>
</div>
</div>
</div>
<p></p>

{: #offline-os aria-multiselectable="true" }
<div>

{: #offline-windows .collapse }
<div>

{: .card}
<div>

{: .card-block}
<div>

{: #offline-windows-installation }
#### Windows Installation

Download and run the [mbed CLI Windows installer](https://github.com/ARMmbed/mbed-cli-windows-installer/releases).
{: .card-text}
  
</div>
</div>
</div>
<p></p>

{: #offline-linux .collapse }
<div>

{: #offline-linux-installation }
### Linux Installation

{: .card }
<div>

{: .card-block }
<div>

{: .card-text }
<div>

#### Install Python & Pip

```shell
$ sudo apt-get install python2
$ sudo apt-get install python-pip
$ sudo apt-get update
```

#### Install a Compiler

[ARM GCC ](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads)  
[ARMC5 ](https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-5)  
[IAR](https://www.iar.com/iar-embedded-workbench/tools-for-arm/)  
{: .card-text}
  
#### Complete Installation

```shell
$ pip install mbed-cli
$ mbed help               # Installation is successful if command runs
```  
{: .card-text}

</div>

</div>
</div>
</div>
<p></p>


{: #offline-mac .collapse }
<div>

{: .card}
<div>

{: .card-block}
<div>

{: #offline-mac-installation }
### Mac

{: .card-text}



</div>
</div>
</div>
<p></p>

</div>
<p></p>
