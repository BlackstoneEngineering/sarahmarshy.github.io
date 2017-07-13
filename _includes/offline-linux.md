{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-linux .collapse }
<div>

{: .card }
<div>

{: .card-block }
<div>

{: #offline-linux-setup }
### Linux Setup

{: #offline-linux-python }
#### 1. Install Python & Pip

Download and install [Python 2.7.9+](https://www.python.org/downloads/source/) or run the following from your command line:

```console
$ sudo apt-get install python2.7
$ sudo apt-get install python-pip
$ sudo apt-get update
```

{: #offline-linux-compiler }
#### 2. Install a Compiler

Download and install a compiler:

* [ARM GCC ](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads)  
* [ARMCC ](https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-5)  
* [IAR](https://www.iar.com/iar-embedded-workbench/tools-for-arm/)  

{: #offline-linux-mbed-cli }
#### 3. Install mbed CLI

  To install mbed CLI, run `pip install mbed-cli` from your command line.  
  {: .card-text }
  
  You can check to make sure the mbed CLI installed correctly by running `mbed help`.
  {: .card-text }
  
{: #offline-linux-setup }
#### 4. Setup Environment

Make sure the compiler is available in your global path:
{: .card-text }

  * ARM GCC - run `arm-none-eabi-gcc --version` in your terminal
  * ARMCC - run `armcc` with no arguments in your terminal
  * IAR - run `iccarm --version` in your terminal
{: .card-text }

</div>
</div>
</div>
<p></p>
