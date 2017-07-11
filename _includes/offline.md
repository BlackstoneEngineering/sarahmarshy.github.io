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

1. Install [Python 2.7.11+](https://www.python.org/downloads/release/python-2711/) and add python.exe to Path
2. Install a compiler of your choice:
  * GCC
  * ARMC5
  * IAR
3. Run pip install mbed-cli from your command line  
You can check to see if this installed correctly by running `mbed help`
  {: .card-text}
  
</div>
</div>
</div>
<p></p>

{: #offline-linux .collapse }
<div>

{: .card}
<div>

{: .card-block}
<div>

{: #offline-linux-installation }
### Linux

1. Install [Python 2.7.11+](https://www.python.org/downloads/release/python-2711/) and add python.exe to Path
2. Install a compiler of your choice:
  * GCC
  * ARMC5
  * IAR
3. Run pip install mbed-cli from your command line  
You can check to see if this installed correctly by running `mbed help`
  {: .card-text}
  
</div>
</div>
</div>
<p></p>

</div>
<p></p>
