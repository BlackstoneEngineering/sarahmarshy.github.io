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

#### 1. Install Python & Pip

Download and install [Python 2.7.12+](https://www.python.org/downloads/source/) or run the following from your command line:

```console
$ sudo apt-get install python2.7
$ sudo apt-get install python-pip
$ sudo apt-get update
```

#### 2. Install a Compiler

Download and install a compiler:

  * [ARM GCC ](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads)  
  * [ARMCC ](https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-5)  
  * [IAR](https://www.iar.com/iar-embedded-workbench/tools-for-arm/)  

#### 3. Install mbed CLI

To install the mbed CLI, run `pip install mbed-cli` from your command line.

You can check to make sure the mbed CLI installed correctly by running `mbed help`.

#### 4. Setup Environment

Make sure the compiler is available in your global path:

  * ARM GCC: run `arm-none-eabi-gcc --version` from your command line
  * ARMCC:  run `armcc` with no arguments from your command line
  * IAR: run `iccarm --version` from your command line

</div>
</div>
</div>
<p></p>
