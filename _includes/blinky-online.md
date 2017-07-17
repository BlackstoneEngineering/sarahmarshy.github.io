{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #blinky-online .collapse }
<div>

{: #online-blinky }
## Blinky

{: .card}
<div>

{: .card-block}
<div>

#### 1. Get the Code

Visit the mbed-os [blinky example repository](https://developer.mbed.org/teams/mbed-os-examples/code/mbed-os-example-blinky/) and click the "Import into Compiler" button.

![import](img/import-compiler.png) 

#### 2. Compile Your Program

Click on the "Compile" button, your browser will then download the program as a `.bin` file.

![compile](img/compile.png) 

#### 3. Program Your Board

Open the folder where the `.bin` file was downloaded, then click and drag (or copy and paste) the file to your mbed board's USB device folder.

Once the file has been flashed to the board, press the board's "reset" button and you should now see the LED blinking.
  
</div>
</div>
<p></p>

{: style="text-align: center;"}
<div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#develop" data-target="#online-compile" 
      aria-controls="online-compile">Go Back</button>
  {:/}
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#debug" data-target="#debugging-online" 
      aria-controls="debugging-online">Next: Debug your program</button>
  {:/}
</div> 

<!-- {% include debugging-online.md %}-->

</div>