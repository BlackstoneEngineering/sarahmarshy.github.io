{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-mac .collapse }
<div>

{: .card}
<div>

{: .card-block}
<div>

{: #offline-mac-setup }
### Mac Setup

#### 1. Install Python & Pip

Mac OS X 10.8+ comes with Python 2.7 pre-installed by Apple. If you are running an earlier version of Mac OS X, download and install [Python 2.7.12+](https://www.python.org/downloads/mac-osx/).

To install Pip, run `sudo easy_install pip` from your command line.

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