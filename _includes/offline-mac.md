{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-mac .collapse }
<div>

{: #offline-mac-installation }
### Mac Installation

{: .card}
<div>

{: .card-block}
<div>

{: #offline-mac-python }
#### 1. Install Python & Pip

Mac OS X 10.8+ comes with Python 2.7 pre-installed by Apple. If you are running an earlier version of Mac OS X, download and install [Python 2.7.9+](https://www.python.org/downloads/mac-osx/).

To install Pip, run `sudo easy_install pip` from your command line.


{: #offline-mac-compiler }
#### 2. Install a Compiler

Download and install a compiler:

* [ARM GCC ](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads)  
* [ARMCC ](https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-5)  
* [IAR](https://www.iar.com/iar-embedded-workbench/tools-for-arm/)  

{: #offline-mac-mbed-cli }
#### 3. Install mbed CLI

  To install mbed CLI, run `pip install mbed-cli` from your command line.
  {: .card-text }

  You can check to make sure the mbed CLI installed correctly by running `mbed help`.
  {: .card-text }

{: #offline-mac-setup }
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