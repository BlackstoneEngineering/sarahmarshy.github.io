{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-windows .collapse }
<div>

{: .card}
<div>

{: .card-block}
<div>

{: #offline-windows-setup }
### Windows Setup

#### 1. Install mbed CLI

Download and run the [mbed CLI Windows .exe installer](https://github.com/ARMmbed/mbed-cli-windows-installer/releases).

You can check to make sure the mbed CLI installed correctly by running `mbed help`.

**Note:** the Windows installer only installs the ARM GCC toolchain, if you would like to compile using the ARM Compiler 5 or IAR, visit the links below:

  * [ARMCC ](https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-5)  
  * [IAR](https://www.iar.com/iar-embedded-workbench/tools-for-arm/)  

#### 2. Setup Environment

Make sure the compiler is available in your global path:

  * ARM GCC: run `arm-none-eabi-gcc --version` from your command line
  * ARMCC:  run `armcc` with no arguments from your command line
  * IAR: run `iccarm --version` from your command line
  
</div>
</div>
</div>
<p></p>